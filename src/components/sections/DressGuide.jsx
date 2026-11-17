import React from "react";
import { Shirt, HeartHandshake } from "lucide-react";
import GoldDivider from "../shared/GoldDivider";

const tones = ["#123d32", "#d7bd8a", "#f2eadb", "#80644c", "#9b786d"];
export default function DressGuide() {
  return (
    <section className="section-pad dress-guide-section" id="dress-guide">
      <div className="section-heading">
        <p className="eyebrow">A NOTE FOR OUR DEAR GUESTS</p>
        <h2>Celebration with <em>Grace</em></h2>
        <GoldDivider />
        <p>We look forward to celebrating together in a warm, modest and family-friendly atmosphere.</p>
      </div>
      <div className="dress-guide-card">
        <div className="dress-guide-icon"><Shirt size={28} /></div>
        <h3>Suggested attire</h3>
        <p>Traditional, modest or smart festive attire is warmly welcome. Please choose what feels comfortable and respectful for you. There is no strict dress code.</p>
        <div className="dress-swatches">{tones.map((tone, i) => <span key={tone} style={{ background: tone }} title={["Emerald","Champagne","Ivory","Warm brown","Dusty rose"][i]} />)}</div>
        <small>Optional colour inspiration · Emerald · Champagne · Ivory · Warm neutrals</small>
        <div className="dress-note"><HeartHandshake size={17} /> Your presence and prayers matter more than what you wear.</div>
      </div>
    </section>
  );
}
