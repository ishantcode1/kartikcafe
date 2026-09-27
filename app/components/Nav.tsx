'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const links = [['Home', '#home'], ['Menu', '#menu'], ['Our Café', '#our-cafe'], ['Gallery', '#gallery'], ['Visit Us', '#contact']];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="pink-nav"><nav className="pink-nav-inner" aria-label="Main navigation"><Link href="#home" className="nav-logo" aria-label="Scoop N Brew home"><Image src="/logo.jpeg" width={48} height={48} alt="" priority /><span>Scoop <i>n</i> Brew</span></Link><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}><span></span><span></span></button><div className={`pink-nav-links ${open ? 'open' : ''}`}>{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="pink-pill nav-button" href="#menu" onClick={() => setOpen(false)}>Explore Menu <span>♡</span></Link></div></nav></header>;
}
