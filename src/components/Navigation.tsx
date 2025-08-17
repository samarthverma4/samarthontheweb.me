import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experiments', href: '#experiments' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gradient-electric">
          ◊
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-ghost hover:text-electric transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        
        {/* CTA */}
        <Button variant="floating" size="sm" className="hidden md:inline-flex">
          Get In Touch
        </Button>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-ghost hover:text-electric transition-colors"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <span className={`block w-6 h-0.5 bg-current transform transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transform transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-6 bg-card/90 backdrop-blur-lg rounded-xl border border-border p-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-ghost hover:text-electric transition-colors duration-300 py-2"
              >
                {item.label}
              </a>
            ))}
            <Button variant="electric" size="sm" className="mt-4">
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}