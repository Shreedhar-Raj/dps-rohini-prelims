from flask import Flask, request
import firebase_admin
from username_utils import random_name
app = Flask(__name__)

import os
from flask import Flask, request, jsonify

from firebase_utils import *

from pydub import AudioSegment

@app.route('/api', methods=['GET'])
def name():
  return "Hello World"

@app.route('/api/user/login', methods=['POST']) 
def login():
    email = request.json['email']
    password = request.json['password']
    return login_user(email, password), "success"
    
@app.route('/api/user/create', methods=['POST'])
def create():
    email = request.json['email']
    password = request.json['password']
    city = request.json['city']
    next_cap_hardik = request.json['next_cap_hardik']
    rashid = request.json['rashid']
    rcb_win = request.json['rcb_win']
    sachin = request.json['sachin']
    team = request.json['team']
    return create_user(email, password, city, next_cap_hardik, rashid, rcb_win, sachin, team)
@app.route('/api/groups/message', methods=['POST'])
def message():
    groupId = request.json['groupId']
    message = request.json['message']
    userId = request.json['userId']
    return create_message(groupId, message, userId)


if __name__ == '__main__':
    app.debug = True
    app.run(port=4996)