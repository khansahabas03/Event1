import React, { useEffect, useState } from "react";
import { Heart, Send, MessageCircle } from "lucide-react";
import GoldDivider from "../shared/GoldDivider";

const STORAGE_KEY = "akif-raisa-guest-wishes-v1";
const GROOM_WHATSAPP = "919337811437";

export default function Guestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    try { setWishes(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")); }
    catch { setWishes([]); }
  }, []);

  const submitWish = (event) => {
    event.preventDefault();
    const cleanName = name.trim().slice(0, 60);
    const cleanMessage = message.trim().slice(0, 500);
    if (!cleanName || !cleanMessage) return;

    const next = [{
      id: `${Date.now()}-${Math.random()}`,
      name: cleanName,
      message: cleanMessage,
      date: new Date().toLocaleDateString()
    }, ...wishes].slice(0, 40);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setWishes(next);
    } catch {
      // Continue to WhatsApp even if this browser cannot save local wishes.
    }

    const whatsappText =
      `Assalamu Alaikum Sk Akif!%0A%0A` +
      `A wedding wish from ${encodeURIComponent(cleanName)}:%0A` +
      `${encodeURIComponent(cleanMessage)}%0A%0A` +
      `May Allah bless you and Raisa Farheen with love, happiness and barakah. Ameen.`;
    const whatsappUrl = `https://wa.me/${GROOM_WHATSAPP}?text=${whatsappText}`;

    // Open WhatsApp directly from the form submission gesture.
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setName("");
    setMessage("");
    setNotice("WhatsApp opened with your wish. Please press Send in WhatsApp to deliver it to Sk Akif.");
  };

  return (
    <section className="section-pad guestbook-section" id="guestbook">
      <div className="section-heading">
        <p className="eyebrow">DUAS & GOOD WISHES</p>
        <h2>Leave a <em>Blessing</em></h2>
        <GoldDivider />
        <p>Your kind words and prayers will reach the couple directly.</p>
      </div>
      <div className="guestbook-layout">
        <form className="guestbook-form" onSubmit={submitWish}>
          <label>Your name<input value={name} onChange={e => setName(e.target.value)} maxLength={60} required placeholder="Enter your name" /></label>
          <label>Your message<textarea value={message} onChange={e => setMessage(e.target.value)} maxLength={500} required rows={4} placeholder="Write a dua or a lovely wish for the couple..." /></label>
          <button className="premium-action" type="submit"><MessageCircle size={16} /> Send wish to Sk Akif on WhatsApp</button>
          {notice && <p className="guestbook-notice" role="status">{notice}</p>}
          <small className="guestbook-privacy">Your message is prepared in WhatsApp. It is sent only after you confirm by pressing Send in WhatsApp.</small>
        </form>
        <div className="guestbook-wishes">
          <h3><MessageCircle size={18} /> Wishes on this device <span>{wishes.length}</span></h3>
          {wishes.length === 0 ? <div className="guestbook-empty"><Heart /><p>Be the first to share a kind word or dua.</p></div> : wishes.map(wish => (
            <article className="guest-wish" key={wish.id}><p>“{wish.message}”</p><strong>{wish.name}</strong><small>{wish.date}</small></article>
          ))}
        </div>
      </div>
    </section>
  );
}
