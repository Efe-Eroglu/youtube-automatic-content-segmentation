import requests
import os

def send_to_chatgpt(prompt):
    api_key = os.getenv("CHATGPT_API_KEY")
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "model": "gpt-4",
        "messages": [{"role": "user", "content": prompt}]
    }
    
    response = requests.post("https://api.openai.com/v1/chat/completions", json=payload, headers=headers)
    
    if response.status_code == 200:
        return response.json().get("choices")[0]["message"]["content"]
    
    return "Failed to process request"
