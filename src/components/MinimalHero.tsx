import { Button } from '@/components/ui/button'

export default function MinimalHero() {
  return (
    <section className="flex flex-col justify-center px-6 pt-20 pb-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="font-mono text-4xl md:text-6xl font-normal tracking-tight">
              Samarth Verma
            </h1>
            <div className="w-24 h-px bg-foreground" />
          </div>
          <div className="max-w-2xl">
            <p className="font-mono text-lg md:text-xl leading-relaxed text-muted-foreground">
              Frontend Developer
              <br />
              specializing in building user-friendly and
              <br />
              responsive web interfaces with React.js
              <br />
              Passionate about clean code and exceptional user experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-8">
            <a href="/assets/Samarth Verma - Resume.pdf" download aria-label="Download Resume">
              <Button variant="minimal" size="lg" className="font-mono">
                view resume
              </Button>
            </a>
            <a href="#work">
              <Button variant="outline" size="lg" className="font-mono">
                projects
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="font-mono">
                contact
              </Button>
            </a>
          </div>
          <div>
            <div className="w-2 h-16 bg-border animate-pulse mb-5" />
          </div>
        </div>
      </div>
    </section>
  )
}