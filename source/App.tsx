import React, { useEffect, useState } from 'react';
import './App.css'; 

function App() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Handles scroll event
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    // Switch videos based on scroll position
    const newActiveIndex = Math.min(Math.floor(scrollPosition / windowHeight), videos.length - 1);
    setActiveVideoIndex(newActiveIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleans up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Videos defined here
  const videos = [
    "https://int.nyt.com/data/videotape/finished/2023/12/1702143468/stabilized_mountain-timelapse_colored_1-1254w.mp4",
    "https://int.nyt.com/data/videotape/finished/2023/12/1702143786/grave-topper_colored-1254w.mp4", // Add the second video URL here
    // Add more video URLs as needed
  ];

  return (
    <div className="App">
      {videos.map((src, index) => (
        <div key={index} className={`video-background ${activeVideoIndex === index ? 'active' : ''}`}>
          <video autoPlay muted loop style={{ position: 'fixed', right: 0, bottom: 0, minWidth: '100%', minHeight: '100%', objectFit: 'cover', zIndex: -1 }}>
            <source src={src} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      ))}
      {/* Content causing the page to scroll, thus enabling video transitions */}
      <div style={{ height: `${videos.length * 100}vh` }}>
        <div className="content">
          <h1>Welcome to Nana's Graphic Test</h1>
          {<p></p>}
        </div>
      </div>
    </div>
  );
}

export default App;