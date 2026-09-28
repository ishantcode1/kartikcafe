import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="dream-hero" id="home" aria-labelledby="hero-title">
      <div className="hero-glow glow-a" aria-hidden="true" />
      <div className="hero-glow glow-b" aria-hidden="true" />
      <div className="pixel-spark spark-a" aria-hidden="true">✦</div>
      <div className="pixel-spark spark-b" aria-hidden="true">♡</div>
      <div className="pixel-spark spark-c" aria-hidden="true">✳</div>
      <div className="hero-copy">
        <p className="pink-kicker"><span>✦</span> A LITTLE CAFÉ WITH A LOT OF HEART <span>✦</span></p>
        <h1 id="hero-title">A Little Scoop<br />of <em>Happiness.</em></h1>
        <p className="hero-subtitle">Waffles, shakes, and slow sips in a corner made for good company.</p>
        <div className="hero-buttons">
          <Link className="pink-pill" href="#menu">Explore Our Menu <span>↗</span></Link>
          <Link className="outline-pill" href="#contact">Find Your Happy Place <span>♡</span></Link>
        </div>
        <div className="hero-chips"><span>✿ sweet treats</span><span>☁ cozy moments</span><span>♡ made with love</span></div>
      </div>
      <div className="hero-logo-wrap hero-collage">
        <div className="hero-photo-backdrop" aria-hidden="true" />
        <figure className="hero-photo hero-photo-main">
          <Image src="/cafe-gallery/WhatsApp Image 2026-09-27 at 3.34.22 PM (1).jpeg" alt="Cozy pink seating beneath an illuminated arch at Scoop N Brew" fill priority sizes="(max-width: 760px) 82vw, 34vw" className="hero-photo-img" />
          <figcaption>THE COZIEST CORNER <span>♡</span></figcaption>
        </figure>
        <figure className="hero-photo hero-photo-small">
          <Image src="/cafe-gallery/WhatsApp Image 2026-09-27 at 3.34.20 PM.jpeg" alt="Playful ice cream art on the café's pink brick wall" fill sizes="(max-width: 760px) 38vw, 15vw" className="hero-photo-img" />
        </figure>
        <div className="hero-logo-card"><Image src="/logo.jpeg" alt="Scoop N Brew logo" width={420} height={420} priority className="hero-logo" /></div>
        <span className="hero-sticker sticker-top" aria-hidden="true">SWEET<br />SPOT ✦</span>
        <span className="hero-sticker sticker-bottom" aria-hidden="true">11 AM<br />— 10 PM</span>
        <span className="collage-doodle doodle-heart" aria-hidden="true">♡</span>
        <span className="collage-doodle doodle-star" aria-hidden="true">✳</span>
      </div>
      <div className="hero-bottom-note" aria-hidden="true"><span>SCROLL FOR A LITTLE JOY</span><span className="scroll-line" /></div>
    </section>
  );
}
