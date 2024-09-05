import requests
import json

url = "https://anime-db.p.rapidapi.com/anime"

querystring = {"page":"1","size":"1","search":"Fullmetal"}

headers = {
	"x-rapidapi-key": "d659c397d6msh68ee508d302687cp19803ejsn4f34ab5ab129",
	"x-rapidapi-host": "anime-db.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)
json_data = json.loads(response)

print(response.json())
