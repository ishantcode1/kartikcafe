import Link from 'next/link';
import { Clock3, MapPin, Phone } from 'lucide-react';

export default function Location() {
  return <section className="visit-section" id="contact"><div className="visit-deco" aria-hidden="true">♡</div><div className="visit-copy"><p className="pink-kicker">✦ COME ON OVER ✦</p><h2>Meet Us at Your<br /><em>Happy Place.</em></h2><p>We’d love to make your day a little sweeter. Come find your corner at Scoop N Brew.</p></div><div className="visit-card"><div className="visit-item"><span className="visit-icon"><MapPin size={20} /></span><div><small>COME SAY HI</small><p>Near GEHU Gate 1,<br />opposite Pratap Cricket Turf</p></div></div><div className="visit-item"><span className="visit-icon"><Clock3 size={20} /></span><div><small>OPENING HOURS</small><p>11:00 am – 10:00 pm</p></div></div><div className="visit-item"><span className="visit-icon"><Phone size={20} /></span><div><small>GIVE US A CALL</small><a href="tel:+919520963833">+91 95209 63833</a></div></div><Link className="pink-pill visit-button" href="https://maps.app.goo.gl/CbyLu885M1VNPqz97" target="_blank" rel="noreferrer">Get directions <span>↗</span></Link></div></section>;
}
