import requests
import json
import re
import os
import datetime
from config import API_KEY, GEMINI_MODEL, LOG_DIR

class AIEngine:
    def __init__(self, session_id=None):
        self.url = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent?key={API_KEY}"
        self.headers = {"Content-Type": "application/json"}
        self.session_id = session_id or datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        self.log_file = os.path.join(LOG_DIR, f"conversation_{self.session_id}.md")
        
        # Initialize log file with header
        if not os.path.exists(self.log_file):
            with open(self.log_file, "w", encoding="utf-8") as f:
                f.write(f"# AI Conversation Log: {self.session_id}\n")
                f.write(f"Model: {GEMINI_MODEL}\n")
                f.write(f"Date: {datetime.datetime.now().isoformat()}\n\n")
        
        print(f"[AI] Gemini Engine Initialized ({GEMINI_MODEL}) | Log: {os.path.basename(self.log_file)}")

    def generate(self, prompt, temperature=0.7, json_mode=False):
        """Generates content from Gemini with optional JSON extraction and full logging."""
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {
                "temperature": temperature,
                "maxOutputTokens": 8192,
                "responseMimeType": "application/json" if json_mode else "text/plain"
            }
        }

        try:
            response = requests.post(self.url, headers=self.headers, json=payload, timeout=120)
            if response.status_code != 200:
                err_msg = f"[AI ERROR] {response.status_code}: {response.text}"
                print(err_msg)
                self._log_interaction(prompt, err_msg)
                return None

            data = response.json()
            text_result = data["candidates"][0]["content"]["parts"][0]["text"]
            
            # Log the successful interaction
            self._log_interaction(prompt, text_result)

            if json_mode:
                return self._clean_json(text_result)
            return text_result

        except Exception as e:
            err_msg = f"[AI ERROR] Exception: {e}"
            print(err_msg)
            self._log_interaction(prompt, err_msg)
            return None

    def get_embedding(self, text):
        """Generates a 768-dimensional vector embedding for semantic search."""
        # Using exact model name gemini-embedding-001 from verified list
        embed_url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key={API_KEY}"
        payload = {
            "model": "models/gemini-embedding-001",
            "content": {"parts": [{"text": text}]},
            "outputDimensionality": 768 # Match Supabase vector(768)
        }

        try:
            response = requests.post(embed_url, headers=self.headers, json=payload, timeout=60)
            if response.status_code != 200:
                print(f"[AI ERROR] Embedding failed: {response.text}")
                return None
            
            return response.json()["embedding"]["values"]
        except Exception as e:
            print(f"[AI ERROR] Embedding Exception: {e}")
            return None

    def _log_interaction(self, prompt, response):
        """Logs the interaction to the session markdown file."""
        try:
            with open(self.log_file, "a", encoding="utf-8") as f:
                f.write(f"## Interaction [{datetime.datetime.now().strftime('%H:%M:%S')}]\n\n")
                f.write(f"### Prompt:\n```text\n{prompt}\n```\n\n")
                f.write(f"### Response:\n")
                if response.startswith("{") or response.startswith("["):
                    f.write(f"```json\n{response}\n```\n\n")
                else:
                    f.write(f"{response}\n\n")
                f.write("---\n\n")
        except Exception as e:
            print(f"[AI ERROR] Logging failed: {e}")

    def _clean_json(self, text):
        """Strips markdown fences and attempts robust JSON recovery."""
        # 1. Strip Markdown Code Fences
        clean = re.sub(r"```json\s*", "", text)
        clean = re.sub(r"```\s*", "", clean)
        clean = clean.strip()
        
        try:
            return json.loads(clean)
        except json.JSONDecodeError:
            # 2. Heuristic: Try to find start of array/object if AI added preamble
            match = re.search(r'(\[|\{)', clean)
            if match:
                try:
                    return json.loads(clean[match.start():])
                except:
                    pass
            print("[AI ERROR] Failed to parse JSON from AI response")
            return None
