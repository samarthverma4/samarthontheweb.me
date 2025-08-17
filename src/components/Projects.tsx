import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    title: "obake.blue",
    description: "A haunting digital experience that blurs the line between the living web and the spectral internet.",
    tech: ["WebGL", "Three.js", "React"],
    status: "Haunting users since 2024",
    color: "electric"
  },
  {
    id: 2,
    title: "Quantum Canvas",
    description: "Interactive art installation where particles respond to human emotion through biometric feedback.",
    tech: ["Canvas API", "WebRTC", "Machine Learning"],
    status: "Experimental prototype",
    color: "cyber"
  },
  {
    id: 3,
    title: "Liquid Typography",
    description: "Typography that flows like water, adapting to content emotion and user interaction patterns.",
    tech: ["SVG Animation", "TypeScript", "CSS Physics"],
    status: "Award-winning experiment",
    color: "electric"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-ambient opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-electric">Digital</span>
            <span className="text-ghost"> Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projects that push boundaries, break conventions, and make the web feel alive.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-[#000000] border border-border rounded-2xl p-8 hover:border-electric/50 transition-all duration-500 hover:shadow-glow mix-blend-normal"
              style={{ animationDelay: `${index * 0.2}s`, isolation: 'isolate', backgroundColor: '#000000', backdropFilter: 'none' }}
            >
              {/* Project number */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 ${project.color === 'electric' ? 'bg-gradient-electric' : 'bg-gradient-cyber'} rounded-full flex items-center justify-center text-void font-bold text-lg`}>
                {String(project.id).padStart(2, '0')}
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-ghost mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-shadow border border-border rounded-full text-ghost"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Status */}
                <div className="text-sm text-cyber font-medium">{project.status}</div>
                
                {/* Action */}
                <div className="pt-4">
                  <Button variant="ghost" className="group-hover:text-electric transition-colors">
                    Explore Project →
                  </Button>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-electric opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="electric" size="lg" className="animate-pulse-glow">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}