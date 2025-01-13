import { Header } from "./components/Header";

import { Hero } from "./components/Hero";

import { AboutMe } from "./components/AboutMe";

import { Experience } from "./components/Experience";

export function App() {
  return (
    <div className="bg-[url('./src/assets/BackgroundPattern.svg')] bg-no-repeat bg-right">
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
    </div>
  )
}
