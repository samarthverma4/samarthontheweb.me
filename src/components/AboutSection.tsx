export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-mono text-3xl md:text-5xl">
                about
              </h2>
              <div className="w-24 h-px bg-foreground" />
            </div>
            
            <div className="space-y-6 font-mono text-lg text-muted-foreground leading-relaxed">
              <p>
                Detail-oriented Frontend Developer with hands-on experience in building
                responsive and user-friendly web interfaces. Recently completed an impactful
                internship at MMI Softwares Pvt. Ltd.
              </p>
              
              <p>
                Demonstrated ability to quickly learn and adapt to new technologies,
                particularly in mastering React.js and contributing to live projects.
                Strong focus on writing clean, maintainable code and optimizing UI performance.
              </p>
              
              <p>
                Proven track record of effective collaboration with design and backend teams,
                consistently delivering high-quality solutions while maintaining a strong
                attention to detail.
              </p>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-12">
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="font-mono text-lg">core skills</h3>
              <div className="space-y-2 font-mono text-sm text-muted-foreground">
                <div>Frontend Development</div>
                <div>Responsive Design</div>
                <div>UI Optimization</div>
                <div>Cross-browser Compatibility</div>
                <div>Team Collaboration</div>
                <div>Problem Solving</div>
              </div>
            </div>
            
            {/* Tools */}
            <div className="space-y-4">
              <h3 className="font-mono text-lg">technologies</h3>
              <div className="space-y-2 font-mono text-sm text-muted-foreground">
                <div>React.js</div>
                <div>HTML5 / CSS3</div>
                <div>JavaScript (ES6+)</div>
                <div>Git Version Control</div>
                <div>Responsive Web Design</div>
                <div>UI/UX Best Practices</div>
              </div>
            </div>
            
            {/* Experience */}
            <div className="space-y-4">
              <h3 className="font-mono text-lg">experience</h3>
              <div className="space-y-2 font-mono text-sm text-muted-foreground">
                <div>Frontend Developer Intern @ MMI Softwares Pvt. Ltd.</div>
                <div>May 2025 - July 2025</div>
                <div>Mathura, Uttar Pradesh (Hybrid)</div>
                <div className="pt-4 text-xs">Last update: Aug 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}