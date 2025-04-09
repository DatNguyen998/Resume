"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, User, Briefcase, GraduationCap, Layers, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

const sections = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "projects", label: "Projects", icon: List },
]

export default function PortfolioPage() {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry && entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Icon Navigation on the right */}
      <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center space-y-4 bg-gray-800 p-4 rounded-2xl shadow-md z-10">
        {sections.map(({ id, label, icon: Icon }) => (
          <div className="group relative" key={id}>
            <a
              href={`#${id}`}
              className={`p-2 rounded-full transition-colors ${
                activeId === id ? "bg-[#c4a48e] text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <Icon size={20} />
            </a>
            <span className="absolute right-10 top-1/2 -translate-y-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </nav>

      <main className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Profile */}
          <section id="about" className="scroll-mt-24 pt-20">
            <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-xl shadow">
              <div className="flex-1">
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Introduce</p>
                <h1 className="text-4xl font-bold leading-tight mb-4">
                  Streamlining Processes
                  <br /> <span className="text-[#c4a48e]">with ERP Systems</span>
                </h1>
                <p className="text-gray-300">
                 Self-motivated <strong>Business Analyst</strong> with over 3 years of experience in business analysis, research, and
content validation. Native Vietnamese speaker with excellent reading and writing comprehension.
Skilled in interpreting, summarizing, and evaluating complex content. Proven ability to work
independently in hybrid, cross-functional environments
                </p>
                <div className="flex gap-4 mt-6 text-sm text-gray-300">
                  <span>✅ Available for work</span>
                  <span>✅ Full Time Job</span>
                </div>

                {/* Social Media Buttons */}
                <div className="flex gap-3 mt-6">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full bg-gray-700 hover:bg-gray-600 border-gray-600"
                    href="https://github.com/username"
                    target="_blank"
                  >
                    <Github size={18} />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full bg-gray-700 hover:bg-gray-600 border-gray-600"
                    href="https://linkedin.com/in/username"
                    target="_blank"
                  >
                    <Linkedin size={18} />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full bg-gray-700 hover:bg-gray-600 border-gray-600"
                    href="mailto:email@example.com"
                  >
                    <Mail size={18} />
                  </Button>
                </div>
              </div>
              <div className="w-48 h-60 relative rounded-xl overflow-hidden border-4 border-[#c4a48e] ml-6 mt-6 md:mt-0">
                <Image src="/avatar-ghibli.png?height=300&width=300" alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="pt-32 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <h3 className="font-semibold">Senior Business Analyst – Fintech Co.</h3>
                <p className="text-sm">2022 - Present</p>
                <p>Leading product requirements, writing BRD/FRD, managing stakeholders.</p>
              </li>
              <li>
                <h3 className="font-semibold">Business Analyst – ERP System</h3>
                <p className="text-sm">2020 - 2022</p>
                <p>Gathered requirements, collaborated with dev team, conducted UAT testing.</p>
              </li>
            </ul>
          </section>

          {/* Education */}
          <section id="education" className="pt-32 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <h3 className="font-semibold">Bachelor of Information Systems</h3>
                <p className="text-sm">University of Economics, 2016 - 2020</p>
                <p>Focus: Business Analysis, System Design, Project Management.</p>
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section id="skills" className="pt-32 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              <li>BPMN 2.0</li>
              <li>UML</li>
              <li>FRD / BRD</li>
              <li>SQL</li>
              <li>Workday</li>
              <li>Jira / Confluence</li>
            </ul>
          </section>

          {/* Projects */}
          <section id="projects" className="pt-32 scroll-mt-24 pb-20">
            <h2 className="text-2xl font-bold mb-8">My Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="Xetta Payment System"
                description="Payment platform system & transaction management management"
                image="/placeholder.svg?height=300&width=500"
                tags={[".Net", "FRD", "BRD", "BPMN 2.0", "Workday"]}
                link="/project/xetta-system"
              />

              <ProjectCard
                title="E-commerce Platform"
                description="Full-stack e-commerce solution with payment integration"
                image="/placeholder.svg?height=300&width=500"
                tags={["Next.js", "Stripe", "Tailwind"]}
                link="/project/ecommerce"
              />

              <ProjectCard
                title="Analytics Dashboard"
                description="Real-time data visualization and reporting tool"
                image="/placeholder.svg?height=300&width=500"
                tags={["Vue.js", "D3.js", "Firebase"]}
                link="/project/analytics"
              />

              <ProjectCard
                title="Mobile App"
                description="Cross-platform mobile application for task management"
                image="/placeholder.svg?height=300&width=500"
                tags={["React Native", "Redux", "AWS"]}
                link="/project/mobile-app"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
