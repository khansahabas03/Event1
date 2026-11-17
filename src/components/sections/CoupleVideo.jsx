import React, { useState } from "react";
import { PlayCircle, Video } from "lucide-react";
import weddingData from "../../data/weddingData";
import GoldDivider from "../shared/GoldDivider";

export default function CoupleVideo() {
  const [unavailable, setUnavailable] = useState(false);
  return (
    <section className="section-pad couple-video-section" id="couple-video">
      <div className="section-heading">
        <p className="eyebrow">A MOMENT TO REMEMBER</p>
        <h2>Our Story in <em>Motion</em></h2>
        <GoldDivider />
        <p>A family-friendly glimpse of the memories we cherish.</p>
      </div>
      <div className="couple-video-frame">
        {!unavailable ? (
          <video controls playsInline preload="metadata" poster={weddingData.couple.couplePhoto}
            onError={() => setUnavailable(true)} aria-label="Sk Akif and Raisa Farheen wedding video">
            <source src="/videos/couple-story.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="video-placeholder" style={{ backgroundImage: `linear-gradient(0deg, rgba(3,34,28,.88), rgba(3,34,28,.24)), url(${weddingData.couple.couplePhoto})` }}>
            <Video size={34} />
            <h3>Your family video will appear here</h3>
            <p>Add your own video as <code>public/videos/couple-story.mp4</code> and redeploy.</p>
            <small>Use a modest, family-appropriate video that you have permission to share.</small>
          </div>
        )}
      </div>
    </section>
  );
}
