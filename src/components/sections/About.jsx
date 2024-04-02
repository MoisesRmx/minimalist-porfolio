import Section from '../Section'
import './About.css'
import { basics } from '../../cv.json'
const { summary } = basics

export default function About() {
  return (
    <Section title="Sobre mí">
      {
        summary.map(element => (
          <p key={crypto.randomUUID()} >
            {element}
            <br />
            <br />
          </p>
        ))
      }
    </Section>
  )
}
