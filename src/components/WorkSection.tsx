const projects = [
  {
    title: 'CartoonCare',
    year: '2026',
    role: 'Research Project',
    description: 'A multimodal AI system for pediatric health communication that generates personalized medical storybooks by coupling Gemini 2.5 Flash (age-adaptive text) with Flux 2 Pro (style-consistent illustration). Deployed on AWS EC2 with a full CI pipeline (38 passing tests, 84% branch coverage).',
    tech: ['Python', 'Flask', 'Gemini 2.5 Flash', 'Flux 2 Pro', 'Azure AI Foundry', 'AWS (EC2, S3)', 'JWT', 'pytest'],
    status: 'in progress',
    github: 'https://github.com/samarthverma4/CartoonCare'
  },
  {
    title: 'MonochromeMart',
    year: '2025',
    role: 'Team Research Project',
    description: 'Benchmarked RAG vs. fine-tuning as grounding strategies for a domain-specific retail catalog. Found RAG precision dropped ~31% past the effective context window; implemented chunking and cross-encoder re-ranking that recovered ~18% precision on long-tail queries. Hybrid scoring improved top-5 relevance by ~22%.',
    tech: ['React', 'TypeScript', 'Node.js', 'Gemini API', 'RAG', 'Fine-Tuning', 'Drizzle ORM', 'Tailwind CSS'],
    status: 'in progress',
    github: 'https://github.com/samarthverma4/MonoChromeMart'
  },
  {
    title: 'Digital Portfolio',
    year: '2025',
    role: 'Frontend Developer',
    description: 'A minimalist, responsive portfolio crafted with modern frontend tools to showcase projects, skills, and UI expertise with clarity and precision.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'live',
    github: 'https://github.com/samarthverma4/samarthontheweb.me'
  }
]

export default function WorkSection() {
  return (
    <section id="work" className="px-6 pb-32">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-3">
            <h2 className="font-mono text-3xl md:text-5xl -mt-4">
              selected work
            </h2>
            <div className="w-32 h-px bg-foreground" />
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="space-y-6 group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <h3 className="font-mono text-2xl md:text-3xl group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                    <span>{project.year}</span>
                    <span>.</span>
                    <span>{project.role}</span>
                    <span>.</span>
                    <span className={`px-2 py-1 border ${project.status === 'live' ? 'border-green-500 text-green-500' : 'border-muted-foreground'}`}>
                      {project.status}
                    </span>
                    {project.github && (
                      <span>
                        <span>.</span>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-sm hover:text-foreground transition-colors ml-4"
                          aria-label="View Code on GitHub"
                        >
                          view code
                        </a>
                      </span>
                    )}
                  </div>
                </div>

                <p className="font-mono text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted-foreground border border-border px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>

                {index < projects.length - 1 && (
                  <div className="pt-12">
                    <div className="w-full h-px bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
