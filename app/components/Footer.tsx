import Image from 'next/image';
import Link from 'next/link';

const links = [['Home', '#home'], ['Menu', '#menu'], ['Our Café', '#our-cafe'], ['Gallery', '#gallery'], ['Visit Us', '#contact']];

export default function Footer() {
  return <footer className="pink-footer"><div className="footer-top"><Link href="#home" className="footer-logo"><Image src="/logo.jpeg" width={58} height={58} alt="Scoop N Brew logo" /><span>Scoop <i>n</i> Brew</span></Link><p>A little sweetness. A little coffee.<br /><em>A lot of happiness.</em></p><nav aria-label="Footer navigation">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}<a href="https://www.instagram.com/scoop_n_breww/" target="_blank" rel="noreferrer">Instagram ↗</a></nav><span className="footer-heart">♡</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Scoop N Brew</span><span>MADE WITH A LITTLE EXTRA LOVE <b>♥</b></span><Link href="#home">BACK TO TOP ↑</Link></div></footer>;
}
