import * as React from "react"
import { ExternalLink, Github, Database, Server, Zap, Globe, Code2, Layers } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Backend API",
      description: "Comprehensive REST API for e-commerce platform with advanced features like inventory management, order processing, payment integration, and real-time notifications using modern Python frameworks.",
      technologies: ["Django", "PostgreSQL", "Redis", "Celery", "Stripe API", "Docker"],
      icon: Server,
      iconColor: "text-primary",
      features: [
        "RESTful API Design with OpenAPI documentation",
        "Stripe & PayPal payment processing integration", 
        "Real-time order status updates via WebSocket",
        "Microservices architecture for scalability",
        "Advanced inventory management system",
        "Comprehensive admin dashboard"
      ],
      github: "#",
      live: "#",
      status: "Production",
      users: "10K+ users"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management platform with user authentication, project management, real-time collaboration features, and detailed analytics dashboard for team productivity insights.",
      technologies: ["FastAPI", "MongoDB", "WebSocket", "Docker", "AWS", "React"],
      icon: Database,
      iconColor: "text-accent",
      features: [
        "Real-time collaboration with WebSocket",
        "Advanced user role management system",
        "Interactive analytics and reporting dashboard",
        "Cloud deployment with auto-scaling",
        "File upload and sharing capabilities",
        "Mobile-responsive progressive web app"
      ],
      github: "#",
      live: "#",
      status: "Active Development",
      users: "5K+ users"
    },
    {
      title: "Data Analytics Pipeline",
      description: "Automated data processing pipeline for handling large datasets, performing ETL operations, generating business intelligence reports, and providing real-time analytics insights.",
      technologies: ["Python", "Pandas", "PostgreSQL", "Apache Airflow", "AWS S3", "Grafana"],
      icon: Zap,
      iconColor: "text-neon-green",
      features: [
        "Automated ETL processing with Apache Airflow",
        "Interactive data visualization dashboards",
        "Automated report generation and scheduling",
        "Cloud storage integration with AWS S3",
        "Real-time data streaming capabilities",
        "Machine learning model integration"
      ],
      github: "#",
      live: "#",
      status: "Completed",
      users: "Enterprise"
    },
    {
      title: "Social Media API Gateway",
      description: "High-performance API gateway for social media platform handling millions of requests, with advanced caching, rate limiting, and microservices orchestration capabilities.",
      technologies: ["Django", "Redis", "Nginx", "Docker", "Kubernetes", "PostgreSQL"],
      icon: Globe,
      iconColor: "text-neon-purple",
      features: [
        "High-performance API gateway design",
        "Advanced rate limiting and throttling",
        "Microservices orchestration with Kubernetes",
        "Intelligent caching strategies with Redis",
        "Load balancing and auto-scaling",
        "Comprehensive monitoring and logging"
      ],
      github: "#",
      live: "#",
      status: "Production",
      users: "1M+ requests/day"
    },
    {
      title: "IoT Device Management",
      description: "Backend system for managing IoT devices, collecting sensor data, processing real-time metrics, and providing device control interfaces with advanced security features.",
      technologies: ["Python", "MQTT", "InfluxDB", "FastAPI", "Docker", "Grafana"],
      icon: Layers,
      iconColor: "text-neon-cyan",
      features: [
        "MQTT broker for device communication",
        "Time-series data storage with InfluxDB",
        "Real-time device monitoring and alerts",
        "Secure device authentication protocols",
        "Scalable data processing pipeline",
        "Interactive device control dashboard"
      ],
      github: "#",
      live: "#",
      status: "Beta",
      users: "Industrial"
    },
    {
      title: "Financial Trading Bot",
      description: "Algorithmic trading system with real-time market data processing, risk management, automated trading strategies, and comprehensive backtesting capabilities.",
      technologies: ["Python", "Django", "Redis", "PostgreSQL", "Celery", "TradingView"],
      icon: Code2,
      iconColor: "text-neon-blue",
      features: [
        "Real-time market data processing",
        "Advanced algorithmic trading strategies",
        "Comprehensive risk management system",
        "Historical data backtesting framework",
        "Portfolio performance analytics",
        "Integration with multiple exchanges"
      ],
      github: "#",
      live: "#",
      status: "Production",
      users: "Private"
    }
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
                          <span className="text-sm text-muted-foreground">{project.users}</span>
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

                <CardFooter className="flex gap-4 pt-6">
                  <Button 
                    variant="outline" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors border-gradient"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity glow"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Project Stats */}
          <div className="backdrop-glass rounded-3xl p-12 border-gradient-bright mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gradient">Project Impact</h2>
              <p className="text-xl text-muted-foreground">
                Real-world results from production applications
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "15+", label: "Projects Delivered", icon: Code2 },
                { value: "99.9%", label: "Uptime Average", icon: Server },
                { value: "1M+", label: "API Requests/Day", icon: Globe },
                { value: "50+", label: "Happy Clients", icon: Zap },
              ].map((stat, index) => (
                <div key={index} className="text-center backdrop-glass rounded-2xl p-6 border-gradient">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 glow">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center backdrop-glass rounded-3xl p-12 border-gradient-bright">
            <h3 className="text-3xl font-bold mb-6 text-gradient-alt">
              Interested in Working Together?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              I'm always excited to take on new challenges and build innovative solutions. 
              Let's discuss how I can help bring your project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity glow-intense px-8"
              >
                View All Projects
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gradient hover:bg-secondary/50 transition-colors px-8"
              >
                Get In Touch
                <Github className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects