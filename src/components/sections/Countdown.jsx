import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, CalendarDays, Clock, Sparkles, ArrowDown, Flower2, Users, Quote, PartyPopper, Music2, Volume2, Navigation, ArrowUp, Instagram, Share2, Copy, Check, X, ChevronLeft, ChevronRight, CalendarPlus } from "lucide-react";
import weddingData from "../../data/weddingData";
import GoldDivider from "../shared/GoldDivider";

function Countdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, new Date("2026-12-15T12:00:00+05:30").getTime() - now);
  const parts = [
    ["Days", Math.floor(diff / 86400000)],
    ["Hours", Math.floor((diff % 86400000) / 3600000)],
    ["Minutes", Math.floor((diff % 3600000) / 60000)],
    ["Seconds", Math.floor((diff % 60000) / 1000)]
  ];
  return <div className="countdown">{parts.map(([label, value]) => <div className="countdown-unit" key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div>)}</div>;
}

export default Countdown;
