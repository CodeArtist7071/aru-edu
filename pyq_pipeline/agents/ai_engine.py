import google.generativeai as genai
import sys
import os

# Add parent path to find config
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from config.settings import API_KEY, GEMINI_MODEL
from utils.cache import AICache

class Part:
    """Compatibility class for Vertex AI transition"""
    @staticmethod
    def from_data(mime_type, data):
        return {"mime_type": mime_type, "data": data}

class AIEngine:
    def __init__(self, model_name=None):
        self.model_name = model_name or GEMINI_MODEL
        print(f"[AI-GENAI] Initializing Engine ({self.model_name})...")
        genai.configure(api_key=API_KEY)
        self.model = genai.GenerativeModel(self.model_name)
        self.cache = AICache()

    def generate(self, content, **kwargs):
        """
        content can be a string (text prompt) or a list/array of parts.
        """
        # Check cache if it's a simple string prompt
        use_cache = kwargs.get("use_cache", True)
        if use_cache and isinstance(content, str):
            cached = self.cache.get(content, self.model_name)
            if cached:
                return cached

        try:
            gen_config = {}
            if "temperature" in kwargs:
                gen_config["temperature"] = kwargs["temperature"]
            
            # For JSON mode in genai
            if kwargs.get("json_mode"):
                gen_config["response_mime_type"] = "application/json"

            # Check if content is Vertex-style Part list and convert if needed
            processed_content = content
            if isinstance(content, list):
                processed_content = []
                for item in content:
                    if hasattr(item, "data"): # Vertex Part
                         processed_content.append({
                             "mime_type": item.mime_type,
                             "data": item.data
                         })
                    else:
                        processed_content.append(item)

            response = self.model.generate_content(
                processed_content,
                generation_config=gen_config
            )
            
            result = response.text
            
            # Store in cache if successful
            if use_cache and isinstance(content, str) and result:
                self.cache.set(content, result, self.model_name)
                
            return result
        except Exception as e:
            print(f"[AI ERROR] GenAI Generation failed: {e}")
            return None

