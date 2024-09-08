from flask import Flask, jsonify
from flask_cors import CORS
import requests, json


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Get data using API
url = "https://anime-db.p.rapidapi.com/anime"
querystring = {"page":"1","size":"1","search":"Fullmetal"}
headers = {
	"x-rapidapi-key": "d659c397d6msh68ee508d302687cp19803ejsn4f34ab5ab129",
	"x-rapidapi-host": "anime-db.p.rapidapi.com"
}

# Get the data from the API
response = requests.get(url, headers=headers, params=querystring)
results = response.json()

anime = results['data'][0]
title = anime['title']
ranking = anime['ranking']
status = anime['status']

# Output the extracted information
print("\n*****Testing the API*****")
print(f"Title: {title}")
print(f"Ranking: {ranking}")
print(f"Status: {status}")
print("\n")

# Define a route that returns JSON data
@app.route('/get_data', methods=['GET'])
def get_data():
    # return {'name': title, 'ranking': ranking, 'status': status}
    return {'name': 'Fullmetal Alchemist: Brotherhood', 'description': 'A great anime', 'status': 'ongoing'}
    # return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
