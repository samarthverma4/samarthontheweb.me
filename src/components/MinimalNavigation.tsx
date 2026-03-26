import { useState } from 'react'

export default function MinimalNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="font-mono text-lg">
          sv
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#work" className="font-mono text-sm hover:text-muted-foreground transition-colors">
            work
          </a>
          <a href="#projects" className="font-mono text-sm hover:text-muted-foreground transition-colors">
            projects
          </a>
          <a href="#about" className="font-mono text-sm hover:text-muted-foreground transition-colors">
            about
          </a>
          <a href="#contact" className="font-mono text-sm hover:text-muted-foreground transition-colors">
            contact
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden font-mono text-sm"
        >
          {isMenuOpen ? 'close' : 'menu'}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-6 bg-background border border-border p-6">
          <div className="flex flex-col gap-4">
            <a href="#work" onClick={closeMenu} className="font-mono text-sm hover:text-muted-foreground transition-colors">
              work
            </a>
            <a href="#projects" onClick={closeMenu} className="font-mono text-sm hover:text-muted-foreground transition-colors">
              projects
            </a>
            <a href="#about" onClick={closeMenu} className="font-mono text-sm hover:text-muted-foreground transition-colors">
              about
            </a>
            <a href="#contact" onClick={closeMenu} className="font-mono text-sm hover:text-muted-foreground transition-colors">
              contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}