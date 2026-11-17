import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, CalendarDays, Clock, Sparkles, ArrowDown, Flower2, Users, Quote, PartyPopper, Music2, Volume2, Navigation, ArrowUp, Instagram, Share2, Copy, Check, X, ChevronLeft, ChevronRight, CalendarPlus } from "lucide-react";
import weddingData from "../../data/weddingData";
import GoldDivider from "../shared/GoldDivider";

function Events() {
  const [activeEvent, setActiveEvent] = useState(0);
  const touchStartX = React.useRef(null);
  const active = weddingData.events[activeEvent];

  const showPrevious = () => setActiveEvent((current) => (current - 1 + weddingData.events.length) % weddingData.events.length);
  const showNext = () => setActiveEvent((current) => (current + 1) % weddingData.events.length);
  const onTouchStart = (event) => { touchStartX.current = event.touches[0].clientX; };
  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (delta < -45) showNext();
    if (delta > 45) showPrevious();
    touchStartX.current = null;
  };

  return <section className="section-pad events-section" id="events">
    <div className="section-heading">
      <p className="eyebrow">SAVE THE DATES</p>
      <h2>Wedding <em>Celebrations</em></h2>
      <GoldDivider />
      <p>Swipe through the moments that make our beginning unforgettable.</p>
    </div>

    <div className="event-slider-shell" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="event-slider-topline">
        <span className="event-slider-label"><Sparkles size={15} /> OUR SPECIAL DAYS</span>
        <span className="event-counter">0{activeEvent + 1} <i>/</i> 0{weddingData.events.length}</span>
      </div>

      <div className="event-slider-stage">
        {weddingData.events.map((event, index) => {
          const position = (index - activeEvent + weddingData.events.length) % weddingData.events.length;
          const isActive = index === activeEvent;
          return <motion.article
            key={event.id}
            className={`event-slide-card ${isActive ? "active" : ""} ${event.id}`}
            initial={false}
            animate={{
              x: position === 0 ? "0%" : position === 1 ? "78%" : "-78%",
              scale: isActive ? 1 : 0.84,
              opacity: isActive ? 1 : 0.38,
              rotateY: isActive ? 0 : position === 1 ? -12 : 12,
              zIndex: isActive ? 3 : 1
            }}
            transition={{ type: "spring", stiffness: 160, damping: 22 }}
            aria-hidden={!isActive}
          >
            <div className="event-slide-glow" />
            <div className="event-slide-content">
              <div className="event-slide-icon">{event.icon}</div>
              <p className="event-number">CELEBRATION 0{index + 1}</p>
              <h3>{event.title}</h3>
              <p className="event-slide-note">{event.note}</p>
              <div className="event-slide-rule"><span>✦</span></div>
              <div className="event-slide-detail"><CalendarDays size={17} /><span>{event.date}</span></div>
              <div className="event-slide-detail"><Clock size={17} /><span>{event.time}</span></div>
              <div className="event-slide-detail"><MapPin size={17} /><span>{event.venue}</span></div>
              <a
                className="event-map-cta"
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Google Maps for ${event.title} at ${event.venue}`}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
              >
                <Navigation size={16} /> Open in Google Maps <span>↗</span>
              </a>
            </div>
            <div className="event-slide-bottom">SHEIKH AKIF <span>&</span> RAISA FAREEN</div>
          </motion.article>;
        })}
      </div>

      <div className="event-slider-controls">
        <button className="event-arrow" onClick={showPrevious} aria-label="Previous event">←</button>
        <div className="event-dots" role="tablist" aria-label="Choose wedding event">
          {weddingData.events.map((event, index) => <button key={event.id} className={`event-dot ${index === activeEvent ? "selected" : ""}`} onClick={() => setActiveEvent(index)} aria-label={`Show ${event.title}`} aria-selected={index === activeEvent} />)}
        </div>
        <button className="event-arrow" onClick={showNext} aria-label="Next event">→</button>
      </div>
      <p className="event-swipe-hint"><span>←</span> Swipe or use arrows to explore <span>→</span></p>
    </div>
  </section>;
}

export default Events;
