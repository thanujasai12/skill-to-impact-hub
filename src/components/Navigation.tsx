import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Calendar, Gift, Building2, Info } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: GraduationCap },
    { path: "/dashboard", label: "Dashboard", icon: Heart },
    { path: "/events", label: "Events", icon: Calendar },
    { path: "/scholarships", label: "Scholarships", icon: Gift },
    { path: "/rewards", label: "Rewards", icon: Gift },
    { path: "/sponsorship", label: "Sponsor", icon: Building2 },
    { path: "/about", label: "About", icon: Info },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              EduImpact
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link key={path} to={path}>
                <Button
                  variant={location.pathname === path ? "default" : "ghost"}
                  size="sm"
                  className="flex items-center space-x-1"
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;