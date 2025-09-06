import * as React from "react"
import { 
  Code2, 
  Database, 
  Server, 
  Cloud, 
  Terminal, 
  GitBranch,
  Settings,
  Shield,
  Zap,
  Globe,
  Monitor,
  Cylinder,
  Wrench,
  SquareTerminal,
  Gitlab,
  GitCommit 
} from "lucide-react"
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiMongodb, SiMysql, SiSqlite } from "react-icons/si";

import { Card, CardContent } from "@/components/ui/card"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      color: "text-neon-cyan",
      skills: [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Javascript", icon: FaReact },   
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "React.js", icon: FaReact },
]
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-neon-purple",
      skills: [
        { name: "Python", icon: FaPython },
        { name: "Django", icon: SiDjango },
        { name: "Node.js", icon: FaNodeJs },
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-neon-green",
      skills: [
        { name: "SQLite", icon: SiSqlite },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "text-neon-blue",
      skills: [
        { name: "Git", icon: GitCommit },
        { name: "VSCode", icon: Code2 },
        { name: "Github", icon: Gitlab },
      ]
    }
  ]

  const expertiseAreas = [
    {
    icon: Server,
    title: "Backend Development",
    description: "Building applications with Python, Django, and Node.js",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Designing and working with MySQL, SQLite, and MongoDB",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Zap,
    title: "Web Development",
    description: "Creating responsive UIs with React, HTML, CSS, and Bootstrap",
    color: "text-neon-green",
    bgColor: "bg-neon-green/10"
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Collaborating using Git, GitHub, and modern workflows",
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10"
  }
  ]

  const SkillBar = ({ skill }: { skill: { name: string; icon: any } }) => (
  <div className="flex items-center gap-4 py-2 px-3 rounded-lg border border-transparent hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
    <skill.icon className="h-7 w-7 text-primary transition-colors duration-300" />
    <span className="font-medium text-foreground text-lg">{skill.name}</span>
  </div>
)

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-48 h-48 bg-neon-cyan/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-neon-purple/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-neon-green/8 rounded-full blur-xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 border-gradient rounded-full bg-gradient-creative mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Technical Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              My <span className="text-gradient-alt">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              My expertise spans across modern backend technologies, 
              databases, cloud infrastructure, and development tools.
            </p>
          </div>

          {/* Expertise Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {expertiseAreas.map((area, index) => (
              <Card 
                key={index}
                className="backdrop-glass border-gradient-bright hover:scale-105 transition-all duration-300 group text-center"
              >
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${area.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform glow`}>
                    <area.icon className={`h-8 w-8 ${area.color}`} />
                  </div>
                  <h3 className={`font-bold text-lg mb-3 ${area.color}`}>{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="backdrop-glass border-gradient-bright hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors glow">
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar key={skillIndex} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills