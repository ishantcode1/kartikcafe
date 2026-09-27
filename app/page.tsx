import Nav from './components/Nav';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

export default function Home() {
  return <><Nav /><main><Hero /><BrandStory /><MenuSection /><Gallery /><Location /></main><Footer /></>;
}
