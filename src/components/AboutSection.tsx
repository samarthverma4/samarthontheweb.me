export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-mono text-3xl md:text-5xl">
                about
              </h2>
              <div className="w-24 h-px bg-foreground" />
            </div>

            <div className="space-y-6 font-mono text-lg text-muted-foreground leading-relaxed">
              <p>
                Second-year B.Tech student (CS & AI/ML, GLA University) with a
                research focus on Multimodal AI, Human-Computer Interaction, and NLP.
                My projects explore a central question: how can AI systems communicate
                meaningfully with non-expert users?
              </p>
              <p>
                Comfortable across the stack — React and TypeScript on the frontend,
                Python with Flask and Node.js on the backend, and AI/ML pipelines with
                PyTorch, HuggingFace, LangChain, and RAG. Experienced with AWS, Azure,
                and GCP for deployment.
              </p>
              <p>
                Beyond code, I bring experience in graphic design using Adobe, Canva, and
                Affinity — helping college clubs with branding, creatives, and digital content.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-lg">research interests</h3>
              <div className="space-y-2 font-mono text-sm text-muted-foreground">
                <div>Multimodal AI for Accessible Communication</div>
                <div>LLM Grounding & Domain Adaptation</div>
                <div>Natural Language Processing</div>
                <div>Child-Centric HCI & Inclusive Design</div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="font-mono text-lg">technologies</h3>
              <div className="space-y-3 font-mono text-sm text-muted-foreground">
                <div>
                  <div className="text-foreground text-xs mb-1">languages</div>
                  <div>Python, JavaScript (ES6+), SQL, Java</div>
                </div>
                <div>
                  <div className="text-foreground text-xs mb-1">ai / ml</div>
                  <div>PyTorch, TensorFlow, Scikit-learn, HuggingFace, LangChain, RAG, FAISS, Gemini API, OpenAI API</div>
                </div>
                <div>
                  <div className="text-foreground text-xs mb-1">web & backend</div>
                  <div>React.js, Flask, Node.js, Tailwind CSS, REST APIs</div>
                </div>
                <div>
                  <div className="text-foreground text-xs mb-1">cloud & devops</div>
                  <div>AWS (EC2, S3), Microsoft Azure, GCP, GitHub Actions</div>
                </div>
                <div>
                  <div className="text-foreground text-xs mb-1">tools</div>
                  <div>Git, Linux, Postman, VS Code, MySQL</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-lg">certifications</h3>
              <div className="space-y-2 font-mono text-sm text-muted-foreground">
                <div>Microsoft Certified: Azure AI Fundamentals (AI-900)</div>
                <div>Microsoft Certified: Azure Fundamentals (AZ-900)</div>
                <div>Meta Front-End Developer Certificate</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-lg">experience</h3>
              <div className="space-y-4 font-mono text-sm text-muted-foreground">
                <div>
                  <div>Frontend Developer Intern @ MMI Softwares Pvt. Ltd.</div>
                  <div>May 2025 - July 2025</div>
                </div>
                <div>
                  <div>Design & Media Team Member @ The Literario</div>
                  <div>March 2025 - December 2025</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-lg">education</h3>
              <div className="space-y-2 font-mono text-sm text-muted-foreground">
                <div>GLA University, Mathura</div>
                <div>B.Tech, Computer Science & Engineering (AI/ML)</div>
                <div>August 2024 - May 2028</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
