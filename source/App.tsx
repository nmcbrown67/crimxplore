import React, { useEffect, useState } from 'react';
import './App.css'; // Ensure you have this CSS file for styles

function App() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Handles scroll event
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    // Simple logic to switch videos based on scroll position
    // Adjust this logic based on your actual layout and how you want the transitions to happen
    const newActiveIndex = Math.min(Math.floor(scrollPosition / windowHeight), videos.length - 1);
    setActiveVideoIndex(newActiveIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define your videos here
  const videos = [
    "https://int.nyt.com/data/videotape/finished/2023/12/1702143468/stabilized_mountain-timelapse_colored_1-1254w.mp4",
    "https://int.nyt.com/data/videotape/finished/2023/12/1702143786/grave-topper_colored-1254w.mp4",
    "videos/frstfilm.mp4",
    "videos/mnkms.mp4",
    // Add the second video URL here
    // Add more video URLs as needed
  ];

  const text = [
    "Fifty years ago, eight Americans set off for South America to climb Aconcagua, one of the world’s mightiest mountains.",
    "Things quickly went wrong. Two climbers died. Their bodies were left behind.",
    "Now, a camera belonging to one of the deceased climbers has emerged from a receding glacier near the summit …",
    "… and one of mountaineering’s most enduring mysteries has been given air and light.",
  ]

  return (
    <div className="App">
    {videos.map((src, index) => (
      <div key={index} className={`video-background ${activeVideoIndex === index ? 'active' : ''}`}>
        <video autoPlay muted loop style={{ position: 'fixed', right: 0, bottom: 0, minWidth: '95%', minHeight: '100%', objectFit: 'cover', zIndex: -1 }}>
          <source src={src} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-text">
          {text[index]}
        </div>
      </div>
    ))}
      {/* Content causing the page to scroll, thus enabling video transitions */}
      <div style={{ height: `${videos.length * 100}vh` }}>
        <div className="content">
          <h1>Welcome to Nana's Graphic Test</h1>
          {<p>test</p>}
        </div>
      </div>
    </div>
  );
}

export default App;