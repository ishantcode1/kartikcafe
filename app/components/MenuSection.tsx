'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Coffee, Cookie, GlassWater, Sandwich, IceCream2, CupSoda, X } from 'lucide-react';

const menu = [
  { category: 'Sandwiches', icon: Sandwich, items: [['Veg Sandwich', '₹69']] },
  { category: 'Waffles', icon: Cookie, items: [['White Chocolate Waffle', '₹99'], ['Dark Chocolate Waffle', '₹99'], ['Nutella Chocolate Waffle', '₹99'], ['Add Ice Cream', '+₹20']] },
  { category: 'Mojitos', icon: GlassWater, items: [['Watermelon', '₹69'], ['Blueberry', '₹69'], ['Peach Tea', '₹69'], ['Ice Tea', '₹69'], ['Bubble Gum', '₹69'], ['Mint', '₹69'], ['Mango', '₹69']] },
  { category: 'Shakes', icon: CupSoda, items: [['Oreo', '₹79'], ['Chocolate Shake', '₹79'], ['Butterscotch Shake', '₹69'], ['Strawberry Shake', '₹69'], ['Blueberry Shake', '₹69']] },
  { category: 'Pancakes', icon: IceCream2, items: [['Mini Pancakes', '₹59']] },
  { category: 'Fries', icon: Sandwich, items: [['Peri Peri', '₹69'], ['Loaded', '₹79']] },
  { category: 'Chai', icon: Coffee, items: [['Kesar Chai', '₹25'], ['Elaichi Chai', '₹25'], ['Masala Chai', '₹20'], ['Chocolate Chai', '₹25']] },
  { category: 'Coffee', icon: Coffee, items: [['Coffee', '₹29'], ['Cold Coffee', '₹69']] },
] as const;

export default function MenuSection() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(false);
  useEffect(() => {
    if (!lightbox) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setLightbox(false);
    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('keydown', close);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightbox]);
  const visibleMenu = filter === 'All' ? menu : menu.filter((group) => group.category === filter);

  return <section className="menu-section" id="menu"><div className="menu-header"><p className="pink-kicker">✦ THE GOOD STUFF ✦</p><h2>Pick your <em>happy.</em></h2><p>Something sweet, something sippable, something for right now.</p><span className="menu-pixel-heart">♥</span></div><div className="menu-tabs" role="group" aria-label="Filter menu categories">{['All', ...menu.map(({ category }) => category)].map((category) => <button key={category} type="button" aria-pressed={filter === category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category === 'All' ? '♡ All the treats' : category}</button>)}</div><motion.div layout className="menu-grid">{visibleMenu.map(({ category, icon: Icon, items }) => <motion.article layout key={category} className={`menu-card menu-card-${category.toLowerCase()}`}><div className="menu-card-head"><span className="menu-icon"><Icon size={21} strokeWidth={2} /></span><h3>{category}</h3><span className="pixel-heart">♥</span></div><ul>{items.map(([name, price]) => <li key={name}><span>{name}</span><i /><strong>{price}</strong></li>)}</ul><span className="pixel-corner" aria-hidden="true" /></motion.article>)}</motion.div><div className="menu-bottom"><span>✿ made for little moments & big cravings ✿</span><button className="menu-photo-button" type="button" onClick={() => setLightbox(true)}>View the original menu <span>↗</span></button></div><AnimatePresence>{lightbox && <motion.div className="menu-lightbox" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(false)}><motion.div className="menu-lightbox-content" role="dialog" aria-modal="true" aria-label="Original Scoop N Brew menu" initial={{ y: 18, scale: .97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: .97 }} onClick={(event) => event.stopPropagation()}><button type="button" className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Close original menu"><X /></button><Image src="/menu.jpeg" alt="Original pixel-art Scoop N Brew menu" width={853} height={1280} sizes="(max-width: 760px) 94vw, 70vw" /></motion.div></motion.div>}</AnimatePresence></section>;
}
