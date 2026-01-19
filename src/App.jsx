import "./style.css";
import {
  profile,
  achievements,
  projects,
  certifications,
  experience
} from "./data";

export default function App() {
  return (
    <div className="app">

      {/* HERO */}
      <header className="hero">
        <h1>{profile.name}</h1>
        <p>{profile.intro}</p>
      </header>

      {/* ACHIEVEMENTS */}
      <Section title="Achievements">
        <ul>
          {achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </Section>

      {/* PROJECTS */}
      <Section title="Projects">
        <div className="row">
          {projects.map((p, i) => (
            <div className="card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} target="_blank">View Project</a>
            </div>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section title="Certifications & Qualifications">
        <div className="grid">
          {certifications.map((c, i) => (
            <div className="grid-item" key={i}>{c}</div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Experience">
        {experience.map((e, i) => (
          <div className="timeline" key={i}>
            <h3>{e.role}</h3>
            <span>{e.org} | {e.period}</span>
            <p>{e.desc}</p>
          </div>
        ))}
      </Section>

      {/* RESUME */}
      <Section title="Resume">
        <a className="btn" href={profile.resume} download>
          Download Resume
        </a>
      </Section>

      {/* CONTACT */}
      <Section title="Contact">
        <form className="contact">
          <input placeholder="Your Name" />
          <input placeholder="Your Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </Section>

      {/* FOOTER */}
      <footer>
        © 2026 Arya Patil
      </footer>

    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
