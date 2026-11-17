import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import weddingData from "../../data/weddingData";
import GoldDivider from "../shared/GoldDivider";

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [slideshow, setSlideshow] = useState(false);
  const images = weddingData.gallery || [];
  const activeImage = images[lightboxIndex];

  const showNext = (event) => {
    event?.stopPropagation();
    setLightboxIndex((index) => (index + 1) % images.length);
  };
  const showPrevious = (event) => {
    event?.stopPropagation();
    setLightboxIndex((index) => (index - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (lightboxIndex < 0 || !slideshow) return;
    const timer = window.setInterval(() => setLightboxIndex(index => (index + 1) % images.length), 3500);
    return () => window.clearInterval(timer);
  }, [lightboxIndex, slideshow, images.length]);

  useEffect(() => {
    if (lightboxIndex < 0) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setLightboxIndex(-1);
      if (event.key === "ArrowRight") setLightboxIndex((index) => (index + 1) % images.length);
      if (event.key === "ArrowLeft") setLightboxIndex((index) => (index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, images.length]);

  return (
    <section className="section-pad gallery-section" id="gallery">
      <div className="section-heading">
        <p className="eyebrow">LITTLE MOMENTS, BIG MEMORIES</p>
        <h2>Our <em>Memories</em></h2>
        <GoldDivider />
        <p>A collection of moments from our journey together.</p>
      </div>

      <div className="gallery-grid album-gallery">
        {images.map((img, index) => (
          <motion.figure
            key={`${img.label}-${index}`}
            className={`gallery-item gallery-item-${(index % 4) + 1}`}
            whileHover={{ y: -5 }}
          >
            <button
              className="gallery-open"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open photo: ${img.label}`}
            >
              <img src={img.src} alt={img.alt} loading="eager" />
              <span className="gallery-zoom">View photo ↗</span>
            </button>
            <figcaption>{img.label}</figcaption>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex >= 0 && activeImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Wedding photo gallery"
            onClick={() => setLightboxIndex(-1)}
          >
            <button className="lightbox-close" onClick={() => { setLightboxIndex(-1); setSlideshow(false); }} aria-label="Close gallery"><X /></button>
            <button className="lightbox-arrow lightbox-prev" onClick={showPrevious} aria-label="Previous photo"><ChevronLeft /></button>
            <motion.img
              key={lightboxIndex}
              src={activeImage.src}
              alt={activeImage.alt}
              initial={{ scale: .96, opacity: .6 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(event) => event.stopPropagation()}
            />
            <button className="lightbox-arrow lightbox-next" onClick={showNext} aria-label="Next photo"><ChevronRight /></button>
            <button className="lightbox-play" onClick={e => { e.stopPropagation(); setSlideshow(value => !value); }} aria-label={slideshow ? "Pause slideshow" : "Play slideshow"}>{slideshow ? <Pause /> : <Play />}{slideshow ? "Pause" : "Slideshow"}</button>
            <p>{activeImage.label} · {lightboxIndex + 1} of {images.length}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
