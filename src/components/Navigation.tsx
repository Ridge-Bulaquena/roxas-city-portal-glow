
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [navItemsVisible, setNavItemsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', delay: 500 },
    { label: 'Services', delay: 1000 },
    { label: 'Transparency', delay: 1500 },
    { label: 'Projects', delay: 2000 },
    { label: 'News', delay: 2500 },
    { label: 'Contact', delay: 3000 }
  ];

  useEffect(() => {
    setLogoVisible(true);
    setTimeout(() => setNavItemsVisible(true), 500);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className={`flex items-center space-x-3 transition-all duration-600 ${
            logoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-chart-1 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <span className="font-playfair font-bold text-xl text-foreground">
              Roxas City Portal
            </span>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href="#"
                className={`text-foreground hover:text-primary transition-all duration-300 elastic-hover relative group ${
                  navItemsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ 
                  transitionDelay: navItemsVisible ? `${item.delay}ms` : '0ms'
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className={`hidden md:flex items-center space-x-4 transition-all duration-600 ${
            navItemsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`} style={{ transitionDelay: '3500ms' }}>
            <Button variant="ghost" className="elastic-hover rounded-full">
              Login
            </Button>
            <Button className="elastic-hover hover-glow rounded-full">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-full transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 pb-2 space-y-2">
                <Button variant="ghost" className="w-full rounded-full">
                  Login
                </Button>
                <Button className="w-full rounded-full">
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
