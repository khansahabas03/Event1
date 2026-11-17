import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import GoldDivider from "../shared/GoldDivider";
import { startWeddingMusic } from "../../audio/weddingMusic";

function CurtainReveal({ onComplete }) {
  return (
    <motion.div className="post-invitation-curtain" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="post-curtain-backdrop" />
      <div className="post-curtain-arch" />
      <div className="post-chandelier" aria-hidden="true">
        <span className="post-chandelier-chain" />
        <span className="post-chandelier-ring">✧</span>
        <span className="post-chandelier-main">♢</span>
        <span className="post-chandelier-lights">✦　✧　✦</span>
      </div>

      <motion.div className="post-curtain-panel post-curtain-left"
        initial={{ x: "0%" }} animate={{ x: "-105%" }}
        transition={{ duration: 2.2, ease: [0.72, 0, 0.18, 1] }} />
      <motion.div className="post-curtain-panel post-curtain-right"
        initial={{ x: "0%" }} animate={{ x: "105%" }}
        transition={{ duration: 2.2, ease: [0.72, 0, 0.18, 1] }} />
      <motion.div className="post-curtain-valance" initial={{ y: 0 }} animate={{ y: -90, opacity: .15 }}
        transition={{ duration: 2, ease: "easeInOut" }} />

      <motion.div className="post-reveal-copy"
        initial={{ opacity: 0, y: 45, scale: .94, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: 1.15, duration: 1.4, ease: "easeOut" }}>
        <p className="post-reveal-kicker">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p className="post-reveal-overline">WITH THE BLESSINGS OF ALLAH</p>
        <h1><span>Sk Akif</span><i>&</i><span>Raisa Farheen</span></h1>
        <div className="post-reveal-rule"><span>✦</span></div>
        <p className="post-reveal-subtitle">WE'RE GETTING MARRIED</p>
        <p className="post-reveal-date">14 — 16 DECEMBER 2026</p>
        <p className="post-reveal-invite">Your presence and duas will make our celebration more special.</p>
      </motion.div>
      <motion.p className="post-reveal-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
        A NEW CHAPTER · A FOREVER PROMISE
      </motion.p>
      <motion.div className="post-reveal-skip" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>
        <span>Opening your invitation</span><span className="post-reveal-dots">•••</span>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.7 }} onAnimationComplete={onComplete} />
    </motion.div>
  );
}

function InvitationOpening({ onOpen }) {
  const [showCurtain, setShowCurtain] = useState(false);
  const beginOpening = () => {
    if (showCurtain) return;
    startWeddingMusic();
    setShowCurtain(true);
    window.setTimeout(onOpen, 5600);
  };

  return (
    <motion.main className="opening-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="opening-glow" />
      <motion.div className="opening-card" initial={{ y: 28, scale: .96 }} animate={{ y: 0, scale: 1 }} transition={{ duration: .8 }}>
        <div className="ornament">❧</div>
        <p className="arabic" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p className="eyebrow">WITH THE BLESSINGS OF THE ALMIGHTY</p>
        <div className="monogram">A <span>&</span> R</div>
        <p className="script-line">Together with our families</p>
        <h1 className="opening-names">Sk Akif <span>&</span><br />Raisa Farheen</h1>
        <GoldDivider />
        <p className="opening-copy">Invite you to share in the joy<br />of their wedding celebration</p>
        <p className="date-pill">14 — 16 DECEMBER 2026</p>
        <motion.button className="gold-button" onClick={beginOpening} disabled={showCurtain} whileHover={{ scale: showCurtain ? 1 : 1.04 }} whileTap={{ scale: .97 }}>
          {showCurtain ? "Opening your invitation…" : "Open Invitation"} <Heart size={16} fill="currentColor" />
        </motion.button>
        <div className="ornament bottom">❧</div>
      </motion.div>
      <p className="opening-footer">A NEW CHAPTER • A FOREVER PROMISE</p>

      <AnimatePresence>
        {showCurtain && <CurtainReveal onComplete={() => {}} />}
      </AnimatePresence>
    </motion.main>
  );
}

export default InvitationOpening;
