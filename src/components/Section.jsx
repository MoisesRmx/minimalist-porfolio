import './Section.css'
export default function Section({ children, title }) {
  
  return (
    <section className={`section-component${title ? ` ${title.toLowerCase()}` : '' }`}>
      {
        title && <h2>{title}</h2>
      }
      {
        children
      }
  </section>
  )
}
