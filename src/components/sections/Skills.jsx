import Section from '../Section'
import { skills } from '../../cv.json'
import './Skills.css'

export default function Skills() {
  return (
    <Section title="Habilidades">
      <ul>
        {
          skills.map(({ name, level }) => (
            <li key={crypto.randomUUID()}>
              <span>{name} </span>
              <span>{level}</span>
            </li>
          ))
        }
      </ul>
    </Section>
  )
}
