import React from 'react';
import './App.css'; // Ensure you have this CSS file for styles

function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay muted loop style={{ position: 'fixed', right: 0, bottom: 0, minWidth: '100%', minHeight: '100%', zIndex: -1 }}>
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      {/* Place any content you want on top of the video background here */}
      <div className="content">
        <h1>Welcome to Nana Graphic Run</h1>
        {/* More content */}
      </div>
    </div>
  );
}

export default App;