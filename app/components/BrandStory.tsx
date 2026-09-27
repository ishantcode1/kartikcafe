import Image from 'next/image';

export default function BrandStory() {
  return <section className="story-section" id="our-cafe"><div className="story-image-frame"><Image src="/cafe-gallery/WhatsApp Image 2026-09-27 at 3.34.22 PM (1).jpeg" alt="Pink-lit arch and cozy seating inside Scoop N Brew" fill sizes="(max-width: 760px) 90vw, 44vw" className="story-image" /><span className="photo-sticker">♡<br /><small>YOUR<br />CORNER</small></span></div><div className="story-copy"><p className="pink-kicker">✦ OUR LITTLE WORLD ✦</p><h2>A Little Place<br />Full of <em>Sweetness.</em></h2><p>Come for the waffles and shakes. Stay for the cozy pink corners, a good cup of coffee, and the people you love sharing them with.</p><div className="story-tags"><span>♡ waffles</span><span>♡ shakes</span><span>♡ good company</span></div><a className="text-pink-link" href="#gallery">Take a peek around <span>→</span></a></div><span className="story-doodle" aria-hidden="true">✿</span></section>;
}
