import { Header } from "./components/Header";

import { Hero } from "./components/Hero";

import { AboutMe } from "./components/AboutMe";

import { Skills } from "./components/Skills";

import { Experience } from "./components/Experience";

import { Contact } from "./components/Contact";

export function App() {
  return (
    <div className="bg-[url('./src/assets/BackgroundPattern.svg')] bg-no-repeat bg-right">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}
