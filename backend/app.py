from flask import Flask, request
import firebase_admin
from username_utils import random_name
app = Flask(__name__)

import os
from flask import Flask, request, jsonify
from openai_utils import transcribe
from firebase_utils import *
import dotenv
from pydub import AudioSegment
dotenv.load_dotenv()
config = os.getenv("FB_CONFIG")
@app.route('/', methods=['GET'])
def name():
  return "Hello World"

@app.route('/api/user/login', methods=['POST']) 
def login():
    email = request.json['email']
    password = request.json['password']
    return login_user(email, password)
    
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

@app.route('/api/transcribe-audio', methods=['POST'])
def transcribe_audio():
    if 'audio' not in request.files:
        return jsonify({'error': 'No audio file found.'}), 400

    audio_file = request.files['audio']
    if audio_file.filename == '':
        return jsonify({'error': 'No selected audio file.'}), 400

    try:

        audio = AudioSegment.from_file(audio_file)
        audio.export('audio.wav', format='wav')


        transcription = transcribe('audio.wav')


        return jsonify({'transcription': transcription})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        os.remove('audio.wav')

if __name__ == '__main__':
    app.debug = True
    app.run(port=4996)