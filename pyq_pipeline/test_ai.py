import google.generativeai as genai
import sys
import os

# Find config
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
try:
    from pyq_config import API_KEY
    genai.configure(api_key=API_KEY)
    
    models_to_test = [
        "gemini-1.5-flash",
        "gemini-1.5-flash-latest",
        "gemini-1.5-pro",
        "gemini-2.0-flash-exp",
        "gemini-2.0-flash"
    ]
    
    print("--- GEMINI CONNECTIVITY TRIAGE ---")
    for m in models_to_test:
        try:
            print(f"Testing: {m}...", end=" ")
            model = genai.GenerativeModel(m)
            response = model.generate_content("Ping")
            if response.text:
                print("SUCCESS!")
            else:
                print("EMPTY RESPONSE")
        except Exception as e:
            print(f"FAILED: {e}")
            
except Exception as e:
    print(f"CRITICAL ERROR: {e}")
