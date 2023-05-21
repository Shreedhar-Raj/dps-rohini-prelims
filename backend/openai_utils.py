import whisper

def transcribe(audio_path): 
    model = whisper.load_model("base")
    result = model.transcribe("Sector-24.mp3")
    return result["text"]

