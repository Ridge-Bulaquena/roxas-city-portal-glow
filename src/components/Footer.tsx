import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: ["Health Services", "Education", "Business Permits", "Public Works"]
    },
    {
      title: "Transparency",
      links: ["Budget Reports", "Project Status", "Public Data", "Governance"]
    },
    {
      title: "Community",
      links: ["Participate", "Feedback", "Events", "News"]
    },
    {
      title: "Support",
      links: ["Contact Us", "Help Center", "FAQ", "Accessibility"]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground text-primary rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">R</span>
              </div>
              <span className="font-playfair font-bold text-xl">
                Roxas City Portal
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering citizens through transparency, participation, and accessible public services.
            </p>
            <Button 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Get Updates
            </Button>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-lg font-playfair">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 elastic-hover"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60">
              © {currentYear} Roxas City Government. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200">
                Contact
              </a>
              <a href="/visitor" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200">
                Visitor Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
