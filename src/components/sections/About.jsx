import Section from '../Section'
import './About.css'
import { basics } from '../../cv.json'
const { summary } = basics

export default function About() {
  return (
    <Section title="About">
      <p>
        {summary}
      </p>
    </Section>
  )
}
