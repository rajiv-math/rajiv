export default function App() {
  const publications = [
    {
      title: 'Eccentric graph of trees and their Cartesian products',
      journal: 'Discrete Mathematics, 347 (2024) 114062.',
      author: 'Anita Arora, Rajiv Mishra',
      link: 'https://doi.org/10.1016/j.disc.2024.114062',
    },
    {
      title:
        'On non-bipartite graphs with strong reciprocal eigenvalue property',
      journal: 'Linear Algebra and its Applications (2024).',
      author: 'Sasmita Barik, Rajiv Mishra, Sukanta Pati',
      link: 'https://doi.org/10.1016/j.laa.2024.06.023',
    },
  ];

  const preprints = [
    {
      title: 'On Ramsey goodness of K₂,ₙ versus cycles',
      journal: 'arXiv preprint (2026).',
      author: 'Abisek Dewan, Sayan Gupta, Rajiv Mishra',
      link: 'http://arxiv.org/abs/2605.06253',
    },
    {
      title: 'On Ramsey number of K₂,ₙ versus even cycles',
      journal: 'arXiv preprint (2026).',
      author: 'Abisek Dewan, Sayan Gupta, Rajiv Mishra',
      link: 'http://arxiv.org/abs/2604.02086',
    },
    {
      title: 'On the spectra of threshold hypergraphs',
      journal: 'arXiv preprint (2022).',
      author: 'Anirban Banerjee, Rajiv Mishra, Samiron Parui',
      link: 'http://arxiv.org/abs/2207.02528',
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#0B1F3A]">Rajiv Mishra</h1>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#home" className="hover:text-[#0B1F3A] transition">
              Home
            </a>
            <a href="#research" className="hover:text-[#0B1F3A] transition">
              Research
            </a>
            <a href="#publications" className="hover:text-[#0B1F3A] transition">
              Publications
            </a>
            <a href="#contact" className="hover:text-[#0B1F3A] transition">
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#0B1F3A] text-white"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent_40%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="w-72 h-72 rounded-[2rem] bg-gray-300 shadow-2xl flex items-center justify-center text-gray-600 text-xl font-medium">
              Add Your Photo
            </div>
          </div>

          {/* Intro */}
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-gray-300 mb-5">
              Research Scholar
            </p>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Rajiv Mishra
            </h1>

            <p className="text-2xl text-gray-200 mb-8 leading-relaxed">
              Graph Theory • Combinatorics
            </p>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-10">
              I work in graph theory and combinatorics, with interests in Ramsey
              theory, extremal graph theory, and representation theory of
              symmetric groups. My current research focuses on algebraic methods
              in combinatorics, extremal combinatorics and Ramsey theory.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#0B1F3A] px-7 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition duration-300">
                Download CV
              </button>

              <a
                href="#publications"
                className="border border-white px-7 py-3 rounded-2xl hover:bg-white hover:text-[#0B1F3A] transition duration-300"
              >
                Publications
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Quick Links */}
      <section className="py-10 border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-lg font-medium text-gray-700">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-10 text-lg font-medium text-gray-700">
            <a
              href="https://scholar.google.com/citations?user=ksOVIygAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#0B1F3A] transition"
            >
              <img
                src="/Google_Scholar_logo.png"
                alt="Google Scholar"
                className="w-7 h-7"
              />
              <span>Google Scholar</span>
            </a>

            <a
              href=" http://arxiv.org/a/mishra_r_4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#0B1F3A] transition"
            >
              <img src="/arxiv_logo.svg" alt="arXiv" className="w-7 h-7" />
              <span>arXiv</span>
            </a>

            <a
              href="https://www.researchgate.net/profile/Rajiv-Mishra-6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#0B1F3A] transition"
            >
              <img
                src="/ResearchGate_logo.jpg"
                alt="ResearchGate"
                className="w-7 h-7"
              />
              <span>ResearchGate</span>
            </a>
          </div>
        </div>
      </section>
      {/* Research Interests */}
      <section id="research" className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Research
            </p>
            <h2 className="text-5xl font-bold text-[#0B1F3A]">
              Research Interests
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-[2rem] p-10 shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">
              <h3 className="text-3xl font-bold text-[#0B1F3A] mb-8">
                Algebraic Combinatorics
              </h3>

              <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <li>• Erdős–Ko–Rado-type Problems</li>
                <li>• Intersecting Families of Permutations</li>
                <li>• Representation Theory of Symmetric Groups </li>
                <li>• Spectral Methods in Combinatorics </li>
              </ul>
            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">
              <h3 className="text-3xl font-bold text-[#0B1F3A] mb-8">
                Ramsey Theory
              </h3>

              <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <li>• Cycles versus Bipartite Graphs</li>
                <li>• Ramsey Goodness</li>
                <li>• Structural Embedding Problems</li>
                <li>• Extremal Constructions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Current Work */}
      {/*
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Current Work
            </p>
            <h2 className="text-5xl font-bold text-[#0B1F3A]">
              Ongoing Research
            </h2>
          </div>

          <div className="bg-gray-50 rounded-[2rem] p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-700 leading-relaxed">
              <div>
                <ul className="space-y-5">
                  <li>• Hamiltonicity under neighborhood conditions</li>
                  <li>• Cycle embedding in dense graphs</li>
                  <li>• Ramsey goodness problems</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-5">
                  <li>• Character bounds in symmetric groups</li>
                  <li>• Partition-theoretic combinatorics</li>
                  <li>• Wreath product representations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      {/* Publications */}
      <section id="publications" className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Publications Heading */}
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Publications and Preprints
            </p>

            <h2 className="text-5xl font-bold text-[#0B1F3A]">Publications</h2>
          </div>

          {/* Publications Block */}
          <div className="bg-white rounded-[2rem] p-12 shadow-xl border border-gray-100">
            <ol
              reversed
              className="list-decimal pl-8 space-y-12 text-lg leading-9 text-gray-700"
            >
              {publications.map((paper, index) => (
                <li key={index}>
                  <p className="font-semibold text-xl text-[#0B1F3A]">
                    {paper.author}
                  </p>

                  <p className="text-2xl mt-2 text-[#0B1F3A]">{paper.title}</p>

                  <p className="italic text-gray-500 text-lg mt-2">
                    {paper.journal}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 rounded-full bg-[#0B1F3A] text-white text-sm hover:opacity-90"
                    >
                      View Paper
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Preprints Heading */}
          <div className="text-center mt-20 mb-10">
            <h2 className="text-5xl font-bold text-[#0B1F3A]">Preprints</h2>
          </div>

          {/* Preprints Block */}
          <div className="bg-white rounded-[2rem] p-12 shadow-xl border border-gray-100">
            <ol
              reversed
              className="list-decimal pl-8 space-y-12 text-lg leading-9 text-gray-700"
            >
              {preprints.map((paper, index) => (
                <li key={index}>
                  <p className="font-semibold text-xl text-[#0B1F3A]">
                    {paper.author}
                  </p>

                  <p className="text-2xl mt-2 text-[#0B1F3A]">{paper.title}</p>

                  <p className="italic text-gray-500 text-lg mt-2">
                    {paper.journal}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 rounded-full bg-[#0B1F3A] text-white text-sm hover:opacity-90"
                    >
                      View Preprint
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Teaching Assistant */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Teaching
            </p>

            <h2 className="text-5xl font-bold text-[#0B1F3A]">
              Teaching Assistant
            </h2>
          </div>

          <div className="bg-gray-50 rounded-[2rem] p-10 shadow-xl border border-gray-100">
            <ul className="list-disc pl-8 space-y-4 text-lg text-gray-700 leading-8">
              <li>
                <span className="font-semibold">Linear Algebra I</span> — Autumn
                2023, IISER Kolkata
              </li>

              <li>
                <span className="font-semibold">Mathematics II</span> — Spring
                2023, IISER Kolkata
              </li>

              <li>
                <span className="font-semibold">Analysis I</span> — Autumn 2022,
                IISER Kolkata
              </li>

              <li>
                <span className="font-semibold">Mathematics II</span> — Spring
                2022, IISER Kolkata
              </li>

              <li>
                <span className="font-semibold">Analysis I</span> — Autumn 2021,
                IISER Kolkata
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Education */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Education
            </p>

            <h2 className="text-5xl font-bold text-[#0B1F3A]">Education</h2>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100">
            <ul className="list-disc pl-8 space-y-8 text-lg text-gray-700 leading-8">
              <li>
                <span className="font-semibold">Ph.D.</span> (2020–Present),
                Indian Institute of Science Education and Research Kolkata, West
                Bengal, India.
              </li>

              <li>
                <span className="font-semibold">M.Sc. in Mathematics</span>{' '}
                (2018–2020), Indian Institute of Technology Bhubaneswar, Odisha,
                India.
              </li>

              <li>
                <span className="font-semibold">B.Sc. (Hons.) Mathematics</span>{' '}
                (2015–2018), Ramjas College, University of Delhi, Delhi, India.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Workshops & Conferences */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Academic Activities
            </p>

            <h2 className="text-5xl font-bold text-[#0B1F3A]">
              Workshops & Conferences
            </h2>
          </div>
          <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100">
            <ul className="list-disc pl-8 space-y-8 text-lg leading-9 text-gray-700">
              <li>
                Attended{' '}
                <span className="font-semibold text-[#0B1F3A]">
                  12th PhD Summer School in Discrete Mathematics
                </span>{' '}
                organised by FAMNIT, University of Primorska, Koper, Slovenia
                (Europe), 2025.
              </li>

              <li>
                Attended{' '}
                <span className="font-semibold text-[#0B1F3A]">
                  International Conference On Graph Theory and its Applications
                  (ICGTA24)
                </span>{' '}
                organised by Department of Mathematics, School of Engineering,
                Presidency University Bengaluru, Karnataka, India.
              </li>

              <li>
                Attended Advanced Instructional School on{' '}
                <span className="font-semibold text-[#0B1F3A]">
                  “Combinatorics and Graph Theory”
                </span>{' '}
                organised by{' '}
                <span className="italic">
                  National Centre for Mathematics (A joint centre of IIT Bombay
                  and TIFR Mumbai)
                </span>
                , 1st May to 13th May 2023. Venue: University of Kashmir,
                Hazratbal, Srinagar, Jammu and Kashmir, India.
              </li>

              <li>
                Attended Advanced Instructional School on{' '}
                <span className="font-semibold text-[#0B1F3A]">
                  “Algebraic Combinatorics and Spectral Graph Theory”
                </span>{' '}
                organised by{' '}
                <span className="italic">
                  National Centre for Mathematics (A joint centre of IIT Bombay
                  and TIFR Mumbai)
                </span>
                , 30th May to 18th June 2022. Venue: Mepco Schlenk Engineering
                College, Sivakasi, Tamil Nadu, India.
              </li>

              <li>
                Poster Presentation on DMS Day, Title:{' '}
                <span className="font-semibold text-[#0B1F3A]">
                  “Triangle-Free Graphs with High Chromatic Number”
                </span>
                , <span className="italic">IISER Kolkata</span>, 2022.
              </li>

              <li>
                Conference on Linear Algebra and its Applications in honor of
                Ravindra B. Bapat,{' '}
                <span className="italic">
                  Indian Statistical Institute Delhi
                </span>
                , India, December 2019.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Notes */}
      {/*
      <section id="notes" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Notes & Writing
            </p>
            <h2 className="text-5xl font-bold text-[#0B1F3A]">
              Notes & Expository Writing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {notes.map((note, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-[2rem] p-10 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
                  {note}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Expository material, seminar notes, references, and problem
                  collections.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
            Contact
          </p>

          {/*<h2 className="text-5xl font-bold text-[#0B1F3A] mb-10">
            Get In Touch
          </h2>*/}

          <div className="bg-white rounded-[2rem] p-12 shadow-xl border border-gray-100">
            <p className="text-2xl font-semibold text-[#0B1F3A] mb-4">
              Rajiv Mishra
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Department of Mathematics & Statistics • IISER Kolkata
            </p>

            <a
              href="mailto:rm20rs017@iiserkol.ac.in"
              className="inline-block bg-[#0B1F3A] text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-lg"
            >
              Email Me
            </a>

            {/*<button className="bg-[#0B1F3A] text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-lg">
              Email Me
    </button>*/}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#0B1F3A] text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Rajiv Mishra</h3>

          <p className="mb-2 text-gray-400">Research Scholar</p>
          <p className="mb-2 text-gray-400">
            Department of Mathematics & Statistics • IISER Kolkata
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-lg mb-10">
            <a
              href="https://scholar.google.com/citations?user=ksOVIygAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#0B1F3A] transition"
            >
              <img
                src="/Google_Scholar_logo.png"
                alt="Google Scholar"
                className="w-7 h-7"
              />
              <span>Google Scholar</span>
            </a>

            <a
              href=" http://arxiv.org/a/mishra_r_4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#0B1F3A] transition"
            >
              <img src="/arxiv_logo.svg" alt="arXiv" className="w-7 h-7" />
              <span>arXiv</span>
            </a>

            <a
              href="https://www.researchgate.net/profile/Rajiv-Mishra-6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#0B1F3A] transition"
            >
              <img
                src="/ResearchGate_logo.jpg"
                alt="ResearchGate"
                className="w-7 h-7"
              />
              <span>ResearchGate</span>
            </a>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 Rajiv Mishra • Last updated May 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
