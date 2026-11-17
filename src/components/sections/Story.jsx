import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, CalendarDays, Clock, Sparkles, ArrowDown, Flower2, Users, Quote, PartyPopper, Music2, Volume2, Navigation, ArrowUp, Instagram, Share2, Copy, Check, X, ChevronLeft, ChevronRight, CalendarPlus } from "lucide-react";
import weddingData from "../../data/weddingData";
import GoldDivider from "../shared/GoldDivider";

function Story() {
  return <section className="section-pad story-section" id="story">
    <div className="section-heading"><p className="eyebrow">A JOURNEY OF TWO HEARTS</p><h2>Our Love <em>Story</em></h2><GoldDivider /><p>A decade of memories, leading to forever.</p></div>
    <div className="story-feature">
      <motion.div className="story-photo-wrap" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <img src={weddingData.couple.couplePhoto} alt="A cherished memory of Sk Akif and Raisa Farheen" className="story-photo" />
        <span className="photo-caption">The beginning of forever</span>
      </motion.div>
      <div className="story-copy"><Quote size={32} className="quote-icon" /><p>{weddingData.couple.story}</p><div className="years"><strong>{weddingData.couple.yearsTogether}</strong><span>years of love<br />and friendship</span></div></div>
    </div>
  </section>;
}

export default Story;
