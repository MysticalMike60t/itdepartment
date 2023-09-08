import React from 'react'
import { interview1Video, openHouseVideo } from '../../../assets/videos'

const Videos = () => {
  return (
    <div className="instance videos">
        <h1>Videos</h1>
        <div className="video-grid">
            <video src={interview1Video} type="video/mp4" autoPlay muted loop controls/>
            <video src={openHouseVideo} type="video/mp4" autoPlay muted loop controls/>
        </div>
    </div>
  )
}

export default Videos