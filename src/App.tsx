import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";

import { Hero } from "./components/Hero";

export function App() {
  return (
    <div className="bg-[url('./src/assets/BackgroundPattern.svg')] bg-no-repeat bg-right">
      <Header />
      <Hero />
      <AboutMe />
    </div>
  )
}
