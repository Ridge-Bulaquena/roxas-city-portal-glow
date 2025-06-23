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
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900 font-inter">Roxas City</h1>
              <p className="text-xs text-gray-600 font-figtree">Citizen Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors group font-inter font-medium nav-item">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
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

          {/* User Type Selector & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-sm text-gray-600 font-figtree">I am a:</span>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value as any)}
                className="text-sm border border-gray-300 rounded-full px-4 py-2 pr-8 bg-gradient-to-b from-amber-200 to-yellow-50 font-figtree shadow-sm hover:shadow-md transition-all duration-200 appearance-none relative"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2rem'
                }}
              >
                <option value="resident">Resident</option>
                <option value="visitor">Visitor</option>
                <option value="official">Official</option>
              </select>
          </div>

            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-gray-600 font-figtree">I am a:</span>
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value as any)}
                  className="text-sm border border-gray-300 rounded-full px-4 py-2 pr-8 bg-gradient-to-b from-amber-200 to-yellow-50 font-figtree shadow-sm appearance-none relative"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2rem'
                  }}
                >
                  <option value="resident">Resident</option>
                  <option value="visitor">Visitor</option>
                  <option value="official">Official</option>
                </select>
              </div>
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
      </div>
    </nav>
  );
};
