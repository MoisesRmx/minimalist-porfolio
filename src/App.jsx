import About from './components/sections/About'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import KeyboardManager from './components/KeyboardManager'
import './App.css'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        {/* <Experience /> */}
        {/* <Education /> */}
        <Projects />
        <Skills />
      </main>
      {/* <KeyboardManager /> */}
    </>
  )
}
