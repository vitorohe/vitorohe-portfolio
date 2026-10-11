import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  Code2,
  Github,
  Globe2,
  Instagram,
  Linkedin,
  MapPin,
  Maximize2,
  Play,
  X,
  Sparkles,
  Youtube,
} from "lucide-react";

type Language = "en" | "es" | "pt";

// EDIT HERE: add projects, milestones, or languages without touching the layout below.
const portfolioContent = {
  en: {
    nav: ["About", "Journey", "Projects", "Field notes"],
    role: "Tech Lead · builder · mentor",
    heroTitle: "I make useful things\nwith care.",
    heroText:
      "Software engineer, team builder, and curious observer based in Santiago, Chile. I care about clear systems, generous collaboration, and the small details that make an experience feel right.",
    heroCta: "See what I’m building",
    aboutLabel: "A little context",
    aboutTitle: "A technical mind with a human centre.",
    aboutText:
      "With 14 years in software and more than five years guiding teams, I work where product thinking, engineering craft, and people development meet. Outside the roadmap, I look for light, texture, and quiet stories through macro photography.",
    facts: [
      ["Based in", "Santiago, Chile"],
      ["Focus", "Teams · systems · learning"],
      ["Currently", "Making room for better work"],
    ],
    journeyLabel: "Selected trajectory",
    journeyTitle: "A path made of questions,\nnot just job titles.",
    journeyText:
      "For the complete professional timeline, visit LinkedIn. Here is the short version: a career shaped by curiosity, ownership, and helping people do their best work.",
    journeyCta: "Open LinkedIn trajectory",
    milestones: [
      ["01", "Software engineering", "Building reliable products and learning how systems behave in the real world."],
      ["02", "Team leadership", "Creating clarity, feedback loops, and the conditions for people to grow."],
      ["03", "Teaching by doing", "Sharing context, documenting decisions, and turning experience into useful patterns."],
    ],
    projectsLabel: "Open work",
    projectsTitle: "Small tools, sharp edges,\npractical outcomes.",
    projectsText: "A few public projects from the workshop. Each one is an invitation to inspect, reuse, or improve.",
    projects: [
      { name: "xpath-extension", type: "Browser extension", description: "A focused JavaScript tool for working with XPath in the browser.", href: "https://github.com/vitorohe/xpath-extension", tag: "JavaScript" },
      { name: "aware", type: "Nomad allocation helper", description: "A Python tool that estimates desired allocations for Nomad jobs from SQS consumption.", href: "https://github.com/vitorohe/aware", tag: "Python" },
    ],
    creativeLabel: "Away from the screen",
    creativeTitle: "Looking closely is\na way of thinking.",
    creativeText: "Macro photography keeps me patient. It makes the ordinary feel worth studying: a leaf, a pattern, a moment that only appears when you slow down.",
    creativeCta: "Visit @macro_everyday",
    galleryLabel: "Selected frames",
    galleryOpen: "Open photo",
    linksLabel: "Elsewhere",
    linkLabels: ["LinkedIn", "GitHub", "Instagram", "YouTube"],
    footer: "Built with intention in Santiago.",
    availability: "Open to thoughtful conversations",
  },
  es: {
    nav: ["Sobre mí", "Trayectoria", "Proyectos", "Notas de campo"],
    role: "Tech Lead · creador · mentor",
    heroTitle: "Creo cosas útiles\ncon cuidado.",
    heroText:
      "Ingeniero de software, constructor de equipos y observador curioso desde Santiago de Chile. Me importan los sistemas claros, la colaboración generosa y esos pequeños detalles que hacen que una experiencia se sienta bien.",
    heroCta: "Ver lo que estoy creando",
    aboutLabel: "Un poco de contexto",
    aboutTitle: "Una mente técnica con un centro humano.",
    aboutText:
      "Con 14 años en software y más de cinco guiando equipos, trabajo donde se encuentran el producto, la ingeniería y el desarrollo de las personas. Fuera del roadmap, busco luz, textura e historias silenciosas a través de la macrofotografía.",
    facts: [["Vivo en", "Santiago, Chile"], ["Enfoque", "Equipos · sistemas · aprendizaje"], ["Ahora", "Haciendo espacio para un mejor trabajo"]],
    journeyLabel: "Trayectoria seleccionada",
    journeyTitle: "Un camino hecho de preguntas,\nno solo de cargos.",
    journeyText: "Para ver la trayectoria completa, visita LinkedIn. Esta es la versión breve: una carrera guiada por la curiosidad, la responsabilidad y el deseo de ayudar a otros a hacer su mejor trabajo.",
    journeyCta: "Abrir trayectoria en LinkedIn",
    milestones: [["01", "Ingeniería de software", "Construir productos confiables y aprender cómo se comportan los sistemas en el mundo real."], ["02", "Liderazgo de equipos", "Crear claridad, ciclos de feedback y las condiciones para que las personas crezcan."], ["03", "Enseñar haciendo", "Compartir contexto, documentar decisiones y convertir la experiencia en patrones útiles."]],
    projectsLabel: "Trabajo abierto",
    projectsTitle: "Herramientas pequeñas,\nresultados concretos.",
    projectsText: "Algunos proyectos públicos del taller. Cada uno es una invitación a mirar, reutilizar o mejorar.",
    projects: [{ name: "xpath-extension", type: "Extensión de navegador", description: "Una herramienta JavaScript enfocada en trabajar con XPath dentro del navegador.", href: "https://github.com/vitorohe/xpath-extension", tag: "JavaScript" }, { name: "aware", type: "Ayudante de asignaciones Nomad", description: "Una herramienta Python que estima asignaciones deseadas para trabajos Nomad usando consumo de SQS.", href: "https://github.com/vitorohe/aware", tag: "Python" }],
    creativeLabel: "Lejos de la pantalla",
    creativeTitle: "Mirar de cerca también\nes una forma de pensar.",
    creativeText: "La macrofotografía me mantiene paciente. Hace que lo cotidiano merezca atención: una hoja, un patrón, un instante que solo aparece cuando bajas el ritmo.",
    creativeCta: "Visitar @macro_everyday",
    galleryLabel: "Fotografías seleccionadas",
    galleryOpen: "Abrir foto",
    linksLabel: "En otros lugares",
    linkLabels: ["LinkedIn", "GitHub", "Instagram", "YouTube"],
    footer: "Hecho con intención en Santiago.",
    availability: "Disponible para conversaciones con sentido",
  },
  pt: {
    nav: ["Sobre mim", "Trajetória", "Projetos", "Notas de campo"],
    role: "Tech Lead · criador · mentor",
    heroTitle: "Eu crio coisas úteis\ncom cuidado.",
    heroText: "Engenheiro de software, construtor de times e observador curioso desde Santiago, Chile. Acredito em sistemas claros, colaboração generosa e nos pequenos detalhes que fazem uma experiência ser especial.",
    heroCta: "Ver o que estou construindo",
    aboutLabel: "Um pouco de contexto",
    aboutTitle: "Uma mente técnica com um centro humano.",
    aboutText: "Com 14 anos em software e mais de cinco liderando times, trabalho no encontro entre produto, engenharia e desenvolvimento de pessoas. Fora do roadmap, procuro luz, textura e histórias silenciosas através da macrofotografia.",
    facts: [["Moro em", "Santiago, Chile"], ["Foco", "Times · sistemas · aprendizado"], ["Agora", "Criando espaço para um trabalho melhor"]],
    journeyLabel: "Trajetória selecionada",
    journeyTitle: "Um caminho feito de perguntas,\nnão apenas de cargos.",
    journeyText: "Para ver a trajetória completa, visite o LinkedIn. Esta é a versão curta: uma carreira guiada por curiosidade, responsabilidade e pelo desejo de ajudar pessoas a fazerem seu melhor trabalho.",
    journeyCta: "Abrir trajetória no LinkedIn",
    milestones: [["01", "Engenharia de software", "Construir produtos confiáveis e entender como os sistemas se comportam no mundo real."], ["02", "Liderança de times", "Criar clareza, ciclos de feedback e as condições para que as pessoas cresçam."], ["03", "Ensinar fazendo", "Compartilhar contexto, documentar decisões e transformar experiência em padrões úteis."]],
    projectsLabel: "Trabalho aberto",
    projectsTitle: "Ferramentas pequenas,\nresultados práticos.",
    projectsText: "Alguns projetos públicos da oficina. Cada um é um convite para explorar, reutilizar ou melhorar.",
    projects: [{ name: "xpath-extension", type: "Extensão de navegador", description: "Uma ferramenta JavaScript focada em trabalhar com XPath no navegador.", href: "https://github.com/vitorohe/xpath-extension", tag: "JavaScript" }, { name: "aware", type: "Auxiliar de alocação Nomad", description: "Uma ferramenta Python que estima alocações desejadas para jobs Nomad a partir do consumo do SQS.", href: "https://github.com/vitorohe/aware", tag: "Python" }],
    creativeLabel: "Longe da tela",
    creativeTitle: "Olhar de perto também\né uma forma de pensar.",
    creativeText: "A macrofotografia me ensina a ter paciência. Ela faz o cotidiano merecer atenção: uma folha, um padrão, um instante que só aparece quando diminuímos o ritmo.",
    creativeCta: "Visitar @macro_everyday",
    galleryLabel: "Fotografias selecionadas",
    galleryOpen: "Abrir foto",
    linksLabel: "Em outros lugares",
    linkLabels: ["LinkedIn", "GitHub", "Instagram", "YouTube"],
    footer: "Feito com intenção em Santiago.",
    availability: "Aberto a conversas com propósito",
  },
} as const;

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/víctor-rojas-2887b252/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/vitorohe/", icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/macro_everyday/", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/", icon: Youtube },
];

// EDIT HERE: add or reorder gallery entries. Images are stored in WebDev storage.
const galleryPhotos = [
  { src: "/manus-storage/macro-6_e98e7369.jpeg", title: "Leaf after rain", note: "leaf / water drops" },
  { src: "/manus-storage/flower-drops_66a8cd4a.jpg", title: "After rain", note: "petals / morning" },
  { src: "/manus-storage/dandelion_399d909d.jpg", title: "A small universe", note: "seed head / light" },
  { src: "/manus-storage/pink-petal_6291fd19.jpg", title: "Soft geometry", note: "petal / blush" },
  { src: "/manus-storage/leaf-veins_d37534c0.jpg", title: "Green architecture", note: "leaf / structure" },
];

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const t = portfolioContent[language];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Víctor Rojas home"><span>VR</span><small>field notes</small></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {t.nav.map((item, index) => <a key={item} href={["#about", "#journey", "#projects", "#field-notes"][index]}>{item}</a>)}
        </nav>
        <div className="language-switcher" aria-label="Language selector">
          {(["en", "es", "pt"] as Language[]).map((code) => <button key={code} className={language === code ? "active" : ""} onClick={() => setLanguage(code)}>{code}</button>)}
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-dot" />{t.role}</p>
            <h1>{t.heroTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
            <p className="hero-text">{t.heroText}</p>
            <a className="text-link" href="#projects">{t.heroCta}<ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-portrait reveal reveal-delay-1">
            <div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" />
            <div className="portrait-card">
              <img src="https://github.com/vitorohe.png" alt="Víctor Rojas" />
              <div className="portrait-caption"><span>01 / 03</span><span>Santiago, CL</span></div>
            </div>
            <div className="float-note"><Sparkles size={15} /><span>Building with<br />curiosity</span></div>
          </div>
          <div className="hero-index">SCROLL TO EXPLORE <ArrowDownRight size={16} /></div>
        </section>

        <section id="about" className="about-section container section-grid">
          <div className="section-marker"><span>01</span><span className="marker-line" /></div>
          <div className="section-main">
            <p className="eyebrow">{t.aboutLabel}</p>
            <h2>{t.aboutTitle}</h2>
            <p className="body-large">{t.aboutText}</p>
            <div className="facts-grid">{t.facts.map(([label, value]) => <div className="fact" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
          </div>
          <div className="about-aside"><div className="aside-line" /><p>“The best systems leave more room for people to be people.”</p><span>— a working principle</span></div>
        </section>

        <section id="journey" className="journey-section section-wash">
          <div className="container section-grid">
            <div className="section-marker"><span>02</span><span className="marker-line" /></div>
            <div className="section-main">
              <p className="eyebrow">{t.journeyLabel}</p>
              <h2>{t.journeyTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
              <p className="body-large narrow-copy">{t.journeyText}</p>
              <ExternalLink className="outlined-link" href="https://www.linkedin.com/in/víctor-rojas-2887b252/"><Linkedin size={17} />{t.journeyCta}<ArrowUpRight size={16} /></ExternalLink>
            </div>
            <div className="milestones">{t.milestones.map(([number, title, text]) => <div className="milestone" key={number}><span className="milestone-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
          </div>
        </section>

        <section id="projects" className="projects-section container section-grid">
          <div className="section-marker"><span>03</span><span className="marker-line" /></div>
          <div className="section-main">
            <p className="eyebrow">{t.projectsLabel}</p>
            <h2>{t.projectsTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
            <p className="body-large narrow-copy">{t.projectsText}</p>
            <div className="projects-list">{t.projects.map((project, index) => <ExternalLink key={project.name} className="project-card" href={project.href}><div className="project-top"><span className="project-index">0{index + 1}</span><span className="project-tag">{project.tag}</span></div><div className="project-icon">{index === 0 ? <Code2 size={22} /> : <Globe2 size={22} />}</div><h3>{project.name}</h3><p className="project-type">{project.type}</p><p className="project-description">{project.description}</p><span className="card-arrow"><ArrowUpRight size={18} /></span></ExternalLink>)}</div>
          </div>
        </section>

        <section id="field-notes" className="creative-section">
          <div className="container creative-grid">
            <div className="gallery-column">
              <div className="gallery-heading"><p className="eyebrow"><Camera size={15} />{t.galleryLabel}</p><span>05 / 05</span></div>
              <div className="gallery-grid">{galleryPhotos.map((photo, index) => <button className={`gallery-tile tile-${index + 1}`} key={photo.src} onClick={() => setSelectedPhoto(index)} aria-label={`${t.galleryOpen}: ${photo.title}`}><img src={photo.src} alt={photo.title} /><span className="gallery-tile-caption"><strong>{photo.title}</strong><small>{photo.note}</small></span><span className="gallery-open"><Maximize2 size={15} /></span></button>)}</div>
              <ExternalLink className="gallery-instagram" href="https://www.instagram.com/macro_everyday/"><Instagram size={15} />See the full collection <ArrowUpRight size={15} /></ExternalLink>
            </div>
            <div className="creative-copy"><p className="eyebrow">{t.creativeLabel}</p><h2>{t.creativeTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p className="body-large">{t.creativeText}</p><ExternalLink className="text-link" href="https://www.instagram.com/macro_everyday/">{t.creativeCta}<ArrowUpRight size={17} /></ExternalLink></div>
          </div>
        </section>

        <section className="contact-section container"><div className="contact-kicker"><span className="eyebrow-dot" />{t.availability}</div><h2>Let’s make something<br /><em>worth keeping.</em></h2><div className="contact-bottom"><p>{t.linksLabel}</p><div className="social-links">{socials.map(({ label, href, icon: Icon }, index) => <ExternalLink key={label} href={href}><Icon size={17} /><span>{t.linkLabels[index]}</span><ArrowUpRight size={14} /></ExternalLink>)}</div></div></section>
      </main>

      <footer className="footer container"><span>© {new Date().getFullYear()} Víctor Rojas</span><span>{t.footer}</span><a href="#top">Back to top ↑</a></footer>
      {selectedPhoto !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={galleryPhotos[selectedPhoto].title} onClick={() => setSelectedPhoto(null)}><div className="lightbox-inner" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" onClick={() => setSelectedPhoto(null)} aria-label="Close photo"><X size={20} /></button><img src={galleryPhotos[selectedPhoto].src} alt={galleryPhotos[selectedPhoto].title} /><div className="lightbox-meta"><div><strong>{galleryPhotos[selectedPhoto].title}</strong><span>{galleryPhotos[selectedPhoto].note}</span></div><span>{String(selectedPhoto + 1).padStart(2, "0")} / {String(galleryPhotos.length).padStart(2, "0")}</span></div></div></div>}
    </div>
  );
}
