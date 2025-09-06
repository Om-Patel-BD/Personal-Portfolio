import * as React from "react"
import { Github, Linkedin, Mail, Download, MessageCircle, Briefcase } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import omPatelPhoto from "@/assets/om-patel-photo.jpg"

const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-neon-cyan/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-neon-purple/15 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-neon-green/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Mobile/Tablet - Photo first, then content */}
            <div className="flex justify-center lg:hidden order-1 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl"></div>
                <div className="relative backdrop-glass rounded-2xl p-4 border border-border/50">
                  <img 
                    src={omPatelPhoto} 
                    alt="Om Patel - Backend Developer" 
                    className="w-64 h-80 sm:w-72 sm:h-88 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Hero content */}
            <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/50">
                  <span className="text-sm font-medium text-muted-foreground">Backend Developer</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="text-primary">Om Patel</span>
                </h1>
                
                <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
                  <span className="inline-block">Crafting robust </span>
                  <span className="text-primary font-semibold"> Python </span>
                  <span className="inline-block">  & </span>
                  <span className="text-primary font-semibold"> Django </span>
                  <span className="inline-block">  solutions</span>
                </div>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I design and build <span className="text-primary font-medium"> scalable backend systems </span> using Python and Django. My work focuses on creating <span className="text-foreground font-medium"> robust APIs and high-performance databases </span> that ensure smooth and reliable web applications. With clean coding practices and a focus on efficiency, I develop solutions that are secure, maintainable, and ready to scale with future growth.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/projects" className="w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto px-8 py-3 text-lg font-medium hover:scale-105 transition-all duration-300"
                  >
                    <Briefcase className="h-5 w-5 mr-2" />
                    View My Work
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto px-8 py-3 text-lg font-medium hover:scale-105 transition-all duration-300"
                >
                  <a
                     href="/resume.pdf"
                    download="Om_Patel_Resume.pdf"   // file name when downloaded
                    className="flex items-center"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                  </a>
                </Button>
                
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button 
                    variant="ghost" 
                    size="lg"
                    className="w-full sm:w-auto hover:text-primary transition-all duration-300 hover:scale-105 px-8 py-3 text-lg font-medium"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Get in Touch
                  </Button>
                </Link>
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
  <Button
    asChild
    variant="ghost"
    size="lg"
    className="hover:text-primary transition-all duration-300 hover:scale-110"
  >
    <a
      href="https://github.com/Om-Patel-BDz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="h-6 w-6" />
    </a>
  </Button>

  <Button
    asChild
    variant="ghost"
    size="lg"
    className="hover:text-accent transition-all duration-300 hover:scale-110"
  >
    <a
      href="https://www.linkedin.com/in/om-patel0309/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin className="h-6 w-6" />
    </a>
  </Button>

  <Button
    asChild
    variant="ghost"
    size="lg"
    className="hover:text-primary transition-all duration-300 hover:scale-110"
  >
    <a
      href="mailto:221260116035setiit@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Mail className="h-6 w-6" />
    </a>
  </Button>
</div>
            </div>

            {/* Desktop - Photo on right */}
            <div className="hidden lg:flex justify-end order-3 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl"></div>
                <div className="relative backdrop-glass rounded-2xl p-6 border border-border/50">
                  <img 
                    src={omPatelPhoto} 
                    alt="Om Patel - Backend Developer" 
                    className="w-80 h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home