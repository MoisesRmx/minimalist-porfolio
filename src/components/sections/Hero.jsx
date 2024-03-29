import Section from '../Section'
import { basics } from '../../cv.json'
import { Email, Phone, LinkedIn, GitHub, X, WorldMap} from './Icons'
import './Hero.css'

export default function Hero() {
  const { name, label, image, location, profiles, phone, email } = basics
  const { city, region } = location

  const SOCIAL_ICONS = {
    LinkedIn,
    GitHub,
    X
  }

  const linkedInfo = profiles.find(({ network }) => network === "LinkedIn")
  const linkedUrl = linkedInfo?.url

  const printInfo = [email, phone, linkedUrl].filter(Boolean).join(" • ")

  return (
    <Section>
      <div className="container">
        <div className="info">
          <h1>{name}</h1>
          <h2>{label}</h2>
          <span>
            <WorldMap />
            {city}, {region}
          </span>
          <footer>
            <div className='print'>
              {printInfo}
            </div>
          </footer>
          <footer className='no-print'>
            {
              email && (
                <a
                  href={`mailto:${email}`}
                  title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Email />
                </a>
              )
            }
            {
              phone && (
                <a
                  href={`tel:${phone}`}
                  title={`Llamar por teléfono a ${name} al número ${phone}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Phone />
                </a>
              )
            }
            {
              profiles.map(({ network, url, username }) => {
                const Icon = SOCIAL_ICONS[network]
                return (
                  <a key={crypto.randomUUID()}
                    href={url}
                    title={`Visitar el perfil de ${name} en ${network}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Icon />
                  </a>
                )
              })
            }
          </footer>
        </div>
        <figure>
          <img src={image} alt={name} />
        </figure>
      </div>
    </Section>
  )
}
