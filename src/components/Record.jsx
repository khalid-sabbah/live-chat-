import React, { useState } from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';

const Record = ({onSendAudio}) => {
  const [recording, setRecording] = useState(false);
  const handleRecordingComplete = (blob) => {
    // Handle the recorded audio blob
    console.log(blob);
    onSendAudio(blob);
  };

  return (
    <AudioRecorder
      onRecordingComplete={handleRecordingComplete}
      audioTrackConstraints={{ noiseSuppression: true, echoCancellation: true }}
      downloadOnSavePress={false}
      downloadFileExtension="mp3"
    />
  );
};

export default Record;
