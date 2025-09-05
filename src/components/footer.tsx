import * as React from "react"
import { Heart, ArrowUp } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © "2025" Om Patel.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-sm text-muted-foreground">
                Backend Developer • Python • Django
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={scrollToTop}
                className="hover:text-primary transition-colors"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border/20 text-center">
            <div className="text-sm text-muted-foreground">
              Interested in working together?{" "}
              <Link 
                to="/contact" 
                className="text-primary hover:underline font-medium"
              >
                Let's get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer