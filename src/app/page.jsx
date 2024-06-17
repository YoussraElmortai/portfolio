'use client'

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Showcase from "./components/Showcase";

export default function Home() {
  return (
    <main>
      <Navbar/>

      <About/>
      <Showcase/>
      
      <Projects/>
    </main>
  );
}