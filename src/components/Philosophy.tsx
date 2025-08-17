export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-shadow/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-gradient-cyber">Beyond</span>
              <br />
              <span className="text-ghost">Pixels</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a developer who thinks like a designer, a designer who codes like a hacker, 
                and someone who believes portfolios should feel more like digital playgrounds 
                than corporate resumes.
              </p>
              
              <p>
                My work isn't about pixel-perfect templates; it's about bending the browser 
                until it speaks in motion, color, and soul. Whether I'm using WebGL, three.js, 
                or plain ol' JavaScript, I treat every project as a chance to blur the line 
                between logic and poetry.
              </p>
              
              <p>
                I'm not here to show off — I'm here to find the others who want to make 
                weird, wonderful, technically ambitious stuff. 
                <span className="text-electric font-semibold"> Let's make the internet feel again.</span>
              </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Animated background shapes */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric rounded-full animate-drift" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyber rounded-full animate-float" />
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-electric rounded-lg animate-pulse-glow transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            
            {/* Quote card */}
            <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-deep">
              <div className="text-6xl text-electric mb-4">"</div>
              <blockquote className="text-xl text-ghost italic leading-relaxed">
                Every project is a chance to blur the line between logic and poetry.
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center text-void font-bold">
                  ◊
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-ghost">Digital Alchemist</div>
                  <div className="text-sm text-muted-foreground">Code × Design × Motion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}