from flask import Flask, request

from username_utils import random_name
app = Flask(__name__)

@app.route('/username', methods=['GET'])
def get_username():
    return random_name()



if __name__ == '__main__':
    app.debug = True
    app.run(port=4996)