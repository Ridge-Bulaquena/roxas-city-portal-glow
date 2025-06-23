
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [navItemsVisible, setNavItemsVisible] = useState(false);

  const navItems = [
    { label: 'Health', delay: 500 },
    { label: 'Education', delay: 1000 },
    { label: 'Welfare', delay: 1500 },
    { label: 'Transparency', delay: 2000 },
    { label: 'Infrastructure', delay: 2500 },
    { label: 'Environment', delay: 3000 },
    { label: 'Participation', delay: 3500 },
    { label: 'Open Data', delay: 4000 }
  ];

  useEffect(() => {
    setLogoVisible(true);
    setTimeout(() => setNavItemsVisible(true), 500);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
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

          {/* Navigation Items */}
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

          {/* Auth Buttons */}
          <div className={`flex items-center space-x-4 transition-all duration-600 ${
            navItemsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`} style={{ transitionDelay: '4500ms' }}>
            <Button variant="ghost" className="elastic-hover">
              Login
            </Button>
            <Button className="elastic-hover hover-glow">
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
