import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import weddingData from "../../data/weddingData";
import GoldDivider from "../shared/GoldDivider";

export default function LoveTimeline() {
  return (
    <section className="section-pad love-timeline-section" id="journey">
      <div className="section-heading">
        <p className="eyebrow">TEN YEARS OF MEMORIES</p>
        <h2>A Journey of <em>Barakah</em></h2>
        <GoldDivider />
        <p>From the first chapter to the beginning of a lifetime together.</p>
      </div>
      <div className="love-timeline">
        {weddingData.couple.timeline.map((item, index) => (
          <motion.article className={`love-timeline-card ${index % 2 ? "timeline-right" : ""}`} key={item.year}
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }}>
            <div className="love-timeline-year">{item.year}</div>
            <div className="love-timeline-content">
              <span className="timeline-heart"><Heart size={15} /></span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.image && <img src={item.image} alt={`${item.title} memory`} loading="lazy" />}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
