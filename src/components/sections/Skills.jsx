import Section from '../Section'
import { skills } from '../../cv.json'
import './Skills.css'

export default function Skills() {
  return (
    <Section title="Skills">
      <ul>
        {
          skills.map(({ name, level }) => (
            <li>
              <span>{name} </span>
              <span>{level}</span>
            </li>
          ))
        }
      </ul>
    </Section>
  )
}
