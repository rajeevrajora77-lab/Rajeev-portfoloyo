import { Cpu, Heart, Github, Linkedin, Mail, Globe, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/rajeevrajora77-lab', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rajeev-kumar-943b6a137/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:rajeev.rajora.77@gmail.com', label: 'Email' },
  { icon: Globe, href: 'https://rajora.co.in', label: 'Website' },
];

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-muted py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-6 h-6" />
              <span className="text-xl font-bold">Er Rajeev Kumar</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI/ML Engineer specializing in MLOps, GenAI Systems, and Cloud Infrastructure
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-accent rounded-md transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Er Rajeev Kumar. Built with <Heart className="inline w-4 h-4 text-red-500" /> and cutting-edge tech.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}