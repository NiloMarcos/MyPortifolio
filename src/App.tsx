import { Header } from "./components/Header";

import { Hero } from "./components/Hero";

import { AboutMe } from "./components/AboutMe";

import { Skills } from "./components/Skills";

import { Experience } from "./components/Experience";

import { Projects } from "./components/Projects";

import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="bg-[url('./src/assets/BackgroundPattern.svg')] bg-no-repeat bg-right">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}
