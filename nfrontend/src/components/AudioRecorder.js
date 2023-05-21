import { useState } from 'react';

const AudioRecorder = ({ onAudioRecording }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const handleRecordClick = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.addEventListener('dataavailable', (event) => {
          chunks.push(event.data);
        });

        mediaRecorder.addEventListener('stop', () => {
          const audioBlob = new Blob(chunks, { type: 'audio/wav' });
          setAudioBlob(audioBlob);
          onAudioRecording(audioBlob);
        });
       console.log("mediaRecorder.start()");
        mediaRecorder.start();
        setIsRecording(true);
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    } else {
      setIsRecording(false);
      mediaRecorder.stop();
      localStorage.setItem('audioBlob', audioBlob);
      console.log(audioBlob);
    }
    
  };

  return (
    <div>
      <button onClick={handleRecordClick}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
};

export default AudioRecorder;