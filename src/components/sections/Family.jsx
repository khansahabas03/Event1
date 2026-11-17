import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, CalendarDays, Clock, Sparkles, ArrowDown, Flower2, Users, Quote, PartyPopper, Music2, Volume2, Navigation, ArrowUp, Instagram, Share2, Copy, Check, X, ChevronLeft, ChevronRight, CalendarPlus } from "lucide-react";
import weddingData from "../../data/weddingData";
import GoldDivider from "../shared/GoldDivider";

function Family() {
  const groups = [
    { title: "Groom's Family", name: weddingData.groom.name, address: weddingData.groom.address, people: [weddingData.groom.family.father, weddingData.groom.family.mother, ...weddingData.groom.family.brothers] },
    { title: "Bride's Family", name: weddingData.bride.name, address: weddingData.bride.address, people: [weddingData.bride.family.father, weddingData.bride.family.mother, ...(weddingData.bride.family.brothers || [])] }
  ];
  return <section className="section-pad family-section" id="families">
    <div className="section-heading"><p className="eyebrow">WITH LOVE & BLESSINGS</p><h2>Two Families, <em>One Union</em></h2><GoldDivider /><p>With gratitude to the families who shaped our journey.</p></div>
    <div className="family-grid">{groups.map(group => <article className="family-card" key={group.title}><div className="family-icon"><Users size={22} /></div><p className="eyebrow">{group.title}</p><h3>{group.name}</h3><p className="family-address"><MapPin size={15} />{group.address} • {group.title.startsWith("Groom") ? weddingData.groom.pin : weddingData.bride.pin}</p><div className="family-list">{group.people.map(person => <div className="family-person" key={person.name}><span>{person.name}</span><small>{person.relation}</small></div>)}</div></article>)}</div>
  </section>;
}

export default Family;
