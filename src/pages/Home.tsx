import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Target, TrendingUp, Zap } from "lucide-react";
import ImpactCounter from "@/components/ImpactCounter";
import heroImage from "@/assets/hero-impact.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-hero text-white py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(249, 115, 22, 0.9)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Every skill you learn funds a child's future.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              AI-powered learning meets transparent giving — join as learner, educator, or sponsor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Learning <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Host Workshop
              </Button>
              <Button variant="sponsor" size="lg" className="text-lg px-8 py-4">
                Sponsor Seats
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-hero opacity-20 animate-pulse-glow"></div>
      </section>

      {/* Impact Counter */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Real-Time Impact</h2>
            <p className="text-muted-foreground">See the difference your learning makes</p>
          </div>
          <ImpactCounter />
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">The Problem</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <p>Billions in donations with zero visibility on actual impact</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <p>Talented educators undervalued and underpaid globally</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <p>Underprivileged learners excluded from skill development</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-impact">Our Solution</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-impact mt-2"></div>
                  <p><strong>20% to teachers</strong> - Fair compensation for educators</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-impact mt-2"></div>
                  <p><strong>80% auto-donated</strong> - Transparent impact tracking</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-impact mt-2"></div>
                  <p><strong>AI dashboards</strong> - Real-time proof of social good</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn. Earn. Change Lives. Our platform connects education with social impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Join & Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Attend AI-powered workshops, book clubs, and tech events. Pay as little as ₹99-₹299 per session.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Auto-Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  80% of your payment automatically funds meals, books, and scholarships. Watch real-time impact.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-impact/20 hover:border-impact/40 transition-colors">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-impact mx-auto mb-4" />
                <CardTitle>Earn Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlock Udemy courses, LinkedIn Premium, NFT badges, and more as you maintain learning streaks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 mx-auto mb-6 animate-float" />
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of learners who are changing lives while building skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Learning Today
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Become a Sponsor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;