import { useRef, useEffect } from 'react'

interface CanvasExperimentProps {
  title: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function CanvasExperiment({ title, onMouseEnter, onMouseLeave }: CanvasExperimentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    
    resize()
    window.addEventListener('resize', resize)
    
    let animationId: number
    let time = 0
    
    const animate = () => {
      time += 0.01
      
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      
      ctx.fillStyle = 'rgb(3, 3, 3)'
      ctx.fillRect(0, 0, width, height)
      
      // Draw animated grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 0.5
      
      const gridSize = 40
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          const wave = Math.sin((x * 0.01) + (y * 0.01) + time) * 10
          ctx.beginPath()
          ctx.moveTo(x, y + wave)
          ctx.lineTo(x + gridSize, y + wave)
          ctx.stroke()
        }
      }
      
      // Draw floating particles
      for (let i = 0; i < 20; i++) {
        const x = (Math.sin(time + i) * width * 0.3) + (width * 0.5)
        const y = (Math.cos(time * 0.7 + i) * height * 0.3) + (height * 0.5)
        const size = Math.sin(time + i) * 2 + 3
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])
  
  return (
    <div 
      className="relative h-64 border border-border bg-card overflow-hidden group cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="font-mono text-sm text-foreground group-hover:text-white transition-colors">
          {title}
        </h3>
      </div>
    </div>
  )
}