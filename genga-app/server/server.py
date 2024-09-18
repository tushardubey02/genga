from flask import Flask, jsonify, request
from flask_cors import CORS
import requests, json
from show import show


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "http://127.0.0.1:3000"]}})
  # Enable CORS for all routes

anime = show() # Get the anime data
stage = 0 # Set the stage to 0
name,userRating,studio = anime["Name"],anime["Rating"],anime["Studio"] # Get the name, rating and status of the anime
nameField, ratingField, statusField = "", "???", "???" # Initialize the fields 
for x in name:
    if x != " ":
        nameField += "*"
    else:
        nameField += " "
# print(nameField, userRating, studio)

# Define a route that returns JSON data
@app.route('/anime', methods=['GET'])
def get_data():
    return {'name': name, 'ranking': userRating, 'genre': anime["Tags"], 'studio': studio}

# Define a route to increment the stage
@app.route('/increment_stage', methods=['POST'])
def increment_stage():
    global stage
    stage += 1
    print("Stage: ", stage)
    return jsonify({'stage': stage})

# print("Stage: ", stage)

if __name__ == '__main__':
    app.run(debug=True)
