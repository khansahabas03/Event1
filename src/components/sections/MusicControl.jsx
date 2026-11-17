import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, CalendarDays, Clock, Sparkles, ArrowDown, Flower2, Users, Quote, PartyPopper, Music2, Volume2, Navigation, ArrowUp, Instagram, Share2, Copy, Check, X, ChevronLeft, ChevronRight, CalendarPlus } from "lucide-react";
import weddingData from "../../data/weddingData";
import GoldDivider from "../shared/GoldDivider";
import { startWeddingMusic, pauseWeddingMusic, isWeddingMusicPlaying } from "../../audio/weddingMusic";

function MusicControl() {
  const [playing, setPlaying] = useState(isWeddingMusicPlaying());
  useEffect(() => {
    const onMusicState = (event) => setPlaying(Boolean(event.detail));
    window.addEventListener("wedding-music-state", onMusicState);
    return () => window.removeEventListener("wedding-music-state", onMusicState);
  }, []);

  const toggleMusic = () => {
    if (isWeddingMusicPlaying()) {
      pauseWeddingMusic();
      setPlaying(false);
    } else {
      const started = startWeddingMusic();
      setPlaying(started);
    }
  };

  return <button className={`music-toggle ${playing ? "is-playing" : ""}`} onClick={toggleMusic} aria-label={playing ? "Pause ambient music" : "Play ambient music"} title={playing ? "Pause ambient music" : "Play ambient music"}>
    {playing ? <Volume2 size={18} /> : <Music2 size={18} />}
    <span>{playing ? "Music on" : "Play music"}</span>{playing && <i className="music-wave" aria-hidden="true"><b></b><b></b><b></b><b></b></i>}
  </button>;
}

export default MusicControl;
