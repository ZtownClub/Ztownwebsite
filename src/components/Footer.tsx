import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import ZTownLogo from "@/components/ZTownLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start md:items-center">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <ZTownLogo size="sm" />
              <span className="text-2xl font-bold">
                <span className="text-[#8b9c6d] dark:text-primary">zTown</span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground text-center md:text-left max-w-xs">
              India's first hyperlocal fashion delivery platform bringing your favorite brands to your doorstep in minutes.
            </p>
          </div>

          {/* Navigation Links & Social */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-[#8b9c6d] dark:hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/partner" className="hover:text-[#8b9c6d] dark:hover:text-primary transition-colors">
                Partner
              </Link>
              <Link to="/about" className="hover:text-[#8b9c6d] dark:hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-[#8b9c6d] dark:hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/ztown-club/" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#8b9c6d]/10 dark:bg-primary/10 hover:bg-[#8b9c6d]/20 dark:hover:bg-primary/20 flex items-center justify-center text-[#8b9c6d] dark:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ztown.club/" // Replace with your Instagram URL
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#8b9c6d]/10 dark:bg-primary/10 hover:bg-[#8b9c6d]/20 dark:hover:bg-primary/20 flex items-center justify-center text-[#8b9c6d] dark:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Location & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <p className="text-xs text-muted-foreground/70">
              Coming soon in Gurugram, India
            </p>
            <p className="text-sm text-muted-foreground">
              © 2026 zTown. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;