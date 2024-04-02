import Section from '../Section'
import { projects } from '../../cv.json'
import './Projects.css'

export default function Projects() {
  return (
    <Section title="Projects">
      <ul>
        {
          projects.map(({ url, description, highlights, name, isActive }) => {
            return (
              <li key={crypto.randomUUID()}>
                <article>
                  <header>
                    <h3>
                      <a href={url} title={`Ver el proyecto ${name}`} target='_blank'>
                        {name}
                      </a>
                      {
                        isActive && <span> &bull;</span>
                      }
                    </h3>
                    <p>{description}</p>
                  </header>
                  <footer>
                    {highlights.map((highlight) => {
                      return <span key={crypto.randomUUID()}>{highlight}</span>
                    })}
                  </footer>
                </article>
              </li>
            )
          })
        }
      </ul>
    </Section>
  )
}
