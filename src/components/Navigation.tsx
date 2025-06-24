import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  BarChart3,
  Vote,
  Building2,
  Info,
  Heart,
  GraduationCap,
  Users,
  Wrench,
  TrendingUp,
  Building,
  Activity,
  ShoppingBag,
  FileText,
  MessageSquare,
  Calendar,
  Store,
  MapPin,
  Phone,
  Clock
} from "lucide-react";

interface NavigationProps {
  userType: 'resident' | 'official' | 'visitor';
  setUserType: (type: 'resident' | 'official' | 'visitor') => void;
}

export const Navigation = ({ userType, setUserType }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = 0;
    const delta = 20;
    const topBarHeight = 50;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      // Check if we've scrolled past the delta threshold
      if (Math.abs(currentScrollY - lastScrollY) <= delta) return;
      
      // Determine scroll direction and update nav visibility
      if (currentScrollY > lastScrollY && currentScrollY > topBarHeight) {
        // Scrolling down - hide nav
        setIsNavVisible(false);
      } else {
        // Scrolling up - show nav
        setIsNavVisible(true);
      }
      
      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 20);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync userType to localStorage
  useEffect(() => {
    localStorage.setItem('userType', userType);
  }, [userType]);

  const handleMouseEnter = (itemId: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before hiding
    setHoverTimeout(timeout);
  };

  const navItems = [
    {
      id: 'services',
      title: 'Public Services',
      tooltip: 'Access vital local programs.',
      items: [
        {
          title: 'Health Services',
          desc: 'Clinics, emergency care, health programs',
          icon: Heart,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png',
          route: '/apps/health',
        },
        {
          title: 'Education Support',
          desc: 'Schools, scholarships, student assistance',
          icon: GraduationCap,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png',
          route: '/apps/education',
        },
        {
          title: 'Social Welfare',
          desc: 'PWD support, senior care, livelihood programs',
          icon: Users,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png',
          route: '/apps/social-welfare',
        },
        {
          title: 'Public Works',
          desc: 'Infrastructure, road repairs, utilities',
          icon: Wrench,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png',
          route: '/apps/public-works',
        }
      ]
    },
    {
      id: 'transparency',
      title: 'Transparency & Data',
      tooltip: 'See how government works.',
      items: [
        {
          title: 'Budget Dashboard',
          desc: 'Track spending and allocations',
          icon: TrendingUp,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        },
        {
          title: 'Infrastructure Timeline',
          desc: 'Project progress and updates',
          icon: Building,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        },
        {
          title: 'Performance KPIs',
          desc: 'City metrics and achievements',
          icon: Activity,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        },
        {
          title: 'Procurement Logs',
          desc: 'Contract and bidding transparency',
          icon: FileText,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        }
      ]
    },
    {
      id: 'participation',
      title: 'Participation',
      tooltip: 'Engage in real governance.',
      items: [
        {
          title: 'Complaint System',
          desc: 'File and track complaints',
          icon: MessageSquare,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        },
        {
          title: 'Budget Voting',
          desc: 'Participatory budget allocation',
          icon: Vote,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        },
        {
          title: 'Digital Town Hall',
          desc: 'Community meetings and Q&A',
          icon: Users,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        },
        {
          title: 'Community Polls',
          desc: 'Voice your opinion on city matters',
          icon: BarChart3,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        }
      ]
    },
    {
      id: 'business',
      title: 'Business & Tourism',
      tooltip: 'Opportunities await.',
      items: [
        {
          title: 'MSME Hub',
          desc: 'Small business support and resources',
          icon: Store,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        },
        {
          title: 'Business Tools',
          desc: 'Permits, licensing, guidance',
          icon: ShoppingBag,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        },
        {
          title: 'Culture Portal',
          desc: 'Heritage sites and local culture',
          icon: MapPin,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        },
        {
          title: 'Events Calendar',
          desc: 'Festivals, markets, community events',
          icon: Calendar,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        }
      ]
    },
    {
      id: 'about',
      title: 'About the City',
      tooltip: 'Meet your city leaders and history.',
      items: [
        {
          title: 'Mayor & Council',
          desc: 'Leadership profiles and contact',
          icon: Users,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        },
        {
          title: 'City Districts',
          desc: 'Barangay information and services',
          icon: Building2,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        },
        {
          title: 'Contact Us',
          desc: 'Government offices and hotlines',
          icon: Phone,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        },
        {
          title: 'City History',
          desc: 'Heritage and historical timeline',
          icon: Clock,
          image: '/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png'
        }
      ]
    }
  ];

  return (
    <>
      {/* Topmost Thin Bar - Always Fixed */}
      <div className="w-full min-h-[50px] flex items-center justify-center px-4 text-xs font-medium bg-[#f6f9ff] text-[#14274E] fixed top-0 left-0 right-0 z-[1000]">
        <div className="flex w-full max-w-5xl items-center justify-between">
          {/* Left: Quick Links */}
          <div className="flex items-center gap-2">
            <a href="/" className="px-4 py-2 bg-transparent text-[#14274E] hover:bg-[#eaf3fb] transition-colors rounded-md">Home</a>
            <a href="/contact" className="px-4 py-2 bg-transparent text-[#14274E] hover:bg-[#eaf3fb] transition-colors rounded-md">Contact</a>
          </div>
          {/* Center: Search */}
          <form className="flex items-center bg-white rounded-md px-3 py-2" style={{width: 240}} onSubmit={e => e.preventDefault()}>
            <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="text"
              placeholder="Search…"
              className="bg-transparent border-none outline-none text-gray-800 placeholder:text-gray-500 w-full min-w-0"
              style={{fontSize: 13}}
              aria-label="Search"
            />
          </form>
          {/* Right: Auth Buttons */}
          <div className="flex items-center gap-2">
            <a href="/login" className="px-4 py-2 bg-transparent text-[#14274E] hover:bg-[#eaf3fb] transition-colors rounded-md font-medium">Sign In</a>
            <a href="/register" className="px-4 py-2 bg-transparent text-[#14274E] hover:bg-[#eaf3fb] transition-colors rounded-md font-medium">Register</a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation Bar - Slides up/down based on scroll */}
      <motion.nav 
        className="fixed top-[50px] left-0 right-0 z-[999] bg-white min-h-[100px] flex items-center border-b border-gray-200"
        initial={{ y: 0 }}
        animate={{ y: isNavVisible ? 0 : -100 }}
        transition={{ 
          duration: 0.35, 
          ease: "easeOut"
        }}
        style={{ willChange: 'transform' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-4 w-full flex items-center justify-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity mr-12 min-w-[220px] gap-3"
            onClick={() => navigate('/')}
            style={{lineHeight: 1.1}}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="flex flex-col justify-center">
              <span className="font-bold text-base text-gray-900 font-inter tracking-tight leading-tight">Roxas City</span>
              <span className="text-xs text-gray-600 font-figtree tracking-wide leading-tight">Citizen Platform</span>
            </span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="nav-link group relative flex items-center font-figtree font-medium text-[#14274E] px-2 py-1 focus:outline-none uppercase tracking-wide text-base" style={{fontFamily: 'Figtree, Inter, sans-serif'}}>
                  <span className="pb-1">{item.title}</span>
                  <span className="nav-underline"></span>
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 text-gray-400" />
                </button>

                {/* Mega Menu Dropdown */}
                {activeDropdown === item.id && (
                  <div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in z-50"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="p-6">
                      <div className="text-sm text-blue-600 mb-4 font-inter font-medium">{item.tooltip}</div>
                      <div className="grid grid-cols-2 gap-4">
                        {item.items.map((subItem, index) => {
                          const IconComponent = subItem.icon;
                          return (
                            <motion.div
                              key={index}
                              className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-all duration-200 border border-transparent hover:border-blue-100"
                              whileHover={{ scale: 1.02, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => subItem.route && navigate(subItem.route)}
                              role="button"
                              tabIndex={0}
                              onKeyPress={e => { if (e.key === 'Enter' && subItem.route) navigate(subItem.route); }}
                            >
                              <div className="flex-shrink-0">
                                <motion.div 
                                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center"
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                  <IconComponent className="w-6 h-6 text-white" />
                                </motion.div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-inter font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {subItem.title}
                                </div>
                                <div className="text-sm text-gray-600 mt-1 font-figtree leading-relaxed">
                                  {subItem.desc}
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 ml-8">
            <Button
              variant="outline"
              size="sm"
              className="md:hidden border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white absolute top-full left-0 right-0 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-3">
                  <div className="font-medium text-gray-900 mb-2 font-inter">{item.title}</div>
                  <div className="space-y-1 ml-4">
                    {item.items.map((subItem, index) => (
                      <div
                        key={index}
                        className="text-sm text-gray-600 py-1 font-figtree cursor-pointer hover:text-blue-600"
                        onClick={() => subItem.route && navigate(subItem.route)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={e => { if (e.key === 'Enter' && subItem.route) navigate(subItem.route); }}
                      >
                        {subItem.title}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.nav>
      
      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="min-h-[150px]"></div>
      
      <style>{`
        @media (min-width: 768px) {
          .md\:px-4 {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .nav-slide {
            transition: none !important;
          }
          
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          color: #14274E;
          padding: 12px 20px;
          font-family: 'Figtree', Inter, sans-serif;
          background: none !important;
          border: none !important;
          font-size: 10px;
          letter-spacing: 1px;
          line-height: 1.2;
        }
        .nav-link .nav-underline {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 4px;
          width: 0;
          height: 2px;
          background: #0038A8;
          border-radius: 1px;
          transition: width 0.3s cubic-bezier(.4,1.6,.6,1), left 0.3s cubic-bezier(.4,1.6,.6,1);
          transform: translateX(-50%);
        }
        .nav-link:hover .nav-underline,
        .nav-link:focus-visible .nav-underline {
          width: 60%;
          left: 50%;
        }

        .btn:hover, button:hover, a.button:hover, .btn:focus, button:focus, a.button:focus {
          transform: scale(1.06);
          box-shadow: 0 0 0 2px #fdfdfd, 0 4px 16px #60a5fa26;
        }
      `}</style>
    </>
  );
};
