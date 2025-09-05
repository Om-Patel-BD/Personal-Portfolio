import * as React from "react"
import { Code2, Database, Server, Zap, Heart, Target, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, efficient Python code following best practices and SOLID principles"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Expert in SQL optimization, database architecture, and performance tuning"
    },
    {
      icon: Server,
      title: "API Development",
      description: "Building RESTful APIs and microservices with Django and FastAPI"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing backend systems for scalability, speed, and reliability"
    }
  ]

  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Target, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Heart, label: "Lines of Code", value: "100K+" },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-neon-cyan/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-neon-purple/8 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 border-gradient rounded-full bg-gradient-creative mb-6">
              <span className="text-sm font-medium">🚀 About Me</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              About <span className="text-gradient-alt">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate backend developer with expertise in Python and Django, 
              focused on creating robust, scalable solutions that drive business success.
            </p>
          </div>


          {/* My Story Section */}
          <div className="backdrop-glass rounded-2xl p-8 mb-12 border-gradient">
            <h2 className="text-3xl font-bold mb-6 text-gradient">My Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over 5 years of experience in backend development, I specialize in building 
                high-performance web applications using <span className="text-primary font-semibold">Python and Django</span>. 
                My passion lies in creating clean, efficient code that solves real-world problems.
              </p>
              <p>
                I have extensive experience with database design, API development, 
                system architecture, and cloud deployment. I believe in writing code 
                that is not only functional but also <span className="text-accent font-semibold">maintainable and scalable</span>.
              </p>
              <p>
                My approach combines technical expertise with business understanding, 
                ensuring that every solution I build contributes meaningfully to 
                organizational goals and user satisfaction.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="backdrop-glass rounded-2xl p-8 mb-12 border-gradient">
            <h3 className="text-3xl font-bold mb-6 text-gradient-alt">Education</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">Bachelor of Computer Science</h4>
                <p className="text-accent font-medium mb-2">University of Technology</p>
                <p className="text-muted-foreground">2016 - 2020</p>
                <p className="text-muted-foreground mt-2">
                  Specialized in software engineering with focus on backend systems, database management, 
                  and distributed computing. Graduated with honors.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Philosophy Section */}
          <div className="backdrop-glass rounded-2xl p-8 mb-12 border-gradient">
            <h3 className="text-3xl font-bold mb-6 text-gradient-alt">Tech Philosophy</h3>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 glow"></div>
                <span><strong className="text-foreground">Simplicity:</strong> Complex problems deserve elegant, simple solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 glow"></div>
                <span><strong className="text-foreground">Performance:</strong> Every millisecond matters in user experience</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neon-green rounded-full mt-3 glow"></div>
                <span><strong className="text-foreground">Scalability:</strong> Build for today, plan for tomorrow</span>
              </li>
            </ul>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="backdrop-glass border-gradient-bright hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors glow-intense">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3 text-gradient">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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

export default About