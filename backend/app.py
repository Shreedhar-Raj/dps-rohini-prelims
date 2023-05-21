from flask import Flask, request

from username_utils import random_name
app = Flask(__name__)

import os
from flask import Flask, request, jsonify
from openai_utils import transcribe
from pydub import AudioSegment
@app.route('/username', methods=['GET'])
def get_username():
    return random_name()

@app.route('/api/login', methods=['POST']) 
def login():
    username = request.json['email']
    password = request.json['password']
    print(username, password)
    return jsonify({'success': True})
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