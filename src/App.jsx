import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InvitationOpening from "./components/sections/InvitationOpening";
import Hero from "./components/sections/Hero";
import Countdown from "./components/sections/Countdown";
import Events from "./components/sections/Events";
import GuestTools from "./components/sections/GuestTools";
import Story from "./components/sections/Story";
import Gallery from "./components/sections/Gallery";
import Family from "./components/sections/Family";
import Footer from "./components/sections/Footer";
import MusicControl from "./components/sections/MusicControl";
import BackToTop from "./components/sections/BackToTop";
import LoveTimeline from "./components/sections/LoveTimeline";
import CoupleVideo from "./components/sections/CoupleVideo";
import Guestbook from "./components/sections/Guestbook";
import DressGuide from "./components/sections/DressGuide";
import IslamicBlessings from "./components/sections/IslamicBlessings";

export default function App() {
  const [opened, setOpened] = useState(false);
  return <AnimatePresence mode="wait">{!opened ? <InvitationOpening key="opening" onOpen={() => setOpened(true)} /> : <motion.div key="site" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <nav className="site-nav"><a href="#home" className="nav-brand">A <span>&</span> R</a><div><a href="#events">Events</a><a href="#journey">Journey</a><a href="#gallery">Memories</a><a href="#families">Families</a><a href="#guest-info">Guest Info</a><a href="#guestbook">Wishes</a></div></nav>
    <MusicControl /><BackToTop /><Hero />
    <section className="countdown-section"><p className="eyebrow">COUNTING DOWN TO FOREVER</p><Countdown /></section>
    <Events /><GuestTools /><Story /><LoveTimeline /><CoupleVideo /><Gallery /><DressGuide /><IslamicBlessings /><Guestbook /><Family />
    <section className="closing-quote"><p>“And We created you in pairs.”</p><span>— Qur'an 78:8</span></section>
    <section className="thank-you-section"><div className="thank-you-arch"><span>❧</span><p className="eyebrow">UNTIL WE CELEBRATE TOGETHER</p><h2>With love, <em>Sk Akif & Raisa Farheen</em></h2><p>Thank you for being a part of our story. Your presence, prayers, and blessings mean the world to us.</p><span className="thank-you-signoff">Insha’Allah, see you there</span></div></section>
    <Footer />
  </motion.div>}</AnimatePresence>;
}
