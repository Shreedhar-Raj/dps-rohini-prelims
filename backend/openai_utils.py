import whisper

model = whisper.load_model("base")
result = model.transcribe("Sector-24.mp3")
print(result["text"])