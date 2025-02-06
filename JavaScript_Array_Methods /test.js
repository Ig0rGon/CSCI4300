import React, { useState } from "react";
import { ReactMic } from "react-mic";

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = (recordedBlob) => {
    setIsRecording(false);
    sendAudioToWhisper(recordedBlob.blob);
  };

  const sendAudioToWhisper = async (audioBlob) => {
    const formData = new FormData();
    formData.append("file", audioBlob, "recording.wav");
    formData.append("model", "whisper-1");

    const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer YOUR_API_KEY`,
      },
      body: formData,
    });

    const data = await response.json();
    setTranscript(data.text);
  };

  return (
    <div>
      <h1>Whisper Transcription App</h1>
      <ReactMic
        record={isRecording}
        onStop={stopRecording}
        mimeType="audio/wav"
      />
      <button onClick={startRecording} disabled={isRecording}>
        {isRecording ? "Recording..." : "Listen"}
      </button>
      <p>{transcript}</p>
    </div>
  );
}

export default App;