import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, CalendarDays, Clock, Sparkles, ArrowDown, Flower2, Users, Quote, PartyPopper, Music2, Volume2, Navigation, ArrowUp, Instagram, Share2, Copy, Check, X, ChevronLeft, ChevronRight, CalendarPlus } from "lucide-react";
import weddingData from "../../data/weddingData";
import GoldDivider from "../shared/GoldDivider";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible ? <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp size={18} /></button> : null;
}

export default BackToTop;
