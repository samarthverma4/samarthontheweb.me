import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-shadow via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-cyber">Ready to Make</span>
              <br />
              <span className="text-ghost">Something</span>
              <br />
              <span className="text-gradient-electric">Extraordinary?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm looking for collaborators who aren't afraid to push boundaries, 
              break conventions, and make the digital world a more expressive place.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="electric" size="xl" className="animate-pulse-glow">
              Start a Conversation
            </Button>
            <Button variant="void" size="xl">
              See My Process
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-electric rounded-full mx-auto flex items-center justify-center text-void text-2xl font-bold">
                ↗
              </div>
              <h3 className="text-xl font-semibold text-ghost">Experimental Projects</h3>
              <p className="text-muted-foreground">Art installations, interactive experiences, digital poetry</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-cyber rounded-full mx-auto flex items-center justify-center text-void text-2xl font-bold">
                ◊
              </div>
              <h3 className="text-xl font-semibold text-ghost">Technical Consultation</h3>
              <p className="text-muted-foreground">WebGL, Three.js, performance optimization, creative coding</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-electric rounded-full mx-auto flex items-center justify-center text-void text-2xl font-bold">
                ∞
              </div>
              <h3 className="text-xl font-semibold text-ghost">Creative Partnerships</h3>
              <p className="text-muted-foreground">Agencies, studios, artists pushing creative boundaries</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-electric rounded-full animate-float" />
      <div className="absolute bottom-32 right-20 w-5 h-5 bg-cyber rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-ghost rounded-full animate-float" style={{ animationDelay: '3s' }} />
    </section>
  )
}