import * as React from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "om.patel@email.com",
      href: "mailto:om.patel@email.com",
      description: "Best way to reach me for projects"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Available during business hours"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      description: "Open to remote opportunities"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ompatel",
      username: "@ompatel",
      description: "Check out my open source projects",
      color: "hover:text-neon-cyan"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ompatel",
      username: "/in/ompatel",
      description: "Professional network and experience",
      color: "hover:text-neon-blue"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/ompatel",
      username: "@ompatel",
      description: "Tech thoughts and industry insights",
      color: "hover:text-neon-purple"
    }
  ]

  const availabilityStatus = {
    status: "Available",
    message: "Currently accepting new projects",
    responseTime: "Within 24 hours",
    color: "text-neon-green"
  }

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-48 h-48 bg-neon-cyan/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-16 w-40 h-40 bg-neon-purple/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-neon-green/8 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 border-gradient rounded-full bg-gradient-creative mb-6">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Let's Connect</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Get In <span className="text-gradient-alt">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Ready to discuss your next project? Let's build something amazing together. 
              I'm always excited to work on innovative backend solutions.
            </p>
          </div>

          {/* Availability Status */}
          <div className="backdrop-glass rounded-2xl p-8 border-gradient-bright mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse glow"></div>
              <span className={`font-semibold text-lg ${availabilityStatus.color}`}>
                {availabilityStatus.status}
              </span>
            </div>
            <p className="text-muted-foreground mb-2">{availabilityStatus.message}</p>
            <p className="text-sm text-muted-foreground">
              Response time: <span className="text-primary font-medium">{availabilityStatus.responseTime}</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="backdrop-glass rounded-3xl p-8 border-gradient">
                <h2 className="text-3xl font-bold mb-8 text-gradient">Let's Connect</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  I'm always interested in discussing new opportunities, 
                  challenging projects, and innovative ideas. Whether you're 
                  looking for a backend developer or want to collaborate on 
                  something exciting, I'd love to hear from you.
                </p>

                <div className="space-y-6">
                  <h3 className="font-semibold text-xl text-primary">What I can help with:</h3>
                  <ul className="space-y-3">
                    {[
                      "Backend API development and architecture",
                      "Database design and optimization",
                      "System integration and microservices",
                      "Performance optimization and scaling",
                      "Code review and technical consulting"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 glow"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block backdrop-glass rounded-2xl p-6 border-gradient hover:border-gradient-bright transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors glow">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-lg">{item.label}</h3>
                        </div>
                        <p className="text-muted-foreground mb-1">{item.value}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="backdrop-glass rounded-3xl p-8 border-gradient">
                <h3 className="font-bold text-xl mb-6 text-gradient-alt">Follow My Work</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl backdrop-glass border-gradient hover:border-gradient-bright transition-all duration-300 group ${social.color}`}
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors glow">
                        <social.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{social.label}</h4>
                          <span className="text-sm text-muted-foreground">{social.username}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="backdrop-glass border-gradient-bright h-fit">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <Send className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold text-gradient">Send a Message</h2>
                </div>
                
                <form className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-3 text-foreground">First Name</label>
                      <Input 
                        placeholder="John" 
                        className="backdrop-glass border-gradient focus:border-gradient-bright"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-3 text-foreground">Last Name</label>
                      <Input 
                        placeholder="Doe" 
                        className="backdrop-glass border-gradient focus:border-gradient-bright"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3 text-foreground">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="backdrop-glass border-gradient focus:border-gradient-bright"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3 text-foreground">Project Type</label>
                    <Input 
                      placeholder="e.g., API Development, Database Design, Full Backend" 
                      className="backdrop-glass border-gradient focus:border-gradient-bright"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3 text-foreground">Project Details</label>
                    <Textarea 
                      placeholder="Tell me about your project, timeline, requirements, and any specific technologies you'd like to use..." 
                      rows={6}
                      className="backdrop-glass border-gradient focus:border-gradient-bright resize-none"
                    />
                  </div>

                  <div className="backdrop-glass rounded-xl p-4 border-gradient">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-1">Project Timeline</h4>
                        <p className="text-sm text-muted-foreground">
                          I typically respond within 24 hours and can start most projects within 1-2 weeks.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary via-accent to-neon-purple hover:opacity-90 transition-opacity glow-intense text-lg py-6"
                  >
                    <Send className="h-5 w-5 mr-3" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border/20 text-center">
                  <p className="text-sm text-muted-foreground">
                    Prefer email? Reach me directly at{" "}
                    <a 
                      href="mailto:om.patel@email.com" 
                      className="text-primary hover:underline font-medium"
                    >
                      om.patel@email.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact