import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, CalendarDays, Clock, Sparkles, ArrowDown, Flower2, Users, Quote, PartyPopper, Music2, Volume2, Navigation, ArrowUp, Instagram, Share2, Copy, Check, X, ChevronLeft, ChevronRight, CalendarPlus } from "lucide-react";
import weddingData from "../../data/weddingData";
import GoldDivider from "../shared/GoldDivider";

function Footer() {
  return <footer className="footer"><div className="footer-ornament">✦</div><p className="arabic" dir="rtl">بارك الله لكما وبارك عليكما وجمع بينكما في خير</p><h2>Akif <span>&</span> Raisa</h2><p>May Allah bless this union with love, mercy and happiness.</p><GoldDivider /><p className="footer-date">14 – 16 DECEMBER 2026 • KENDRAPARA, ODISHA</p><p className="copyright">Made with <Heart size={13} fill="currentColor" /> and love for the happy couple</p><div className="designer-credit"><span>Website designed by <strong>Shahbaz Khan</strong></span><a href="https://www.instagram.com/khan_shahbaz__7/?hl=en" target="_blank" rel="noreferrer" aria-label="Follow Shahbaz Khan on Instagram" title="Instagram — Shahbaz Khan"><Instagram size={17} /><span>@khan_shahbaz__7</span></a></div></footer>;
}


// Shared browser-generated ambient soundtrack. Browsers require a user gesture for audible playback,
// so it starts when the visitor presses "Open Invitation".
let weddingAudioContext = null;
let weddingAudioMaster = null;
let weddingAudioNodes = [];
let weddingAudioLfo = null;
let weddingMusicPlaying = false;
let weddingMelodyTimer = null;

export default Footer;
