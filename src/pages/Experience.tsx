import * as React from "react"
import { Calendar, MapPin, Building, Award, TrendingUp, Users, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const Experience = () => {
  const experiences = [
    {
      position: "Senior Backend Developer",
      company: "TechCorp Solutions",
      companyType: "Enterprise Software",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Lead backend development for enterprise applications serving 100K+ users. Architected microservices infrastructure and implemented robust API solutions with focus on scalability and performance.",
      achievements: [
        "Reduced API response time by 60% through database optimization and caching strategies",
        "Led migration from monolithic to microservices architecture, improving system scalability",
        "Mentored 5+ junior developers and established team coding standards and best practices",
        "Implemented CI/CD pipelines reducing deployment time by 80% and improving reliability",
        "Designed and built real-time notification system handling 1M+ daily messages",
        "Collaborated with DevOps team to improve infrastructure monitoring and alerting"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Docker", "AWS", "Redis", "Kubernetes"],
      highlights: {
        teamSize: "12 developers",
        budget: "$2M+ projects",
        impact: "100K+ users"
      }
    },
    {
      position: "Backend Developer",
      company: "StartupX",
      companyType: "SaaS Startup",
      location: "Remote",
      duration: "2020 - 2022",
      type: "Full-time",
      description: "Developed scalable backend systems for a growing SaaS platform. Built RESTful APIs, integrated third-party services, and optimized database performance for rapid user growth.",
      achievements: [
        "Built core API infrastructure from scratch supporting 10K+ concurrent users",
        "Integrated payment systems (Stripe, PayPal) and webhook processing for billing",
        "Optimized database queries reducing average response time from 2s to 200ms",
        "Implemented automated testing pipeline achieving 95% code coverage",
        "Designed data analytics pipeline processing 500GB+ daily data",
        "Contributed to product architecture decisions and technical roadmap planning"
      ],
      technologies: ["Python", "FastAPI", "MongoDB", "Docker", "GCP", "Redis", "Celery"],
      highlights: {
        teamSize: "8 developers",
        budget: "$500K+ projects",
        impact: "10K+ users"
      }
    },
    {
      position: "Junior Python Developer",
      company: "CodeFirst Agency",
      companyType: "Digital Agency",
      location: "New York, NY",
      duration: "2018 - 2020",
      type: "Full-time",
      description: "Started career developing web applications and learning best practices in software development. Worked on diverse client projects ranging from e-commerce to content management systems.",
      achievements: [
        "Contributed to 15+ client projects across various industries and technologies",
        "Learned Django framework and implemented best practices for scalable applications",
        "Collaborated with frontend teams to design and implement robust API interfaces",
        "Participated in agile development processes and regular code reviews",
        "Developed automated backup and deployment scripts improving team efficiency",
        "Gained expertise in database design and optimization techniques"
      ],
      technologies: ["Python", "Django", "MySQL", "Git", "Linux", "jQuery"],
      highlights: {
        teamSize: "5 developers",
        budget: "$100K+ projects",
        impact: "20+ clients"
      }
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️"
    },
    {
      name: "Python Professional Certification",
      issuer: "Python Institute",
      year: "2022",
      icon: "🐍"
    },
    {
      name: "Docker Certified Associate",
      issuer: "Docker Inc.",
      year: "2021",
      icon: "🐳"
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-40 h-40 bg-neon-cyan/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-16 w-48 h-48 bg-neon-purple/6 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-2/3 left-1/2 w-32 h-32 bg-neon-green/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 border-gradient rounded-full bg-gradient-creative mb-6">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Career Journey</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Work <span className="text-gradient-alt">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              My professional journey in backend development, 
              building scalable solutions and leading technical initiatives.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12 mb-20">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="backdrop-glass border-gradient-bright hover:scale-[1.01] transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left column - Basic info */}
                    <div className="lg:col-span-1">
                      <div className="backdrop-glass rounded-2xl p-6 border-gradient h-fit">
                        <h3 className="text-2xl font-bold mb-3 text-gradient">{exp.position}</h3>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary" />
                            <div>
                              <p className="font-medium text-foreground">{exp.company}</p>
                              <p className="text-sm text-muted-foreground">{exp.companyType}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs ml-2">
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary text-sm">Project Highlights</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Team Size</span>
                              <span className="text-sm font-medium">{exp.highlights.teamSize}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Project Budget</span>
                              <span className="text-sm font-medium">{exp.highlights.budget}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Impact</span>
                              <span className="text-sm font-medium">{exp.highlights.impact}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right column - Details */}
                    <div className="lg:col-span-2 space-y-8">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gradient-alt">Role Overview</h4>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {exp.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-6 text-primary">Key Achievements</h4>
                        <div className="grid gap-4">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-3 backdrop-glass rounded-xl p-4 border-gradient group-hover:border-gradient-bright transition-all">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 glow flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4 text-accent">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-4 py-2 backdrop-glass rounded-full text-sm font-medium border border-border/40 hover:border-primary/40 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="backdrop-glass rounded-3xl p-12 border-gradient-bright mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gradient">Certifications</h2>
              <p className="text-xl text-muted-foreground">
                Professional certifications and achievements
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="backdrop-glass rounded-2xl p-8 border-gradient hover:scale-105 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-gradient">{cert.name}</h3>
                  <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-sm text-primary font-medium">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Stats */}
          <div className="backdrop-glass rounded-3xl p-12 border-gradient-bright">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gradient-alt">Career Impact</h2>
              <p className="text-xl text-muted-foreground">
                Measurable results from my professional journey
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: TrendingUp, value: "5+", label: "Years Experience", color: "text-primary" },
                { icon: Building, value: "3", label: "Companies", color: "text-accent" },
                { icon: Users, value: "100K+", label: "Users Served", color: "text-neon-green" },
                { icon: Target, value: "50+", label: "Projects Delivered", color: "text-neon-purple" },
              ].map((stat, index) => (
                <div key={index} className="text-center backdrop-glass rounded-2xl p-6 border-gradient hover:scale-105 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 glow`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience