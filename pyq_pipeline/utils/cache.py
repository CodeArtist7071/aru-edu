import os
import json
import hashlib

class AICache:
    def __init__(self, cache_file=None):
        if cache_file is None:
            # Default to storage directory in project root
            base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
            storage_dir = os.path.join(base_dir, "storage")
            os.makedirs(storage_dir, exist_ok=True)
            cache_file = os.path.join(storage_dir, "ai_cache.json")
            
        self.cache_file = cache_file
        self.cache = self._load()

    def _load(self):
        if os.path.exists(self.cache_file):
            try:
                with open(self.cache_file, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except Exception as e:
                print(f"[CACHE] Error loading cache: {e}")
                return {}
        return {}

    def _get_hash(self, text, model="default"):
        """Creates a unique hash for a prompt + model."""
        content = f"{model}:{text}"
        return hashlib.sha256(content.encode('utf-8')).hexdigest()

    def get(self, text, model="default"):
        key = self._get_hash(text, model)
        return self.cache.get(key)

    def set(self, text, response, model="default"):
        key = self._get_hash(text, model)
        self.cache[key] = response
        self._save()

    def _save(self):
        try:
            with open(self.cache_file, 'w', encoding='utf-8') as f:
                json.dump(self.cache, f, indent=2, ensure_ascii=False)
        except Exception as e:
            print(f"[CACHE] Error saving cache: {e}")

if __name__ == "__main__":
    cache = AICache()
    cache.set("test prompt", "cached response")
    print("Get:", cache.get("test prompt"))
