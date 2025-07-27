import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Globe, Zap, Users, TrendingUp, Award, Lightbulb } from "lucide-react";

const About = () => {
  const mission = {
    title: "Our Mission",
    description: "Bridging learning and giving for global impact",
    details: "We believe that education should be accessible to everyone, and that every skill learned should contribute to positive social change. Our platform transforms the traditional learning experience into a force for good, where learners, educators, and sponsors unite to create measurable impact."
  };

  const sdgGoals = [
    {
      number: 4,
      title: "Quality Education",
      description: "Ensuring inclusive and equitable quality education for all",
      impact: "15,420+ learning sessions delivered"
    },
    {
      number: 10,
      title: "Reduced Inequalities", 
      description: "Breaking down barriers to skill development",
      impact: "8,750+ underprivileged students supported"
    },
    {
      number: 2,
      title: "Zero Hunger",
      description: "Every learning session funds meals for children",
      impact: "96,000+ meals funded through learning"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      icon: Users,
      title: "Learners Join",
      description: "Students pay affordable fees (₹99-₹299) for AI-powered workshops and skill development sessions."
    },
    {
      step: 2,
      icon: Heart,
      title: "Impact Generated",
      description: "80% of fees automatically fund social causes like meals, books, and scholarships for underprivileged students."
    },
    {
      step: 3,
      icon: TrendingUp,
      title: "Educators Empowered",
      description: "20% goes to instructors, ensuring fair compensation for quality teaching and sustainable education."
    },
    {
      step: 4,
      icon: Globe,
      title: "Transparent Tracking",
      description: "AI dashboards provide real-time visibility into social impact, showing exactly how each session creates change."
    }
  ];

  const aiRole = [
    {
      title: "Personalized Learning",
      description: "Smart recommendations based on learning history, career goals, and skill gaps",
      icon: Lightbulb
    },
    {
      title: "Impact Prediction",
      description: "Forecasting social outcomes and optimizing donation distribution for maximum effect",
      icon: Target
    },
    {
      title: "Smart Matching",
      description: "Connecting scholarship applicants with relevant corporate sponsors automatically",
      icon: Users
    },
    {
      title: "Progress Tracking",
      description: "Real-time monitoring of learner progress and social impact generation",
      icon: TrendingUp
    }
  ];

  const stats = [
    { label: "Active Learners", value: "8,750+", icon: Users, color: "text-primary" },
    { label: "Workshops Delivered", value: "1,240+", icon: Award, color: "text-accent" },
    { label: "Meals Funded", value: "96,000+", icon: Heart, color: "text-red-500" },
    { label: "Corporate Partners", value: "47", icon: Target, color: "text-impact" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn. Earn. Change Lives.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Every skill you develop creates ripples of positive change across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">{mission.title}</h2>
            <p className="text-xl text-muted-foreground mb-6">{mission.description}</p>
            <p className="text-muted-foreground leading-relaxed">{mission.details}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ label, value, icon: Icon, color }) => (
              <Card key={label} className="text-center border-none shadow-card">
                <CardContent className="p-6">
                  <Icon className={`h-8 w-8 ${color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${color} mb-1`}>{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform creates a virtuous cycle where learning generates social impact automatically
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map(({ step, icon: Icon, title, description }) => (
              <Card key={step} className="text-center relative">
                <CardHeader>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step}
                  </div>
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4 mt-4" />
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Role */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">The Role of AI</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Artificial Intelligence powers every aspect of our platform, from personalized learning experiences to impact optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {aiRole.map(({ title, description, icon: Icon }) => (
              <Card key={title} className="border-accent/20 hover:border-accent/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon className="h-8 w-8 text-accent" />
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UN SDG Alignment */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">UN SDG Alignment</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our work directly contributes to achieving the United Nations Sustainable Development Goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {sdgGoals.map((goal) => (
              <Card key={goal.number} className="text-center bg-impact/5 border-impact/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-impact text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {goal.number}
                  </div>
                  <CardTitle className="text-xl">{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{goal.description}</p>
                  <div className="bg-impact/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-impact">{goal.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Target className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            "A world where every skill learned transforms a life, where education becomes a catalyst for global positive change, 
            and where the gap between learning and giving disappears entirely."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Join Our Mission
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;