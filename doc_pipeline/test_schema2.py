import requests
import json
from config import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

headers = {
    "apikey": SUPABASE_SERVICE_ROLE_KEY,
    "Authorization": f"Bearer {SUPABASE_SERVICE_ROLE_KEY}"
}

# The OpenAPI spec is available at /rest/v1/?apikey=...
url = f"{SUPABASE_URL}/rest/v1/"
response = requests.get(url, headers=headers)
data = response.json()

tables_of_interest = ['questions', 'question_explanations', 'question_correct_explanations']

for t in tables_of_interest:
    if t in data.get('definitions', {}):
        print(f"--- Table: {t} ---")
        props = data['definitions'][t].get('properties', {})
        for col, details in props.items():
            col_type = details.get('format') or details.get('type')
            desc = details.get('description', '')
            print(f"  {col}: {col_type} - {desc}")
    else:
        print(f"Table {t} not found in definitions")
