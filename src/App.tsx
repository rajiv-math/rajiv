import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/*  Content: edit these lists to update the site                      */
/* ------------------------------------------------------------------ */

const ME = 'Rajiv Mishra';
const EMAIL = 'rm20rs017@iiserkol.ac.in';

const profiles = [
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=ksOVIygAAAAJ&hl=en',
    icon: '/Google_Scholar_logo.png',
  },
  { name: 'arXiv', href: 'https://arxiv.org/a/mishra_r_4', icon: '/arxiv_logo.svg' },
  {
    name: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Rajiv-Mishra-6',
    icon: '/ResearchGate_logo.jpg',
  },
];

const interests = [
  {
    area: 'Algebraic Combinatorics',
    topics: [
      'Erdős–Ko–Rado-type Problems',
      'Intersecting Families of Permutations',
      'Representation Theory of Symmetric Groups',
      'Spectral Methods in Combinatorics',
    ],
  },
  {
    area: 'Ramsey Theory',
    topics: [
      'Cycles versus Bipartite Graphs',
      'Ramsey Goodness',
      'Structural Embedding Problems',
      'Extremal Constructions',
    ],
  },
];

type Paper = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link: string;
  label: string;
};

const preprints: Paper[] = [
  {
    title: 'Even-Intersecting Families of Permutations',
    authors: 'Anirban Banerjee, Abisek Dewan, Rajiv Mishra',
    venue: 'arXiv preprint',
    year: '2026',
    link: 'https://arxiv.org/abs/2609.21645',
    label: 'arXiv',
  },
  {
    title: 'On Ramsey goodness of K₂,ₙ versus cycles',
    authors: 'Abisek Dewan, Sayan Gupta, Rajiv Mishra',
    venue: 'arXiv preprint',
    year: '2026',
    link: 'https://arxiv.org/abs/2605.06253',
    label: 'arXiv',
  },
  {
    title: 'On Ramsey number of K₂,ₙ versus even cycles',
    authors: 'Abisek Dewan, Sayan Gupta, Rajiv Mishra',
    venue: 'arXiv preprint',
    year: '2026',
    link: 'https://arxiv.org/abs/2604.02086',
    label: 'arXiv',
  },
  {
    title: 'On the spectra of threshold hypergraphs',
    authors: 'Anirban Banerjee, Rajiv Mishra, Samiron Parui',
    venue: 'arXiv preprint',
    year: '2022',
    link: 'https://arxiv.org/abs/2207.02528',
    label: 'arXiv',
  },
];

const publications: Paper[] = [
  {
    title: 'Eccentric graph of trees and their Cartesian products',
    authors: 'Anita Arora, Rajiv Mishra',
    venue: 'Discrete Mathematics, 347 (2024) 114062',
    year: '2024',
    link: 'https://doi.org/10.1016/j.disc.2024.114062',
    label: 'DOI',
  },
  {
    title: 'On non-bipartite graphs with strong reciprocal eigenvalue property',
    authors: 'Sasmita Barik, Rajiv Mishra, Sukanta Pati',
    venue: 'Linear Algebra and its Applications',
    year: '2024',
    link: 'https://doi.org/10.1016/j.laa.2024.06.023',
    label: 'DOI',
  },
];

const teaching = [
  { course: 'Linear Algebra I', term: 'Autumn 2023' },
  { course: 'Mathematics II', term: 'Spring 2023' },
  { course: 'Analysis I', term: 'Autumn 2022' },
  { course: 'Mathematics II', term: 'Spring 2022' },
  { course: 'Analysis I', term: 'Autumn 2021' },
];

const education = [
  {
    degree: 'Ph.D.',
    years: '2020–Present',
    place: 'Indian Institute of Science Education and Research Kolkata, West Bengal, India.',
  },
  {
    degree: 'M.Sc. in Mathematics',
    years: '2018–2020',
    place: 'Indian Institute of Technology Bhubaneswar, Odisha, India.',
  },
  {
    degree: 'B.Sc. (Hons.) Mathematics',
    years: '2015–2018',
    place: 'Ramjas College, University of Delhi, Delhi, India.',
  },
];

const NCM = 'National Centre for Mathematics (A joint centre of IIT Bombay and TIFR Mumbai)';

const activities: { year: string; body: ReactNode }[] = [
  {
    year: '2025',
    body: (
      <>
        Attended <Em>12th PhD Summer School in Discrete Mathematics</Em> organised by FAMNIT,
        University of Primorska, Koper, Slovenia (Europe), 2025.
      </>
    ),
  },
  {
    year: '2024',
    body: (
      <>
        Attended <Em>International Conference On Graph Theory and its Applications (ICGTA24)</Em>{' '}
        organised by Department of Mathematics, School of Engineering, Presidency University
        Bengaluru, Karnataka, India.
      </>
    ),
  },
  {
    year: '2023',
    body: (
      <>
        Attended Advanced Instructional School on <Em>“Combinatorics and Graph Theory”</Em>{' '}
        organised by <i>{NCM}</i>, 1st May to 13th May 2023. Venue: University of Kashmir,
        Hazratbal, Srinagar, Jammu and Kashmir, India.
      </>
    ),
  },
  {
    year: '2022',
    body: (
      <>
        Attended Advanced Instructional School on{' '}
        <Em>“Algebraic Combinatorics and Spectral Graph Theory”</Em> organised by <i>{NCM}</i>,
        30th May to 18th June 2022. Venue: Mepco Schlenk Engineering College, Sivakasi, Tamil
        Nadu, India.
      </>
    ),
  },
  {
    year: '2022',
    body: (
      <>
        Poster Presentation on DMS Day, Title:{' '}
        <Em>“Triangle-Free Graphs with High Chromatic Number”</Em>, <i>IISER Kolkata</i>, 2022.
      </>
    ),
  },
  {
    year: '2019',
    body: (
      <>
        Conference on Linear Algebra and its Applications in honor of Ravindra B. Bapat,{' '}
        <i>Indian Statistical Institute Delhi</i>, India, December 2019.
      </>
    ),
  },
];

const nav = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#teaching', label: 'Teaching' },
  { href: '#activities', label: 'Activities' },
  { href: '#contact', label: 'Contact' },
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                             */
/* ------------------------------------------------------------------ */

function Em({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-ink">{children}</span>;
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{kicker}</p>
      <h2 className="mt-2 font-serif text-3xl font-semibold text-ink md:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-16 bg-accent/60" />
    </div>
  );
}

function Authors({ text }: { text: string }) {
  const parts = text.split(ME);
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <strong className="font-semibold text-ink">{ME}</strong>}
        </span>
      ))}
    </>
  );
}

function PaperList({ papers }: { papers: Paper[] }) {
  return (
    <ol className="divide-y divide-rule border-y border-rule">
      {papers.map((p, i) => (
        <li key={p.link} className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-6 md:grid-cols-[3rem_1fr_auto]">
          <span className="pt-0.5 font-serif text-lg text-accent">[{papers.length - i}]</span>
          <div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-xl leading-snug text-ink decoration-accent/50 underline-offset-4 hover:underline"
            >
              {p.title}
            </a>
            <p className="mt-1.5 text-[15px] text-ink-soft">
              <Authors text={p.authors} />
            </p>
            <p className="mt-1 text-[15px] italic text-slate-500">
              {p.venue.includes(p.year) ? p.venue : `${p.venue} (${p.year})`}.
            </p>
          </div>
          <div className="col-start-2 mt-3 md:col-start-3 md:mt-0 md:pt-1">
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded border border-ink/20 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-ink transition hover:border-ink hover:bg-ink hover:text-white"
            >
              {p.label} <span aria-hidden>↗</span>
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ProfileLinks({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      {profiles.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            'inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition ' +
            (dark
              ? 'border-white/20 text-slate-200 hover:border-white hover:text-white'
              : 'border-rule bg-white text-ink-soft hover:border-ink/40 hover:text-ink')
          }
        >
          <img src={p.icon} alt="" className="h-4 w-4 rounded-sm object-contain" />
          {p.name}
        </a>
      ))}
    </div>
  );
}

/* Visitor counter: talks to the Netlify Function in netlify/functions/visits.mjs.
   Each browser is counted once per session; if the counter can't be reached the
   section simply stays hidden. */
function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let alreadyCounted = false;
    try {
      alreadyCounted = sessionStorage.getItem('rm-visit-counted') === '1';
    } catch {
      /* storage unavailable: count anyway */
    }

    fetch('/api/visits', { method: alreadyCounted ? 'GET' : 'POST' })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d: { count: number }) => {
        setCount(d.count);
        try {
          sessionStorage.setItem('rm-visit-counted', '1');
        } catch {
          /* ignore */
        }
      })
      .catch(() => setCount(null));
  }, []);

  return count;
}

function VisitorCounter() {
  const count = useVisitorCount();
  if (count === null) return null;
  return (
    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-3 px-5 py-6">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#d4a94f]" aria-hidden>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span className="font-serif text-2xl font-semibold tabular-nums text-white">
          {count.toLocaleString('en-IN')}
        </span>
        <span className="text-sm uppercase tracking-[0.18em] text-slate-400">visitors</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-rule bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#about" className="font-serif text-xl font-semibold text-ink">
            Rajiv Mishra
          </a>

          <nav className="hidden gap-7 text-sm font-medium text-ink-soft md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-accent">
                {n.label}
              </a>
            ))}
          </nav>

          <button
            className="rounded p-2 text-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-rule bg-white px-5 py-3 md:hidden">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-ink-soft hover:text-accent"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* About / Hero */}
        <section id="about" className="border-b border-rule bg-paper">
          <div className="mx-auto grid max-w-5xl items-start gap-10 px-5 py-16 md:grid-cols-[240px_1fr] md:gap-14 md:py-24">
            <img
              src="/profile_pic.jpg"
              alt="Rajiv Mishra"
              className="mx-auto aspect-[4/5] w-52 rounded-lg object-cover shadow-md ring-1 ring-black/5 md:mx-0 md:w-full"
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Research Scholar
              </p>
              <h1 className="mt-3 font-serif text-4xl font-semibold text-ink md:text-5xl">
                Rajiv Mishra
              </h1>
              <p className="mt-3 text-lg text-ink-soft">
                Graph Theory • Combinatorics
              </p>
              <p className="mt-1 text-[15px] text-slate-500">
                Department of Mathematics &amp; Statistics, IISER Kolkata
              </p>

              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-soft">
                I am a research scholar in the Department of Mathematics and Statistics at
                IISER Kolkata, working under the supervision of{' '}
                <a
                  href="https://www.iiserkol.ac.in/~anirban.banerjee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
                >
                  Prof. Anirban Banerjee
                </a>
                . My research lies in graph theory and combinatorics, with a focus on Ramsey theory,
                extremal combinatorics, spectral graph theory, and algebraic methods based on the
                representation theory of symmetric groups. Before joining IISER Kolkata, I completed
                my M.Sc. in Mathematics at IIT Bhubaneswar, where my M.Sc. thesis was supervised by{' '}
                <a
                  href="https://sbs.iitbbs.ac.in/?p=9142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
                >
                  Prof. Sasmita Barik
                </a>
                .
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/Rajiv_Mishra_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ink/85"
                >
                  View CV
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-md border border-ink/25 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink"
                >
                  Email
                </a>
              </div>

              <div className="mt-6">
                <ProfileLinks />
              </div>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section id="research" className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <SectionHeading kicker="Research" title="Research Interests" />
          <div className="grid gap-10 md:grid-cols-2">
            {interests.map((g) => (
              <div key={g.area} className="border-l-2 border-accent/60 pl-6">
                <h3 className="font-serif text-xl font-semibold text-ink">{g.area}</h3>
                <ul className="mt-4 space-y-2 text-ink-soft">
                  {g.topics.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="border-y border-rule bg-paper">
          <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
            <SectionHeading kicker="Publications and Preprints" title="Publications" />

            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink">
              Journal Articles
            </h3>
            <PaperList papers={publications} />

            <h3 className="mb-2 mt-12 text-sm font-semibold uppercase tracking-wider text-ink">
              Preprints
            </h3>
            <PaperList papers={preprints} />
          </div>
        </section>

        {/* Teaching + Education */}
        <section id="teaching" className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <SectionHeading kicker="Teaching" title="Teaching Assistant" />
              <ul className="divide-y divide-rule border-y border-rule">
                {teaching.map((t, i) => (
                  <li key={i} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="font-medium text-ink">{t.course}</span>
                    <span className="text-right text-sm text-slate-500">
                      {t.term}, IISER Kolkata
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="education">
              <SectionHeading kicker="Education" title="Education" />
              <ol className="relative space-y-7 border-l border-rule pl-6">
                {education.map((e) => (
                  <li key={e.degree} className="relative">
                    <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-white" />
                    <p className="text-sm text-accent">{e.years}</p>
                    <p className="mt-0.5 font-serif text-lg font-semibold text-ink">{e.degree}</p>
                    <p className="text-[15px] text-ink-soft">{e.place}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Workshops & Conferences */}
        <section id="activities" className="border-y border-rule bg-paper">
          <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
            <SectionHeading kicker="Academic Activities" title="Workshops & Conferences" />
            <ul className="divide-y divide-rule border-y border-rule">
              {activities.map((a, i) => (
                <li key={i} className="grid gap-1 py-5 md:grid-cols-[5rem_1fr] md:gap-6">
                  <span className="font-serif text-lg text-accent">{a.year}</span>
                  <p className="leading-relaxed text-ink-soft">{a.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <SectionHeading kicker="Contact" title="Get in Touch" />
          <div className="grid gap-8 md:grid-cols-2">
            <address className="not-italic leading-relaxed text-ink-soft">
              <p className="font-serif text-lg font-semibold text-ink">Rajiv Mishra</p>
              <p>Research Scholar</p>
              <p>Department of Mathematics &amp; Statistics</p>
              <p>IISER Kolkata, West Bengal, India</p>
            </address>
            <div>
              <p className="text-sm uppercase tracking-wider text-slate-500">Email</p>
              <a href={`mailto:${EMAIL}`} className="mt-1 inline-block text-lg text-ink underline decoration-accent/50 underline-offset-4 hover:decoration-accent">
                {EMAIL}
              </a>
              <div className="mt-6">
                <ProfileLinks />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-slate-300">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-lg font-semibold text-white">Rajiv Mishra</p>
            <p className="text-sm text-slate-400">
              Research Scholar • Department of Mathematics &amp; Statistics • IISER Kolkata
            </p>
          </div>
          <ProfileLinks dark />
        </div>
        <VisitorCounter />
        <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
          © 2026 Rajiv Mishra • Last updated May 2026
        </div>
      </footer>
    </div>
  );
}
