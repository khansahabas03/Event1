import akifPhoto from "../assets/images/akif.jpeg";
import raisaPhoto from "../assets/images/raisa.jpeg";
import memory2018 from "../assets/images/memory2018.jpeg";
import memory2022 from "../assets/images/memory2022.jpeg";
import groomHaldi from "../assets/images/groom-haldi-look.jpeg";
import groomFormal from "../assets/images/groom-formal-look.jpeg";
import groomPortrait from "../assets/images/groom-portrait.jpeg";
import brideBeige from "../assets/images/bride-beige-hijab.jpeg";
import brideCelebration from "../assets/images/bride-celebration-look.jpeg";
import brideTeal from "../assets/images/bride-teal-look.jpeg";
import brideBridal from "../assets/images/bride-bridal-look.jpeg";

const weddingData = {
  groom: {
    name: "Sk Akif",
    address: "Jaipura, Kendrapara, Odisha",
    pin: "754211",
    family: {
      father: { name: "Sk Jabir", relation: "Father" },
      mother: { name: "Sanjida Bibi", relation: "Mother" },
      brothers: [
        { name: "Asif", relation: "Elder Brother" },
        { name: "Tosif", relation: "Elder Brother" },
        { name: "Sahid", relation: "Younger Brother" }
      ]
    }
  },
  bride: {
    name: "Raisa Farheen",
    address: "Fakirabad, Kendrapara, Odisha",
    pin: "754211",
    family: {
      father: { name: "MD Fayaz", relation: "Father" },
      mother: { name: "Razia Bano", relation: "Mother" },
      brothers: [{ name: "Faizan", relation: "Brother" }]
    }
  },
  couple: {
    groomPhoto: akifPhoto,
    bridePhoto: raisaPhoto,
    couplePhoto: memory2022,
    yearsTogether: 10,
    story: "Ten years of love, friendship, trust and countless memories. From the first conversation to this beautiful new beginning, every moment has brought us closer.",
    timeline: [
      { year: "2016", title: "Where It All Began", description: "A beautiful story began and two hearts started their journey together.", image: akifPhoto },
      { year: "2018", title: "Growing Together", description: "Through countless conversations, smiles and memories, their bond grew stronger.", image: memory2018 },
      { year: "2020", title: "Stronger Together", description: "Every challenge made their relationship stronger and their understanding deeper.", image: raisaPhoto },
      { year: "2022", title: "Shared Dreams", description: "They began dreaming about a beautiful future together.", image: memory2022 },
      { year: "2024", title: "Closer Than Ever", description: "Years of memories, laughter and love brought them closer than ever.", image: memory2018 },
      { year: "2026", title: "Forever Begins", description: "After ten beautiful years, their journey leads to a lifetime together.", image: null }
    ]
  },
  gallery: [
    { src: akifPhoto, alt: "Sk Akif portrait", label: "Sk Akif" },
    { src: raisaPhoto, alt: "Raisa Farheen portrait", label: "Raisa Farheen" },
    { src: memory2018, alt: "A memory from 2018", label: "A memory from 2018" },
    { src: memory2022, alt: "A memory from 2022", label: "A memory from 2022" },
    { src: groomHaldi, alt: "Sk Akif in traditional attire", label: "Traditional look" },
    { src: groomFormal, alt: "Sk Akif in a light formal suit", label: "Formal portrait" },
    { src: groomPortrait, alt: "Sk Akif seated in a light suit", label: "A favourite moment" },
    { src: brideBeige, alt: "Raisa Farheen in a beige hijab", label: "Graceful portrait" },
    { src: brideCelebration, alt: "Raisa Farheen at a celebration", label: "Celebration look" },
    { src: brideTeal, alt: "Raisa Farheen in teal attire", label: "Teal elegance" },
    { src: brideBridal, alt: "Raisa Farheen in red bridal attire", label: "Bridal elegance" }
  ],
  albums: {
    groom: [
      { src: groomHaldi, alt: "Sk Akif in traditional attire", label: "Traditional look" },
      { src: groomFormal, alt: "Sk Akif in a light formal suit", label: "Formal portrait" },
      { src: groomPortrait, alt: "Sk Akif seated in a light suit", label: "A favourite moment" }
    ],
    bride: [
      { src: brideBeige, alt: "Raisa Farheen in a beige hijab", label: "Graceful portrait" },
      { src: brideCelebration, alt: "Raisa Farheen at a celebration", label: "Celebration look" },
      { src: brideTeal, alt: "Raisa Farheen in teal attire", label: "Teal elegance" },
      { src: brideBridal, alt: "Raisa Farheen in red bridal attire", label: "Bridal elegance" }
    ]
  },
  events: [
    { id: "haldi", title: "Haldi Ceremony", date: "14 December 2026", time: "Evening onwards", venue: "Residency", mapUrl: "https://maps.app.goo.gl/Wn6P7XpYpKWhhgEw8?g_st=aw", icon: "🌼", note: "A joyful evening of colour, blessings and family." },
    { id: "barat", title: "Barat & Nikah", date: "15 December 2026", time: "12:00 PM onwards", venue: "Mayuree Palace, Garapur, Kendrapara", mapUrl: "https://maps.app.goo.gl/yZE3mc4TZZqcAJc56?g_st=aw", icon: "🥁", note: "Join us as two hearts begin a new chapter together." },
    { id: "reception", title: "Reception", date: "16 December 2026", time: "12:00 PM onwards", venue: "The Palace, Garapur, Kendrapara", mapUrl: "https://maps.app.goo.gl/ZtWcTu4xXAq8yp9F8?g_st=aw", icon: "✨", note: "Celebrate the newlyweds with us." }
  ]
};

export default weddingData;