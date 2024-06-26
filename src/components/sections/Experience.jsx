import Section from '../Section'
import { work } from '../../cv.json'
import './Experience.css'

export default function Experience() {
  return (
    <Section title="Experience">
      <ul>
        {work.map(({ name, startDate, endDate, position, summary, highlights }) => {
          const startYear = new Date(startDate).getFullYear()
          const endYear = endDate !== null ? new Date(endDate).getFullYear() : "Actual"
          const years = `${startYear} - ${endYear}`
          return (
            <li key={crypto.randomUUID()}>
              <article>
                <header>
                  <div>
                    <h3>{name}</h3>
                    <h4>{position}</h4>
                  </div>

                  <time>{years}</time>
                </header>

                <footer>
                  <p>{summary}</p>
                </footer>
              </article>
            </li>
          )
        })}

      </ul>
    </Section>
  )
}
