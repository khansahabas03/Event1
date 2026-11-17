import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, CalendarDays, Clock, Sparkles, ArrowDown, Flower2, Users, Quote, PartyPopper, Music2, Volume2, Navigation, ArrowUp, Instagram, Share2, Copy, Check, X, ChevronLeft, ChevronRight, CalendarPlus, MessageCircle } from "lucide-react";
import weddingData from "../../data/weddingData";
import GoldDivider from "../shared/GoldDivider";

function GuestTools() {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText("Mayuree Palace, Garapur, Kendrapara, Odisha");
      setCopied(true); window.setTimeout(() => setCopied(false), 2200);
    } catch { window.prompt("Copy venue address:", "Mayuree Palace, Garapur, Kendrapara, Odisha"); }
  };
  const shareInvite = async () => {
    const shareData = { title: "Sk Akif & Raisa Farheen — Wedding Invitation", text: "Join us to celebrate the wedding of Sk Akif & Raisa Farheen, 14–16 December 2026.", url: window.location.href };
    try { if (navigator.share) await navigator.share(shareData); else { await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`); setShared(true); window.setTimeout(() => setShared(false), 2200); } }
    catch (error) { if (error?.name !== "AbortError") { try { await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`); setShared(true); window.setTimeout(() => setShared(false), 2200); } catch {} } }
  };
  const shareWhatsApp = () => {
    const text = `Assalamu Alaikum! We warmly invite you to celebrate the wedding of Sk Akif & Raisa Farheen, 14–16 December 2026. Invitation: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };
  const addCalendar = () => {
    const events = [
      ["Haldi Ceremony", "20261214", "20261215", "Residency", "https://maps.app.goo.gl/Wn6P7XpYpKWhhgEw8?g_st=aw"],
      ["Barat & Nikah", "20261215", "20261216", "Mayuree Palace, Garapur, Kendrapara", "https://maps.app.goo.gl/yZE3mc4TZZqcAJc56?g_st=aw"],
      ["Reception / Walima", "20261216", "20261217", "The Palace, Garapur, Kendrapara", "https://maps.app.goo.gl/ZtWcTu4xXAq8yp9F8?g_st=aw"]
    ];
    const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Akif and Raisa//Wedding Invitation//EN", "CALSCALE:GREGORIAN", ...events.flatMap(([title,start,end,venue,url]) => ["BEGIN:VEVENT", `UID:${title.replace(/[^a-z]/gi, "")}-${start}@akif-raisa`, `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`, `DTSTART;VALUE=DATE:${start}`, `DTEND;VALUE=DATE:${end}`, `SUMMARY:${title} — Akif & Raisa`, `LOCATION:${venue}`, `DESCRIPTION:${url}`, "END:VEVENT"]), "END:VCALENDAR"].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "akif-raisa-wedding-events.ics"; a.click(); URL.revokeObjectURL(url);
  };
  return <section className="guest-tools-section section-pad" id="guest-info"><div className="section-heading"><p className="eyebrow">FOR OUR BELOVED GUESTS</p><h2>Celebrate With <em>Ease</em></h2><GoldDivider /><p>Keep the important details close and share our invitation with family and friends.</p></div><div className="guest-tools-grid"><button onClick={shareInvite} className="guest-tool-card"><span className="guest-tool-icon"><Share2 /></span><strong>{shared ? "Invitation copied" : "Share invitation"}</strong><small>Send our celebration to someone special</small></button><button onClick={shareWhatsApp} className="guest-tool-card"><span className="guest-tool-icon"><MessageCircle /></span><strong>Share on WhatsApp</strong><small>Send a family-friendly invitation message</small></button><button onClick={copyAddress} className="guest-tool-card"><span className="guest-tool-icon">{copied ? <Check /> : <Copy />}</span><strong>{copied ? "Address copied" : "Copy Nikah venue"}</strong><small>Mayuree Palace, Garapur, Kendrapara</small></button><button onClick={addCalendar} className="guest-tool-card"><span className="guest-tool-icon"><CalendarPlus /></span><strong>Add dates to calendar</strong><small>Save all three celebrations to your calendar</small></button></div></section>;
}

export default GuestTools;
