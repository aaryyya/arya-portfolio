import "./style.css";
import {
  profile,
  projects,
  certifications,
  openSource,
  techStack
} from "./data";

export default function App() {
  return (
    <div className="app">

      {/* HERO */}
      <header className="hero">
        <h1>{profile.name}</h1>
        <h3>{profile.headline}</h3>
        <p>{profile.aboutShort}</p>
      </header>

      {/* ABOUT */}
      <Section title="About Me">
        <p>{profile.aboutLong}</p>
      </Section>

      {/* PROJECTS */}
      <Section title="Projects">
        <div className="row">
          {projects.map((p, i) => (
            <div className="card project-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <span className="tech">{p.tech}</span>
              {p.link && <a href={p.link}>View Project →</a>}
            </div>
          ))}
        </div>
      </Section>

      {/* TECH STACK */}
      <Section title="Languages & Tools">
        <Tech title="🌐 Web Development" items={techStack.web} />
        <Tech title="⚙️ Backend & Frameworks" items={techStack.backend} />
        <Tech title="🧮 Data Analysis Tools" items={techStack.data} />
        <Tech title="🧠 Machine Learning & Data Science" items={techStack.ml} />
        <Tech title="🛢️ Databases" items={techStack.databases} />
        <Tech title="🧩 DevOps & API Tools" items={techStack.devops} />
        <Tech title="🧠 IDEs & Editors" items={techStack.ides} />
      </Section>

      {/* OPEN SOURCE */}
      <Section title="Open Source Contributions">
        {openSource.map((o, i) => (
          <div key={i} className="card">
            <h3>{o.project}</h3>
            <p>{o.description}</p>
            <a href={o.link}>View Contributions →</a>
          </div>
        ))}
      </Section>

      {/* CERTIFICATIONS */}
      <Section title="Certifications & Participation">
        <CertGroup title="Professional" items={certifications.professional} />
        <CertGroup title="Participation" items={certifications.participation} />
        <CertGroup title="Workshops" items={certifications.workshops} />
      </Section>

      <footer>© 2026 {profile.name}</footer>
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

function Tech({ title, items }) {
  return (
    <>
      <h4>{title}</h4>
      <div className="chip-row">
        {items.map((i, idx) => (
          <span key={idx} className="chip">{i}</span>
        ))}
      </div>
    </>
  );
}

function CertGroup({ title, items }) {
  return (
    <>
      <h4>{title}</h4>
      <ul>
        {items.map((c, i) => (
          <li key={i}>
            {c.link ? <a href={c.link}>{c.name}</a> : c.name}
          </li>
        ))}
      </ul>
    </>
  );
}
