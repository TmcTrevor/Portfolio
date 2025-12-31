import AboutMe from '@/components/aboutMe'
import Hero from '@/components/Hero'
import { createFileRoute } from '@tanstack/react-router'
import Experiences from '@/components/Experiences/index'
import Contact from '@/components/contact'
import Skills from '@/components/skills/index'
import Projects from '@/components/projects/index'
// import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <Hero />
      <AboutMe />
      {/* <TechSkill /> */}
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  )
}
