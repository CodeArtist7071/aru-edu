import requests
import json
from config import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

headers = {
    "apikey": SUPABASE_SERVICE_ROLE_KEY,
    "Authorization": f"Bearer {SUPABASE_SERVICE_ROLE_KEY}"
}

url = f"{SUPABASE_URL}/rest/v1/"
response = requests.get(url, headers=headers)
data = response.json()

tables_of_interest = ['questions', 'question_explanations', 'question_correct_explanations', 'chapters']
result = {}

for t in tables_of_interest:
    if t in data.get('definitions', {}):
        props = data['definitions'][t].get('properties', {})
        result[t] = {col: details.get('format') or details.get('type') for col, details in props.items()}
    else:
        result[t] = "Not found"

with open('schema_out.json', 'w') as f:
    json.dump(result, f, indent=2)
