
import Link from 'next/link';
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Recomended from "./components/Recomended.jsx";
import Info from "./components/Info.jsx";
import Testimonials from "./components/Testimonials.jsx";
import About from "./components/About.jsx";


export default function Home() {
  return (
    <div className='app'>
        <Intro/>
        <Recomended/>
        <Info/>
        <Testimonials/>
        <About/>
    </div>
  );
}
