import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Eye, Users, Heart, Star, CheckCircle, Zap, Target, Award } from "lucide-react";

const Sponsorship = () => {
  const sponsorBenefits = [
    {
      icon: Eye,
      title: "Brand Visibility",
      description: "Logo placement on events, dashboards, and learner certificates",
      details: ["Event page branding", "Dashboard sponsor highlights", "Certificate co-branding", "Social media mentions"]
    },
    {
      icon: TrendingUp,
      title: "Real-Time Impact Tracking",
      description: "AI-powered dashboard showing exact impact of your contribution",
      details: ["Live meal funding counter", "Student progress tracking", "Geographic impact mapping", "ROI calculations"]
    },
    {
      icon: Users,
      title: "Direct Student Connection",
      description: "Connect with talented students for internships and hiring",
      details: ["Access to student profiles", "Performance analytics", "Direct messaging capability", "Talent pipeline development"]
    },
    {
      icon: Award,
      title: "CSR Reporting",
      description: "Comprehensive reports for your CSR and ESG initiatives",
      details: ["Monthly impact reports", "SDG alignment documentation", "Media kit for PR", "Annual sustainability metrics"]
    }
  ];

  const packageOptions = [
    {
      name: "Seed Sponsor",
      price: "₹25,000",
      period: "/month",
      seats: 50,
      popular: false,
      features: [
        "50 sponsored seats per month",
        "Basic brand visibility",
        "Monthly impact reports",
        "Student database access",
        "Email support"
      ]
    },
    {
      name: "Growth Sponsor",
      price: "₹75,000",
      period: "/month",
      seats: 200,
      popular: true,
      features: [
        "200 sponsored seats per month",
        "Premium brand placement",
        "Real-time impact dashboard",
        "Direct student messaging",
        "Quarterly business reviews",
        "Custom event sponsorship",
        "Priority support"
      ]
    },
    {
      name: "Impact Partner",
      price: "₹2,00,000",
      period: "/month",
      seats: 750,
      popular: false,
      features: [
        "750 sponsored seats per month",
        "Exclusive brand partnership",
        "Custom AI dashboard",
        "Dedicated account manager",
        "Co-branded workshops",
        "Speaking opportunities",
        "White-label options",
        "24/7 support"
      ]
    }
  ];

  const impactMetrics = [
    { label: "Total Seats Sponsored", value: "15,420", icon: Users, color: "text-primary" },
    { label: "Students Impacted", value: "8,750", icon: Heart, color: "text-red-500" },
    { label: "Corporate Partners", value: "47", icon: Building2, color: "text-accent" },
    { label: "Success Rate", value: "92%", icon: Target, color: "text-impact" }
  ];

  const currentSponsors = [
    { name: "TechCorp Solutions", logo: "🏢", package: "Growth", impact: "2,400 seats" },
    { name: "GreenFinance Ltd", logo: "🌱", package: "Impact", impact: "4,800 seats" },
    { name: "InnovateLabs", logo: "🚀", package: "Seed", impact: "600 seats" },
    { name: "DataWorks Inc", logo: "📊", package: "Growth", impact: "1,800 seats" },
  ];

  const successStories = [
    {
      company: "TechCorp Solutions",
      story: "Sponsored 500 coding bootcamp seats, hired 23 graduates as interns",
      outcome: "15% increase in diverse hiring, 89% intern retention rate"
    },
    {
      company: "GreenFinance Ltd",
      story: "Funded financial literacy workshops for 1,200 rural students",
      outcome: "Improved financial inclusion scores by 34% in target regions"
    },
    {
      company: "InnovateLabs",
      story: "Sponsored AI/ML workshops, created talent pipeline",
      outcome: "Reduced hiring costs by 40%, improved team diversity by 60%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sponsor Seats. Spark Futures.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Transform your CSR budget into measurable impact while building a diverse talent pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                Become a Sponsor
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                View Impact Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map(({ label, value, icon: Icon, color }) => (
              <Card key={label} className="text-center border-none shadow-card">
                <CardContent className="p-6">
                  <Icon className={`h-8 w-8 ${color} mx-auto mb-2`} />
                  <div className={`text-3xl font-bold ${color} mb-1`}>{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Corporate Sponsorship Matters</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Millions of talented individuals can't afford even low-cost workshops. Your sponsorship breaks down barriers and creates opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-destructive">The Challenge</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <p>68% of professionals can't afford skill development courses</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <p>Corporate CSR budgets lack measurable impact visibility</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <p>Talent pipeline diversity remains a critical business challenge</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-impact">Our Solution</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-impact mt-2"></div>
                  <p><strong>Smart Matching:</strong> AI connects sponsors with relevant students</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-impact mt-2"></div>
                  <p><strong>Real-Time Impact:</strong> Track every sponsored seat's progress</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-impact mt-2"></div>
                  <p><strong>Talent Pipeline:</strong> Direct access to skilled, motivated learners</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorBenefits.map(({ icon: Icon, title, description, details }) => (
              <Card key={title} className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{description}</p>
                  <ul className="text-left space-y-1">
                    {details.map((detail, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-center">
                        <CheckCircle className="h-3 w-3 text-impact mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sponsorship Packages</h2>
            <p className="text-muted-foreground">Choose the package that aligns with your impact goals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packageOptions.map((pkg) => (
              <Card key={pkg.name} className={`relative ${pkg.popular ? 'border-primary shadow-lg scale-105' : 'border-border'}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground">{pkg.seats} sponsored seats</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-impact mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact Partners</h2>
            <p className="text-muted-foreground">Join these forward-thinking companies making a difference</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentSponsors.map((sponsor) => (
              <Card key={sponsor.name} className="text-center bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{sponsor.logo}</div>
                  <h3 className="font-semibold mb-2">{sponsor.name}</h3>
                  <Badge variant="outline" className="mb-2">{sponsor.package} Sponsor</Badge>
                  <p className="text-sm text-muted-foreground">{sponsor.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground">Real impact from our sponsorship partners</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-impact/5 border-impact/20">
                <CardContent className="p-6">
                  <Star className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold mb-3">{story.company}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{story.story}</p>
                  <p className="text-impact font-medium text-sm">{story.outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our mission to democratize education while building your talent pipeline and achieving measurable CSR goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-accent hover:bg-white/90">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent">
              Download Impact Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsorship;