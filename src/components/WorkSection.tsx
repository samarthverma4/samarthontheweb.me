const projects = [
  {
    title: 'WildeDex',
    year: '2025',
    role: 'Frontend Developer',
    description: 'A Pokédex-style web app for exploring wildlife species, built with HTML, CSS, and JavaScript. Focused on clean UI, responsive cards, and structured species data.',
    tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
    status: 'live',
    github: 'https://github.com/samarthverma4/WildeDex'
  },
  {
    title: 'Little Lemon Restaurant',
    year: '2025', 
    role: 'Frontend Developer',
    description: 'A modern, responsive restaurant website crafted with HTML, CSS, and JavaScript, designed to elegantly showcase menu offerings, reservations, and brand identity through clean layouts and intuitive UI components.',
    tech: ['React.js', 'Responsive Design', 'UI/UX', 'Performance Optimization'],
    status: 'live',
    github: 'https://github.com/samarthverma4/little-lemon-restaurant'
  },
  {
    title: 'Digital Portfolio',
    year: '2025',
    role: 'Frontend Developer',
    description: 'A minimalist, responsive portfolio crafted with modern frontend tools to showcase projects, skills, and UI expertise with clarity and precision.',
    tech: ['React.js', 'Component Design', 'CSS Modules', 'Git'],
    status: 'live'
  }
]

export default function WorkSection() {
  return (
    <section id="work" className="px-6 pb-32">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="font-mono text-3xl md:text-5xl -mt-4">
              selected work
            </h2>
            <div className="w-32 h-px bg-foreground" />
          </div>
          
          {/* Projects */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="space-y-6 group cursor-pointer">
                {/* Project header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <h3 className="font-mono text-2xl md:text-3xl group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.role}</span>
                    <span>•</span>
                    <span className={`px-2 py-1 border ${project.status === 'live' ? 'border-green-500 text-green-500' : 'border-muted-foreground'}`}>
                      {project.status}
                    </span>
                    {project.github && (
                      <>
                        <span>•</span>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-sm hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                          aria-label="View Code on GitHub"
                        >
                          view code
                        </a>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Description */}
                <p className="font-mono text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted-foreground border border-border px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Divider */}
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