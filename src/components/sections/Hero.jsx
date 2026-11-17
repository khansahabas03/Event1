import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, CalendarDays, Clock, Sparkles, ArrowDown, Flower2, Users, Quote, PartyPopper, Music2, Volume2, Navigation, ArrowUp, Instagram, Share2, Copy, Check, X, ChevronLeft, ChevronRight, CalendarPlus } from "lucide-react";
import weddingData from "../../data/weddingData";
import GoldDivider from "../shared/GoldDivider";

function Hero() {
  return <section className="hero section-pad" id="home">
    <div className="hero-cinematic-photo" style={{ backgroundImage: `url(${weddingData.couple.couplePhoto})` }} aria-hidden="true" /><div className="hero-pattern" />
    <motion.div className="hero-inner" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
      <p className="arabic" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
      <p className="eyebrow">A CELEBRATION OF LOVE & DESTINY</p>
      <div className="hero-monogram">A <span>&</span> R</div>
      <h1 className="hero-names">Sk Akif <span>&</span><br /><em>Raisa Farheen</em></h1>
      <GoldDivider />
      <p className="hero-subtitle">With the blessings of Allah and our beloved families,<br className="desktop-break" /> we invite you to celebrate our wedding.</p>
      <p className="hero-date"><CalendarDays size={17} /> 14 – 16 December 2026</p>
      <a className="outline-button" href="#events">Explore the celebration <ArrowDown size={16} /></a>
    </motion.div>
    <div className="hero-corner corner-one">✧</div><div className="hero-corner corner-two">✧</div><div className="hero-orb orb-one" /><div className="hero-orb orb-two" /><div className="hero-orb orb-three" />
  </section>;
}

export default Hero;
