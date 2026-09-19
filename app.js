import React from 'react';
// Firebase core SDK
import { initializeApp } from "firebase/app";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Yh7wffWmRMyBTXc2PRlBfE7n8uvgMBQ",
  authDomain: "mirinja-heaven-resort.firebaseapp.com",
  projectId: "mirinja-heaven-resort",
  storageBucket: "mirinja-heaven-resort.firebasestorage.app",
  messagingSenderId: "964547613363",
  appId: "1:964547613363:web:98609abce7629e402596c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mirinja Heaven Resort</h1>
        <p>Firebase সফলভাবে কানেক্ট করা হয়েছে!</p>
      </header>
    </div>
  );
}

export default App;
