from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Define a route that returns JSON data
@app.route('/get_data', methods=['GET'])
def get_data():
    return {'name': 'Fullmetal Alchemist: Brotherhood', 'description': 'A great anime', 'status': 'ongoing'}
    # return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
