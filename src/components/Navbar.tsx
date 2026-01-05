import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ZTownLogo from "@/components/ZTownLogo";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Partner With Us", path: "/partner" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#f5f1e8]/90 dark:bg-background/80 backdrop-blur-xl border-b border-[#8b9c6d]/20 dark:border-border/50 py-4 shadow-lg"
          : "bg-gradient-to-b from-[#f5f1e8]/60 to-transparent dark:from-background/40 dark:to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
  <ZTownLogo size="md" /> {/* Changed from "sm" to "md" */}
  <span className="text-3xl md:text-4xl font-bold tracking-tight"> {/* Changed from text-2xl md:text-3xl */}
    <span className="text-[#8b9c6d] dark:text-primary">zTown</span>
  </span>
</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link text-sm font-medium transition-colors ${
                isActive(link.path) 
                  ? "text-[#8b9c6d] dark:text-primary" 
                  : "text-[#4a5a3a] dark:text-muted-foreground hover:text-[#8b9c6d] dark:hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#4a5a3a] dark:text-foreground hover:text-[#8b9c6d] dark:hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#f5f1e8]/95 dark:bg-background/95 backdrop-blur-xl border-b border-[#8b9c6d]/20 dark:border-border animate-fade-up shadow-lg">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 transition-colors ${
                  isActive(link.path) 
                    ? "text-[#8b9c6d] dark:text-primary" 
                    : "text-[#6b6b6b] dark:text-muted-foreground hover:text-[#8b9c6d] dark:hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;