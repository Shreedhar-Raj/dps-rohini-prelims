import { useState } from 'react';
import AudioRecorder from '../components/AudioRecorder';

const Home = () => {
  const [transcription, setTranscription] = useState('');

  const handleAudioRecording = async () => {
    const formData = new FormData();
    const audioBlob = localStorage.getItem('audioBlob');
    formData.append('audio', audioBlob);

    try {
      const response = await fetch('http://127.0.0.1:4996/api/transcribe-audio', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setTranscription(data.transcription);
      } else {
        console.error('Transcription request failed');
      }
    } catch (error) {
      console.error('Error transcribing audio:', error);
    }
  };

  return (
    <div>
      <h1>Audio Transcription</h1>
      <AudioRecorder onAudioRecording={handleAudioRecording()}/>
      {transcription && <p className='text-white'>{transcription}</p>}
    </div>
  );
};

export default Home;
