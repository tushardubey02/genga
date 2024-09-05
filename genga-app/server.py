from flask import Flask, jsonify

app = Flask(__name__)

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
