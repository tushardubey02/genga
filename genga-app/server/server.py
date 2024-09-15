from flask import Flask, jsonify
from flask_cors import CORS
import requests, json
from show import show


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "http://127.0.0.1:3000"]}})
  # Enable CORS for all routes

# Get data using API
# url = "https://anime-db.p.rapidapi.com/anime"
# querystring = {"page":"1","size":"1","search":"Attack on Titan","sortBy":"ranking","sortOrder":"asc"}
# headers = {
# 	"x-rapidapi-key": "d659c397d6msh68ee508d302687cp19803ejsn4f34ab5ab129",
# 	"x-rapidapi-host": "anime-db.p.rapidapi.com"
# }

# # Get the data from the API
# response = requests.get(url, headers=headers, params=querystring)
# results = response.json()

# anime = results['data'][0]
# title = anime['title']
# ranking = anime['ranking']
# status = anime['status']

# print(results)

# # Output the extracted information
# print("\n*****Testing the API*****")
# print(f"Title: {title}")
# print(f"Ranking: {ranking}")
# print(f"Status: {status}")
# print("\n")

anime = show()
print(anime)
print("*********")
print(anime["name"])
name,userRating,status = anime["name"],anime["rating"],"ongoing"
placeholder1 = ""
for x in name:
    if x != " ":
        placeholder1 += "*"
    else:
        placeholder1 += " "
print(placeholder1, userRating, status)

# Define a route that returns JSON data
@app.route('/anime', methods=['GET'])
def get_data():
    return {'name': name, 'ranking': userRating, 'status': 'ongoing'}

if __name__ == '__main__':
    app.run(debug=True)
