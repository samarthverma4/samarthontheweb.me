export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="font-mono text-3xl md:text-5xl">
              get in touch
            </h2>
            <div className="w-32 h-px bg-foreground" />
          </div>
          
          {/* Contact info */}
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className="font-mono text-lg text-muted-foreground leading-relaxed">
                interested in collaborating on experimental projects,
                discussing new technologies, or just saying hello?
                feel free to reach out.
              </p>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">email</span>
                  <a href="mailto:rajeevnikky.15@gmail.com" className="hover:text-muted-foreground transition-colors">
                    rajeevnikky.15@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">linkedin</span>
                  <a href="https://linkedin.com/in/samarthverma" className="hover:text-muted-foreground transition-colors">
                    linkedin.com/in/samarthverma
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">github</span>
                  <a href="https://github.com/samarthverma4" className="hover:text-muted-foreground transition-colors">
                    github.com/samarthverma4
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">location</span>
                  <span>Mathura , Uttar Pradesh</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-mono text-lg">available for</h3>
                <div className="space-y-2 font-mono text-sm text-muted-foreground">
                  <div>freelance projects</div>
                  <div>creative collaborations</div>
                  <div>speaking engagements</div>
                  <div>workshops & mentoring</div>
                  <div>experimental research</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-mono text-lg">currently</h3>
                <div className="space-y-2 font-mono text-sm text-muted-foreground">
                  <div>exploring machine learning in creative coding</div>
                  <div>developing new webgl techniques</div>
                  <div>writing about experimental web design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="max-w-4xl mx-auto pt-32">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div>© 2025 Samarth Verma</div>
          <div className="flex items-center gap-4">
            <span>Last update: Aug 2025</span>
            <span>•</span>
            <span>Built with React.js</span>
          </div>
        </div>
      </div>
    </section>
  )
}