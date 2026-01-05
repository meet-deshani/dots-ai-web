import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Linkedin, Github, Youtube, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo imgClassName="h-10 w-auto sm:h-12" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Problem Solving First • Outcome First — Zero Billing<br />
              Data Safeguard First
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/zeroone-dots-ai-consulting-697357392/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-card hover:bg-primary hover:text-white flex items-center justify-center transition-all hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/zeroone-dots-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-card hover:bg-primary hover:text-white flex items-center justify-center transition-all hover-lift"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCScJvjIwDIX5kIb7m4qLExA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-card hover:bg-primary hover:text-white flex items-center justify-center transition-all hover-lift"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold mb-4">AI Agents</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Data Agents
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Ops Agents
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Tech Agents
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Strategy Agents
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <a href="mailto:hello@zeroonedotsai.consulting" className="hover:text-foreground transition-colors">
                  hello@zeroonedotsai.consulting
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MessageCircle size={16} />
                <a
                  href="https://wa.me/918320065658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  +91 83200 65658
                </a>
              </li>
              <li>
                <Link to="/contact">
                  <button className="text-sm text-primary hover:text-primary-light font-medium transition-colors">
                    Schedule a Call →
                  </button>
                </Link>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-card text-xs text-muted-foreground">
              <span className="inline-flex items-center px-2 py-1 rounded bg-primary/10 text-primary font-semibold mb-2">
                Outcome First — Zero Billing
              </span>
              <p>Enterprise-grade security. Safe, responsible AI.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p className="mb-1">Made in India • Serving globally</p>
          <p className="text-xs mb-2">Problem Solving First • Outcome First — Zero Billing • Data Safeguard First</p>
          <p>© {currentYear} ZeroOne DOTS.ai. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
