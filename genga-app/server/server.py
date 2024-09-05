from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Define a route that returns JSON data
@app.route('/get_data', methods=['GET'])
def get_data():
    data = {
        "name": "RapidAPI",
        "description": "API platform for easy integration",
        "status": "active"
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
