import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  let handelVideo = useRef();

  let handlePlayPause = () => {
    if (!isPlaying) {
      handelVideo.current.play();
    } else {
      handelVideo.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  let handleTime1=(()=>{
    handelVideo.current.currentTime+=10
  })

  let handleTime2=(()=>{
    handelVideo.current.currentTime-=10
  })

  return (
    <>
      <div
        className=""
        style={{ position: "relative", width: "100%", height: "700px" }}
      >
        <video ref={handelVideo} style={{ width: "100%", height: "100%" }}>
          <source src="https://videos.pexels.com/video-files/29660257/12759642_640_360_60fps.mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
            <button onClick={handleTime1}>
          -10
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={handleTime2}>
          +10
          </button>
        
        </div>
      </div>
    </>
  );
}

export default App;
