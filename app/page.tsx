"use client"

import { useState, useEffect } from "react"
import { Github, Mail, MapPin, Star, Code, Brain, Users, Shield, Leaf, Globe2, Heart } from "lucide-react"
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
      description: "Local-first AI solutions, self-hosted models, and vendor-independent architectures",
    },
    {
      icon: Globe2,
      title: "Professional Websites",
      description: "Multilingual, responsive web experiences built with open-source frameworks and modern standards",
    },
    {
      icon: Code,
      title: "Cross-Platform Apps",
      description: "Freedom-respecting mobile apps using React Native, empowering users across all devices",
    },
    {
      icon: Shield,
      title: "Backend Engineering",
      description: "Robust, scalable servers with Node.js, Python, or .NET Core - always open-source, always independent",
    },
    {
      icon: Users,
      title: "Open-Source Strategy",
      description: "Breaking free from proprietary software, community building, and FOSS governance",
    },
    {
      icon: Leaf,
      title: "Technical Advisory",
      description: "Migrating from proprietary systems, open-source alternatives, and independence roadmaps",
    },
  ]

  const projects = [
    {
      title: "Compass AI",
      description: "A privacy-first, local-first AI chatbot application",
      tags: ["#Privacy", "#Local", "#Sustainability"],
      stars: 4,
      githubUrl: "https://github.com/compass-ai-chat/compass",
      projectUrl: "https://compass-ai.chat"
    },
    {
      title: "ollama-ai-provider-v2",
      description: "An package for the AI SDK that allows you to use locally running ollama models",
      tags: ["#LLM", "#Local", "#AI SDK"],
      stars: 11,
      githubUrl: "https://github.com/nordwestt/ollama-ai-provider-v2",
      projectUrl: "https://www.npmjs.com/package/ollama-ai-provider-v2"
    },
    {
      title: "Radiooooo Download Button",
      description: "An extension that allows you to download your favorite radiooooo songs",
      tags: ["#Radiooooo", "#Audio", "#Chrome Extension"],
      stars: 2,
      githubUrl: "https://github.com/nordwestt/Radiooooo-download-button",
      projectUrl: "https://chromewebstore.google.com/detail/falplhjhdjliobhdpamajpdnnnoenjdh?utm_source=item-share-cb"
    },
    {
      title: "Kokoro-Wyoming",
      description: "A high quality, real-time text-to-speech server that works with Home Assistant",
      tags: ["#TTS", "#Local", "#Kokoro"],
      stars: 9,
      githubUrl: "https://github.com/nordwestt/kokoro-wyoming",
      projectUrl: "https://hub.docker.com/r/nordwestt/kokoro-wyoming"
    },
  ]

  const testimonials = [
    {
      quote:
        "With his expertise our process was automated and the time was reduced from about 5 minutes to 20-30 seconds",
      author: "Collectia A/S",
      role: "Chief of Development, Karina Achton",
    },
    {
      quote: "The open-source approach and sustainable mindset made all the difference in our project's success.",
      author: "Leonardo",
      role: "Chief Software Engineer, Michael Black",
    },
    {
      quote: "Rare combination of deep technical knowledge and genuine care for his work.",
      author: "CardLab ApS",
      role: "CEO, Frank Sandeløv",
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

      {/* Company Name */}
      <div className="fixed top-6 left-6 z-50 group">
        <div className="relative">
          <h1 
            className={`text-3xl font-bold tracking-wider transition-all duration-500
              ${isDarkMode 
                ? "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-cyan-400 group-hover:to-purple-400" 
                : "text-stone-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:via-cyan-600 group-hover:to-purple-600"
              }`}
          >
            ⟨ Nord<span className="text-emerald-400">West</span>T /⟩
          </h1>
          <div className={`absolute -bottom-2 left-0 w-0 h-0.5 
            ${isDarkMode 
              ? "bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400" 
              : "bg-gradient-to-r from-emerald-600 via-cyan-600 to-purple-600"} 
            group-hover:w-full transition-all duration-500`}>
          </div>
          
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 hero-background" />

        {/* ML Mountain Visualization */}
        <div className="absolute bottom-0 left-0 right-0 z-5 mb-8">
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
              <linearGradient id="circuit" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={isDarkMode ? "#4ade80" : "#22c55e"} stopOpacity="0.3" />
                <stop offset="100%" stopColor={isDarkMode ? "#818cf8" : "#6366f1"} stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Coordinate Axes */}
            <g className="coordinate-system" stroke={isDarkMode ? "#475569" : "#94a3b8"} strokeWidth="1">
              {/* Y-axis */}
              <line x1="50" y1="280" x2="50" y2="20" strokeWidth="2" />
              {/* X-axis */}
              <line x1="50" y1="280" x2="1150" y2="280" strokeWidth="2" />
              
              {/* Y-axis ticks and labels */}
              {[0, 1, 2, 3, 4].map((tick) => (
                <g key={`y-tick-${tick}`}>
                  <line 
                    x1="45" 
                    y1={280 - tick * 65} 
                    x2="55" 
                    y2={280 - tick * 65} 
                  />
                  <text 
                    x="20" 
                    y={285 - tick * 65} 
                    stroke={isDarkMode ? "#475569" : "#c084fc"} 
                    fontSize="12"
                  >
                    {tick * 25}
                  </text>
                </g>
              ))}

              {/* X-axis ticks and labels */}
              {[0, 1, 2, 3, 4].map((tick) => (
                <g key={`x-tick-${tick}`}>
                  <line 
                    x1={50 + tick * 275} 
                    y1="275" 
                    x2={50 + tick * 275} 
                    y2="285" 
                  />
                  <text 
                    x={50 + tick * 275} 
                    y="300" 
                    stroke={isDarkMode ? "#64748b" : "#34d399"} 
                    fontSize="12"
                    textAnchor="middle"
                  >
                    {tick * 25}
                  </text>
                </g>
              ))}

              {/* Grid lines */}
              {[1, 2, 3, 4].map((line) => (
                <g key={`grid-${line}`} opacity="0.1">
                  <line 
                    x1="50" 
                    y1={280 - line * 65} 
                    x2="1150" 
                    y2={280 - line * 65} 
                    strokeDasharray="4,4"
                  />
                  <line 
                    x1={50 + line * 275} 
                    y1="20" 
                    x2={50 + line * 275} 
                    y2="280" 
                    strokeDasharray="4,4"
                  />
                </g>
              ))}
            </g>

            {/* ML Data Points and Trend Lines */}
            <g className="ml-visualization">

              {/* Confidence interval area */}
              <path
                d="M100,210 C300,190 700,170 1100,130 L1100,160 C700,200 300,220 100,240 Z"
                fill={isDarkMode ? "#4ade8020" : "#22c55e20"}
                className="confidence-area"
              />
            </g>

            {/* Mountains as ML Curves */}
            <g className="mountain-curves">
              {/* Back mountains */}
              <path
                d="M50,280 L50,200 L200,100 L400,150 L600,80 L800,120 L1000,90 L1150,140 L1150,280 Z"
                fill="url(#mountain3)"
                className="mountain-curve"
              />

              {/* Middle mountains */}
              <path
                d="M50,280 L50,220 L150,120 L350,180 L550,100 L750,160 L950,110 L1150,170 L1150,280 Z"
                fill="url(#mountain2)"
                className="mountain-curve"
              />

              {/* Front mountains */}
              <path
                d="M50,280 L50,250 L100,180 L300,220 L500,140 L700,200 L900,160 L1150,210 L1150,280 Z"
                fill="url(#mountain1)"
                className="mountain-curve"
              />
            </g>

            {/* Tech Integration Points */}
            <g className="tech-points">
              {[
                [300, 220], [500, 140], [700, 200], [900, 160]
              ].map(([x, y], i) => (
                <g key={`tech-point-${i}`}>
                  <circle 
                    cx={x} 
                    cy={y} 
                    r="4" 
                    fill={isDarkMode ? "#4ade80" : "#22c55e"} 
                    className="animate-ping"
                  />
                  <circle 
                    cx={x} 
                    cy={y} 
                    r="2" 
                    fill={isDarkMode ? "#818cf8" : "#6366f1"}
                  />
                </g>
              ))}
            </g>

            {/* Circuit Paths */}
            <g className="circuit-paths">
              <path
                d="M50,220 C200,200 400,180 600,160 S800,140 1150,120"
                stroke="url(#circuit)"
                strokeWidth="1"
                fill="none"
                className="animate-pulse"
              />
            </g>
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-16 relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block chromatic-text rgb-glitch">Building the future</span>
              <span className="block text-emerald-400 rgb-glitch">where nature and</span>
              <span className="block text-purple-400 rgb-glitch">technology thrive.</span>
            </h1>
          </div>

          <p
            className={`text-xl md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed ${isDarkMode ? "text-slate-300" : "text-stone-600"}`}
          >
            Generative AI & software systems from the alpine edge.
          </p>

          <Button
            size="lg"
            className={`mossy-rock-button periodic-shimmer text-white px-8 py-4 text-lg font-semibold ${isDarkMode ? 'hover:text-emerald-200' : 'hover:text-emerald-50'}`}
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-32 px-6 h-[800px] relative ${isDarkMode ? "text-white" : "text-stone-800"}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 chromatic-text rgb-glitch">From the Alpine Edge</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className={isDarkMode ? "text-slate-300" : "text-stone-700"}>
                  Operating from high altitudes in the Italian Alps, I bridge the gap between cutting-edge AI technology
                  and sustainable, ethical development practices.
                </p>
                <p className={isDarkMode ? "text-slate-300" : "text-stone-700"}>
                  With deep expertise in generative AI, full-stack development, and open-source ecosystems, I help
                  organizations build the future responsibly—where innovation serves both in the short and long term.
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
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-[600px] sm:text-[600px] md:text-[600px] lg:text-[800px]">🏔️</div>
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
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${isDarkMode ? "opacity-30" : "opacity-100"}`}>
          <div className="cloud cloud-1">☁️</div>
          <div className="cloud cloud-2">☁️</div>
          <div className="cloud cloud-3">☁️</div>
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 chromatic-text rgb-glitch">
            Services & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                onClick={() => window.open(project.projectUrl, '_blank')}
              >
                <CardContent className="p-6 flex flex-col h-full">
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

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`px-3 py-1 ${isDarkMode ? "bg-slate-700/50 text-emerald-400" : "bg-stone-200 text-emerald-600"} text-sm rounded-full`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`mt-2 flex items-center hover:text-white transition-colors ${isDarkMode ? "text-slate-400" : "text-stone-500"}`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    <span className="text-sm">View on GitHub</span>
                  </a>
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
                <div className={`testimonial-card ${isDarkMode ? "bg-slate-800/30 border-slate-700/50" : "bg-white/80 border-stone-300"} backdrop-blur-sm border rounded-2xl p-8`}>
                  <blockquote
                    className={`text-xl md:text-2xl mb-6 leading-relaxed italic ${isDarkMode ? "text-slate-200" : "text-stone-800"}`}
                  >
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold text-emerald-600">{testimonial.author}</div>
                      <div className={isDarkMode ? "text-slate-400" : "text-stone-600"}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-32 px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 md:mb-32 chromatic-text rgb-glitch">Guiding Principles</h2>

          {/* Compass Animation Container */}
          <div className="relative h-[450px] sm:h-[500px] mb-8 md:mb-16">
            {/* Core Values */}
            {/* Left Value - Freedom & Independence */}
            <div className="absolute left-[5%] sm:left-0 top-1/2 -translate-y-1/2 transform sm:-translate-x-4 w-[30%] sm:w-auto group">
              <div className={`p-2 sm:p-6 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? "bg-slate-800/30 hover:bg-slate-800/50 border-slate-700/50" 
                  : "bg-white/70 hover:bg-white/90 border-stone-200"
              } border backdrop-blur-sm`}>
                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                  <div className={`p-2 sm:p-3 rounded-full ${isDarkMode ? "bg-emerald-900/30" : "bg-emerald-100"} group-hover:scale-110 transition-transform duration-300`}>
                    <Leaf className={`w-5 h-5 sm:w-8 sm:h-8 ${isDarkMode ? "text-emerald-300" : "text-emerald-700"}`} />
                  </div>
                  <p className={`text-sm sm:text-xl font-semibold ${isDarkMode ? "text-emerald-300" : "text-emerald-700"}`}>
                    Freedom & Independence
                  </p>
                </div>
              </div>
            </div>

            {/* Top Value - Open Source */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[5%] sm:top-0 transform sm:-translate-y-24 w-[30%] sm:w-auto group">
              <div className={`p-2 sm:p-6 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? "bg-slate-800/30 hover:bg-slate-800/50 border-slate-700/50" 
                  : "bg-white/70 hover:bg-white/90 border-stone-200"
              } border backdrop-blur-sm`}>
                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                  <div className={`p-2 sm:p-3 rounded-full ${isDarkMode ? "bg-purple-900/30" : "bg-purple-100"} group-hover:scale-110 transition-transform duration-300`}>
                    <Globe2 className={`w-5 h-5 sm:w-8 sm:h-8 ${isDarkMode ? "text-purple-300" : "text-purple-700"}`} />
                  </div>
                  <p className={`text-sm sm:text-xl font-semibold ${isDarkMode ? "text-purple-300" : "text-purple-700"}`}>
                    Open Source
                  </p>
                </div>
              </div>
            </div>

            {/* Right Value - Community Power */}
            <div className="absolute right-[5%] sm:right-0 top-1/2 -translate-y-1/2 transform sm:translate-x-4 w-[30%] sm:w-auto group">
              <div className={`p-2 sm:p-6 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? "bg-slate-800/30 hover:bg-slate-800/50 border-slate-700/50" 
                  : "bg-white/70 hover:bg-white/90 border-stone-200"
              } border backdrop-blur-sm`}>
                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                  <div className={`p-2 sm:p-3 rounded-full ${isDarkMode ? "bg-cyan-900/30" : "bg-cyan-100"} group-hover:scale-110 transition-transform duration-300`}>
                    <Heart className={`w-5 h-5 sm:w-8 sm:h-8 ${isDarkMode ? "text-cyan-300" : "text-cyan-700"}`} />
                  </div>
                  <p className={`text-sm sm:text-xl font-semibold ${isDarkMode ? "text-cyan-300" : "text-cyan-700"}`}>
                    Community Power
                  </p>
                </div>
              </div>
            </div>

            {/* Compass */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="text-[80px] sm:text-[200px] compass-container">🧭</div>
            </div>
          </div>

          <div
            className={`mt-8 md:mt-16 p-6 md:p-8 ${
              isDarkMode 
                ? "bg-gradient-to-r from-emerald-900/20 to-purple-900/20 border-slate-700/50" 
                : "bg-gradient-to-r from-emerald-50 to-purple-50 border-stone-200"
            } rounded-2xl backdrop-blur-sm border`}
          >
            <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? "text-slate-300" : "text-stone-700"}`}>
            Like the enduring stone paths 
              that have connected alpine villages for centuries, I aim to build software that stands the test of time—free from 
              artificial expiration dates or remote kill switches. Each project is an opportunity to contribute to digital freedom and develop systems that truly empower users. I believe that meaningful innovation grows best in environments 
              that encourage openness, collaboration, and technological independence.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes rotateCompass {
            0% {
              transform: rotate(-45deg) scale(1);
            }
            10% {
              transform: rotate(-45deg) scale(1);
            }
            25% {
              transform: rotate(45deg) scale(1);
            }
            35% {
              transform: rotate(45deg) scale(1);
            }
            50% {
              transform: rotate(135deg) scale(1);
            }
            60% {
              transform: rotate(135deg) scale(1);
            }
            75% {
              transform: rotate(45deg) scale(1);
            }
            85% {
              transform: rotate(45deg) scale(1);
            }
            100% {
              transform: rotate(-45deg) scale(1);
            }
          }

          .compass-container {
            animation: rotateCompass 18s cubic-bezier(0.68, -0.6, 0.32, 1.6) infinite;
            display: inline-block;
            transform-origin: center;
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 chromatic-text rgb-glitch">
            Let's Build Together
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`}>Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className={`${isDarkMode ? "bg-slate-800/50 border-slate-600 text-white placeholder-slate-400" : "bg-white/90 border-stone-300 text-stone-800 placeholder-stone-500"} backdrop-blur-sm`}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className={`${isDarkMode ? "bg-slate-800/50 border-slate-600 text-white placeholder-slate-400" : "bg-white/90 border-stone-300 text-stone-800 placeholder-stone-500"} backdrop-blur-sm`}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`${isDarkMode ? "bg-slate-800/50 border-slate-600 text-white placeholder-slate-400" : "bg-white/90 border-stone-300 text-stone-800 placeholder-stone-500"} backdrop-blur-sm`}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className={`w-5 h-5 mr-3 ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`} />
                  <span className={isDarkMode ? "text-white" : "text-stone-800"}>hello@nordwestt.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className={`w-5 h-5 mr-3 ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`} />
                  <span className={isDarkMode ? "text-white" : "text-stone-800"}>Operating from the Italian Alps</span>
                </div>
              </div>

              <div className={`mt-8 p-6 ${
                isDarkMode 
                  ? "bg-slate-800/30 border-slate-700/50" 
                  : "bg-white/90 border-stone-200"
              } rounded-xl border`}>
                <h4 className={`font-semibold mb-3 ${isDarkMode ? "text-cyan-400" : "text-cyan-600"}`}>Schedule a Consultation</h4>
                <p className={isDarkMode ? "text-slate-300" : "text-stone-700"} mb-4>Book a 30-minute discovery call to discuss your project needs.</p>
                <Button
                  variant="outline"
                  className={`mt-2 ${
                    isDarkMode 
                      ? "border-emerald-500 text-emerald-400 hover:bg-emerald-500" 
                      : "border-emerald-600 text-emerald-600 hover:bg-emerald-600"
                  } hover:text-white bg-transparent`}
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
            © 2025 NordWestT Consulting. Building the future from the alpine edge.
          </p>
        </div>
      </footer>
    </div>
  )
}
