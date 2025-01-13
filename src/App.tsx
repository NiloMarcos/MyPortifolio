import { Header } from "./components/Header";

import { Hero } from "./components/Hero";

export function App() {
  return (
    <div className="bg-[url('./src/assets/BackgroundPattern.svg')] bg-no-repeat bg-right h-screen">
      <Header />
      <Hero />
    </div>
  )
}
