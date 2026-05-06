import * as React from "react"
import { ExternalLink, Github, Database, Server, Zap, Globe, Code2, Layers } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const Projects = () => {
  const projects = [

        {
      title: "EduSphere - Smart Academic Intelligence",
  description: "A full-stack Educational Management System that allows Admins, Teachers, and Students to manage academic activities efficiently. The platform provides secure role-based access, attendance management, assignment handling, and student-teacher data management through dedicated dashboards. Built using modern web technologies, the system offers a secure and user-friendly environment for educational operations.  ",
  technologies: ["Python", "Django", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
  icon: Server,
  iconColor: "text-primary",
  features: [
    "User authentication with login & signup",
    "Separate dashboards for Admin, Teacher, and Student",
    "Attendance & Marks management and tracking system",
    "Assignment creation and submission handling",
    "Student and teacher data management",
    "Responsive and user-friendly interface"
  ],
  github: "#",
  live: "#",
  status: "Production"
    },
    {
      title: "Personal Portfolio",
  description: "A personal portfolio website developed using Django. It showcases my technical skills, completed projects, and professional experience in a structured and user-friendly manner. Designed to act as a digital resume supporting both academic and professional growth.",
  technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "JSON", "Bootstrap"],
  icon: Server,
  iconColor: "text-primary",
  features: [
    "Responsive and user-friendly design",
    "Showcases technical skills and completed projects",
    "Integrated professional experience section",
    "Digital resume format for academic and career growth",
    "Dynamic data rendering using Django and JSON",
    "Bootstrap-based UI for clean styling"
  ],
  github: "#",
  live: "#",
  status: "Completed" 
    },
    {
      title: "FooteeZ - E-Commerce Website",
  description: "FooteeZ is a fully functional e-commerce platform for shoes, featuring collections for men, women, and unisex categories. The platform provides user-friendly shopping experiences with authentication, cart management, secure payments, and profile handling.",
  technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite"],
  icon: Server,
  iconColor: "text-primary",
  features: [
    "User authentication system with login & signup",
    "Product catalog with categories for men, women, and unisex",
    "Add to cart, remove from cart, and update cart functionality",
    "Razorpay payment gateway integration for secure transactions",
    "User profile management with order history and details",
    "Responsive UI with Bootstrap for smooth browsing experience"
  ],
  github: "#",
  live: "#",
  status: "Production"
    },
    {
      title: "Email Management System",
  description: "An Email Management System that allows users to register, log in, and send emails through a simple and secure interface. Designed with user authentication and email sending functionality, the system demonstrates backend integration and database management.",
  technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
  icon: Server,
  iconColor: "text-primary",
  features: [
    "User authentication with login & signup functionality",
    "Secure storage of user credentials with MySQL database",
    "Email sending feature with recipient, subject, and message",
    "User-friendly interface for composing and sending emails",
    "Validation for email input fields to ensure reliability",
    "Responsive frontend built with Bootstrap"
  ],
  github: "#",
  live: "#",
  status: "Completed"
    },   
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-neon-green/20 text-neon-green border-neon-green/30"
      case "Active Development": return "bg-neon-blue/20 text-neon-blue border-neon-blue/30"
      case "Beta": return "bg-neon-purple/20 text-neon-purple border-neon-purple/30"
      case "Completed": return "bg-accent/20 text-accent border-accent/30"
      default: return "bg-muted/20 text-muted-foreground border-muted/30"
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-40 h-40 bg-neon-cyan/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-neon-purple/6 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-neon-green/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 border-gradient rounded-full bg-gradient-creative mb-6">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Portfolio Showcase</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Featured <span className="text-gradient-alt">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Here are some of my recent backend projects showcasing 
              scalable architectures, clean code implementation, and innovative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="backdrop-glass border-gradient-bright hover:scale-[1.02] transition-all duration-300 group overflow-hidden"
              >
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors glow`}>
                        <project.icon className={`h-7 w-7 ${project.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gradient">{project.title}</h3>
                        <div className="flex items-center gap-3 mt-2">
                          <Badge className={`text-xs px-3 py-1 border ${getStatusColor(project.status)}`}>
                            {project.status}
                          </Badge>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary text-lg">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 backdrop-glass rounded-lg p-3 border-gradient">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 glow flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-accent">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs bg-secondary/70 hover:bg-secondary transition-colors backdrop-glass border border-border/40"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default Projects