import CanvasExperiment from './CanvasExperiment'

const experiments = [
  { id: '001', title: 'Markdown Blog Engine' },
  { id: '002', title: 'Framer Motion Playground' },
  { id: '003', title: 'Interactive Resume Builder' },
  { id: '004', title: 'Typography Morph' },
  { id: '005', title: 'Cellular Automata' },
  { id: '006', title: 'Fluid Dynamics' },
  { id: '007', title: 'Code Challenges Gallery' },
  { id: '008', title: 'Generative Grid' },
]

export default function ExperimentsGrid() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="font-mono text-3xl md:text-5xl">
              upcoming projects
            </h2>
            <div className="w-32 h-px bg-foreground" />
            <p className="font-mono text-lg text-muted-foreground max-w-2xl">
              a collection of upcoming web graphic experiments exploring
              the boundaries of browser capabilities and creative expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {experiments.map((experiment) => (
              <div key={experiment.id} className="bg-background p-8 hover:bg-card transition-colors duration-200 group cursor-pointer">
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">
                      {experiment.id}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      coming soon
                    </span>
                  </div>
                  <h3 className="font-mono text-lg group-hover:text-muted-foreground transition-colors">
                    {experiment.title}
                  </h3>
                  <div className="h-32 bg-muted relative overflow-hidden">
                    <CanvasExperiment title="" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            
              <a href="https://github.com/samarthverma4"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm underline hover:no-underline transition-all"
            >
              view all on github
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}