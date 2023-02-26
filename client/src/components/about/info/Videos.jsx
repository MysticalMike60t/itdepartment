import React from 'react'
import video1 from "../../../videos/Burdo_OBern-Beat-reporting-IT.mp4";
import video2 from "../../../videos/Open-House-IT.mp4";

const Videos = () => {
  return (
    <div className="inst videos">
        <h1>Videos</h1>
        <div className="video-grid">
            <video src={video1} type="video/mp4" autoPlay muted loop controls/>
            <video src={video2} type="video/mp4" autoPlay muted loop controls/>
        </div>
    </div>
  )
}

export default Videos