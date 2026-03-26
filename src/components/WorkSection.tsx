const projects = [
  {
    title: 'CartoonCare',
    year: '2026',
    role: 'Research Project',
    description: 'Parents enter their child\'s name, age, and condition — CartoonCare generates a personalized medical storybook with AI illustrations, making healthcare accessible for young patients. Features AI narration, 10+ language translation, customizable story settings, and a page-by-page reader with smooth transitions.',
    tech: ['Python', 'Flask', 'Gemini 2.5 Flash', 'Flux 2 Pro', 'Azure AI Foundry', 'AWS (EC2, S3)', 'JWT', 'pytest'],
    status: 'in progress',
    github: 'https://github.com/samarthverma4/CartoonCare'
  },
  {
    title: 'MonochromeMart',
    year: '2025',
    role: 'Team Research Project',
    description: 'A full-stack e-commerce platform with an AI-powered shopping assistant built on Google\'s Gemini API. Features product browsing, real-time cart management, and intelligent product recommendations through a conversational interface.',
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
