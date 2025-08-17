import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Button } from '@/components/ui/button'
import Scene3D from './Scene3D'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-void opacity-90" />
      <div className="absolute inset-0 bg-gradient-ambient" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <Scene3D />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="text-gradient-electric">Code</span>
            <br />
            <span className="text-ghost">That</span>
            <br />
            <span className="text-gradient-cyber">Moves</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I make things that move—literally and emotionally. 
            Where logic meets poetry, and browsers bend to imagination.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="electric" size="xl" className="animate-pulse-glow">
              View My Work
            </Button>
            <Button variant="void" size="xl">
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-electric rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-cyber rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-8 w-2 h-2 bg-ghost rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}