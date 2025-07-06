"use client"

import { useState, useEffect } from "react"
import { Github, Mail, MapPin, Star, Code, Brain, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function NordWestWebsite() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const services = [
    {
      icon: Brain,
      title: "AI/LLM Consulting",
      description: "Fine-tuning, embeddings, RAG systems, and custom AI solutions",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "React, Node.js, DevOps, Rust - from concept to production",
    },
    {
      icon: Users,
      title: "Open-Source Strategy",
      description: "Community building, contribution strategies, and project governance",
    },
    {
      icon: Shield,
      title: "Technical Advisory",
      description: "Architecture design, code reviews, and strategic technical guidance",
    },
  ]

  const projects = [
    {
      title: "Alpine-LLM",
      description: "Sustainable AI inference engine optimized for edge computing",
      tags: ["#LLM", "#Rust", "#Edge"],
      stars: 1247,
    },
    {
      title: "EcoRAG",
      description: "Carbon-aware retrieval augmented generation framework",
      tags: ["#RAG", "#Python", "#Sustainability"],
      stars: 892,
    },
    {
      title: "OpenMountain",
      description: "Collaborative platform for distributed development teams",
      tags: ["#React", "#Node", "#Collaboration"],
      stars: 634,
    },
    {
      title: "ShimmerDB",
      description: "Vector database with built-in privacy and encryption",
      tags: ["#Database", "#Privacy", "#Rust"],
      stars: 445,
    },
    {
      title: "NaturalNLP",
      description: "Ethical NLP toolkit with bias detection and mitigation",
      tags: ["#NLP", "#Ethics", "#Python"],
      stars: 723,
    },
  ]

  const testimonials = [
    {
      quote:
        "NordWest transformed our AI strategy with a perfect blend of technical excellence and ethical consideration.",
      author: "Sarah Chen",
      role: "CTO, GreenTech Solutions",
    },
    {
      quote: "The open-source approach and sustainable mindset made all the difference in our project's success.",
      author: "Marcus Weber",
      role: "Lead Engineer, Alpine Dynamics",
    },
    {
      quote: "Rare combination of deep technical knowledge and genuine care for environmental impact.",
      author: "Elena Rodriguez",
      role: "Founder, EcoAI Labs",
    },
  ]

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${isDarkMode ? "dark bg-slate-900 text-white" : "light bg-sky-blue-light text-stone-800"}`}
    >
      {/* Ambient Background */}
      <div className="fixed inset-0 opacity-30">
        <div
          className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-br from-emerald-900/20 via-slate-900 to-purple-900/20" : "bg-gradient-to-br from-white/10 via-sky-blue to-sky-blue-dark/30"}`}
        />
        <div
          className="absolute inset-0 shimmer-overlay"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          isDarkMode
            ? "bg-slate-800/80 text-emerald-400 hover:bg-slate-700/80"
            : "bg-white/80 text-pine-600 hover:bg-white/90"
        } backdrop-blur-sm border ${isDarkMode ? "border-slate-700" : "border-stone-200"}`}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="absolute inset-0 hero-background" />

        {/* SVG Mountains */}
        <div className="absolute bottom-0 left-0 right-0 z-5">
          <svg viewBox="0 0 1200 300" className="w-full h-auto">
            <defs>
              <linearGradient id="mountain1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isDarkMode ? "#1e293b" : "#8fbc8f"} stopOpacity="0.8" />
                <stop offset="100%" stopColor={isDarkMode ? "#0f172a" : "#556b2f"} stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="mountain2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isDarkMode ? "#334155" : "#9acd32"} stopOpacity="0.6" />
                <stop offset="100%" stopColor={isDarkMode ? "#1e293b" : "#6b8e23"} stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="mountain3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isDarkMode ? "#475569" : "#b8d4b8"} stopOpacity="0.4" />
                <stop offset="100%" stopColor={isDarkMode ? "#334155" : "#8fbc8f"} stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Back mountains */}
            <path
              d="M0,300 L0,200 L200,100 L400,150 L600,80 L800,120 L1000,90 L1200,140 L1200,300 Z"
              fill="url(#mountain3)"
            />

            {/* Middle mountains */}
            <path
              d="M0,300 L0,220 L150,120 L350,180 L550,100 L750,160 L950,110 L1200,170 L1200,300 Z"
              fill="url(#mountain2)"
            />

            {/* Front mountains */}
            <path
              d="M0,300 L0,250 L100,180 L300,220 L500,140 L700,200 L900,160 L1200,210 L1200,300 Z"
              fill="url(#mountain1)"
            />
          </svg>
        </div>

        {/* Animated Tree */}
        <div className="absolute bottom-20 left-10 z-10 hidden md:block">
          <svg width="80" height="120" viewBox="0 0 80 120" className="swaying-tree">
            <defs>
              <linearGradient id="trunk" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isDarkMode ? "#4a5568" : "#8b7355"} />
                <stop offset="100%" stopColor={isDarkMode ? "#2d3748" : "#6b5b47"} />
              </linearGradient>
              <radialGradient id="foliage" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={isDarkMode ? "#38a169" : "#48bb78"} />
                <stop offset="100%" stopColor={isDarkMode ? "#2f855a" : "#38a169"} />
              </radialGradient>
            </defs>

            {/* Trunk */}
            <rect x="35" y="60" width="10" height="60" fill="url(#trunk)" rx="2" />

            {/* Foliage layers */}
            <ellipse cx="40" cy="45" rx="25" ry="20" fill="url(#foliage)" opacity="0.8" />
            <ellipse cx="40" cy="35" rx="20" ry="15" fill="url(#foliage)" opacity="0.9" />
            <ellipse cx="40" cy="25" rx="15" ry="12" fill="url(#foliage)" />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block chromatic-text rgb-glitch">Building the future</span>
              <span className="block text-emerald-400 rgb-glitch">where nature and</span>
              <span className="block text-purple-400 rgb-glitch">machine meet.</span>
            </h1>
          </div>

          <p
            className={`text-xl md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed ${isDarkMode ? "text-slate-300" : "text-stone-600"}`}
          >
            Generative AI & software systems from the alpine edge.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white px-8 py-4 text-lg font-semibold shimmer-button"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-32 px-6 relative ${isDarkMode ? "text-white" : "text-stone-800"}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 chromatic-text rgb-glitch">From the Alpine Edge</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className={isDarkMode ? "text-slate-300" : "text-stone-700"}>
                  Operating from high altitudes in the Swiss Alps, I bridge the gap between cutting-edge AI technology
                  and sustainable, ethical development practices.
                </p>
                <p className={isDarkMode ? "text-slate-300" : "text-stone-700"}>
                  With deep expertise in generative AI, full-stack development, and open-source ecosystems, I help
                  organizations build the future responsibly—where innovation serves both humanity and our planet.
                </p>
                <p className={isDarkMode ? "text-slate-300" : "text-stone-700"}>
                  Every line of code is written with intention. Every AI model is trained with consideration. Every
                  solution is crafted to last.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-purple-500/20 rounded-full blur-xl" />
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center portrait-glow">
                  <div className="text-6xl">🏔️</div>
                </div>
              </div>
            </div>
          </div>
          {/* Floating Leaves */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="floating-leaf leaf-1">🍃</div>
            <div className="floating-leaf leaf-2">🍂</div>
            <div className="floating-leaf leaf-3">🍃</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 relative">
        {/* Drifting Clouds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="cloud cloud-1">☁️</div>
          <div className="cloud cloud-2">☁️</div>
          <div className="cloud cloud-3">☁️</div>
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 chromatic-text rgb-glitch">
            Services & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`${isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/70 border-stone-200"} service-card group backdrop-blur-sm`}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 relative">
                    <service.icon className="w-12 h-12 mx-auto text-emerald-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-stone-800"}`}>
                    {service.title}
                  </h3>
                  <p className={`leading-relaxed ${isDarkMode ? "text-slate-300" : "text-stone-600"}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 chromatic-text rgb-glitch">
            Open Source Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`${isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/70 border-stone-200"} project-card group cursor-pointer backdrop-blur-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className={`text-xl font-semibold group-hover:text-emerald-400 transition-colors ${isDarkMode ? "text-white" : "text-stone-800"}`}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center text-slate-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                  </div>

                  <p className={`mb-4 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-stone-600"}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-slate-700/50 text-emerald-400 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`flex items-center hover:text-white transition-colors ${isDarkMode ? "text-slate-400" : "text-stone-500"}`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    <span className="text-sm">View on GitHub</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 chromatic-text rgb-glitch">Client Voices</h2>

          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="testimonial-card bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <blockquote
                    className={`text-xl md:text-2xl mb-6 leading-relaxed italic ${isDarkMode ? "text-slate-200" : "text-stone-700"}`}
                  >
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold text-emerald-400">{testimonial.author}</div>
                      <div className="text-slate-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 chromatic-text rgb-glitch">Our Philosophy</h2>

          {/* Subtle Aurora Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="aurora aurora-1"></div>
            <div className="aurora aurora-2"></div>
          </div>

          <div className="space-y-12 text-xl md:text-2xl leading-relaxed">
            <p className="philosophy-text text-emerald-300">Open-source is our compass.</p>
            <p className="philosophy-text text-purple-300">Sustainability is our path.</p>
            <p className="philosophy-text text-cyan-300">Humanity is our destination.</p>
          </div>

          <div
            className={`mt-16 p-8 bg-gradient-to-r from-emerald-900/20 to-purple-900/20 rounded-2xl backdrop-blur-sm border ${isDarkMode ? "border-slate-700/50" : "border-stone-300/50"}`}
          >
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-slate-300" : "text-stone-600"}`}>
              In the intersection of alpine serenity and technological innovation, we find the clarity to build systems
              that serve both progress and preservation. Every algorithm we craft, every system we architect, carries
              the responsibility of our shared future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 chromatic-text rgb-glitch">
            Let's Build Together
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className={`${isDarkMode ? "bg-slate-800/50 border-slate-600 text-white placeholder-slate-400" : "bg-white/80 border-stone-300 text-stone-800 placeholder-stone-500"} backdrop-blur-sm`}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-emerald-400" />
                  <span>hello@nordwest.dev</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-emerald-400" />
                  <span>Operating from the Alpine shimmer zone</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <h4 className="font-semibold mb-3 text-cyan-400">Schedule a Consultation</h4>
                <p className="text-slate-300 mb-4">Book a 30-minute discovery call to discuss your project needs.</p>
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white bg-transparent"
                >
                  Open Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className={isDarkMode ? "text-slate-400" : "text-stone-500"}>
            © 2024 NordWest Consulting. Building the future from the alpine edge.
          </p>
        </div>
      </footer>
    </div>
  )
}
