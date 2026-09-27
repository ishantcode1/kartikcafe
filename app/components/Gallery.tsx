'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const photos = [
  { src: '/cafe-gallery/WhatsApp Image 2026-09-27 at 3.34.20 PM.jpeg', alt: 'Pink brick wall with playful ice cream art', label: 'A wall with a sweet side' },
  { src: '/cafe-gallery/WhatsApp Image 2026-09-27 at 3.34.21 PM.jpeg', alt: 'Café counter framed by glowing arches', label: 'Behind the counter' },
  { src: '/cafe-gallery/WhatsApp Image 2026-09-27 at 3.34.22 PM.jpeg', alt: 'Three warmly lit arches in the café', label: 'A little glow, all day' },
  { src: '/cafe-gallery/WhatsApp Image 2026-09-27 at 3.34.22 PM (1).jpeg', alt: 'Cozy pink seating beneath an illuminated arch', label: 'Your cozy corner' },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null); if (event.key === 'ArrowRight') setSelected((current) => current === null ? null : (current + 1) % photos.length); if (event.key === 'ArrowLeft') setSelected((current) => current === null ? null : (current + photos.length - 1) % photos.length); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);
  return <section className="gallery-section" id="gallery"><div className="gallery-heading"><div><p className="pink-kicker">✦ A PEEK INSIDE ✦</p><h2>Your Own Little<br /><em>Cozy Corner.</em></h2></div><p>Real pink walls, warm glowing arches, and a seat saved just for you.</p></div><div className="cafe-photo-grid">{photos.map((photo, index) => <motion.button key={photo.src} type="button" className={`cafe-photo photo-tile-${index + 1}`} onClick={() => setSelected(index)} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .45, delay: index * .07 }} whileHover={{ y: -4 }}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 90vw, 40vw" className="cafe-photo-image" />{index === 2 && <span className="photo-heart">♡</span>}<span className="photo-caption">{photo.label}<b>↗</b></span></motion.button>)}</div><p className="gallery-aside">SCOOP N BREW <span>✦</span> LITTLE MOMENTS, BIG JOY</p><AnimatePresence>{selected !== null && <motion.div className="gallery-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><motion.div className="gallery-lightbox-frame" initial={{ scale: .94, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .94 }} onClick={(event) => event.stopPropagation()}><button type="button" onClick={() => setSelected(null)} aria-label="Close gallery image"><X /></button><Image src={photos[selected].src} alt={photos[selected].alt} fill sizes="90vw" className="lightbox-photo" priority /><p>{photos[selected].label} <span>{selected + 1} / {photos.length}</span></p></motion.div></motion.div>}</AnimatePresence></section>;
}
