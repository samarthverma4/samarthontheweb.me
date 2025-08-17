import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function MinimalNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-mono text-lg">
          sv
        </div>
        
        {/* Desktop Navigation */}
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
        
        {/* Menu toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden font-mono text-sm"
        >
          {isMenuOpen ? 'close' : 'menu'}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-6 bg-background border border-border p-6">
          <div className="flex flex-col gap-4">
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
        </div>
      )}
    </nav>
  )
}