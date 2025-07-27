import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Heart, Users, CheckCircle, Building2, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Scholarships = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseInterest: "",
    needProof: "",
    story: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your scholarship application within 48 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      courseInterest: "",
      needProof: "",
      story: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const activeCampaigns = [
    {
      sponsor: "TechCorp Solutions",
      course: "Full-Stack Development Bootcamp",
      seatsAvailable: 15,
      totalSeats: 25,
      deadline: "2024-02-15",
      value: "₹15,000"
    },
    {
      sponsor: "GreenFinance Ltd",
      course: "Financial Planning Workshop Series",
      seatsAvailable: 8,
      totalSeats: 20,
      deadline: "2024-02-10",
      value: "₹8,000"
    },
    {
      sponsor: "InnovateLabs",
      course: "AI & Machine Learning Basics",
      seatsAvailable: 22,
      totalSeats: 30,
      deadline: "2024-02-20",
      value: "₹12,000"
    }
  ];

  const successStories = [
    {
      name: "Priya M.",
      course: "Data Science Bootcamp",
      outcome: "Landed job at startup",
      sponsor: "DataTech Inc"
    },
    {
      name: "Rahul K.",
      course: "Digital Marketing",
      outcome: "Started freelance business",
      sponsor: "MarketingPro"
    },
    {
      name: "Anisha S.",
      course: "Web Development",
      outcome: "Promoted to Tech Lead",
      sponsor: "CodeWorks"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <GraduationCap className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Scholarship Opportunities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Can't afford workshops? Apply for sponsored seats funded by our generous corporate partners.
            Your potential should never be limited by your wallet.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Application Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Scholarship Application</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out this simple form to apply for sponsored seats. We match applications with relevant corporate sponsors.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <Label htmlFor="courseInterest">Course Interest *</Label>
                    <Select value={formData.courseInterest} onValueChange={(value) => handleInputChange("courseInterest", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">Technology & Programming</SelectItem>
                        <SelectItem value="data">Data Science & AI</SelectItem>
                        <SelectItem value="design">Design & UX</SelectItem>
                        <SelectItem value="finance">Finance & Business</SelectItem>
                        <SelectItem value="marketing">Digital Marketing</SelectItem>
                        <SelectItem value="personal">Personal Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="needProof">Why do you need financial assistance? *</Label>
                    <Textarea
                      id="needProof"
                      value={formData.needProof}
                      onChange={(e) => handleInputChange("needProof", e.target.value)}
                      placeholder="Briefly explain your financial situation and why you need sponsored access..."
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="story">Your Learning Goals & Story</Label>
                    <Textarea
                      id="story"
                      value={formData.story}
                      onChange={(e) => handleInputChange("story", e.target.value)}
                      placeholder="Tell us about your background, career goals, and how this education will help you..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Scholarship Application
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    We review all applications within 48 hours and match them with relevant sponsors.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Active Campaigns & Info */}
          <div className="space-y-6">
            {/* How It Works */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How Sponsorship Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-impact mt-0.5" />
                  <div>
                    <p className="font-medium">Corporate Funding</p>
                    <p className="text-sm text-muted-foreground">Companies sponsor seats as part of their CSR initiatives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-impact mt-0.5" />
                  <div>
                    <p className="font-medium">AI Matching</p>
                    <p className="text-sm text-muted-foreground">Our system matches applications with relevant sponsors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-impact mt-0.5" />
                  <div>
                    <p className="font-medium">Free Access</p>
                    <p className="text-sm text-muted-foreground">Selected students get completely free access to workshops</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-impact mt-0.5" />
                  <div>
                    <p className="font-medium">Impact Tracking</p>
                    <p className="text-sm text-muted-foreground">Sponsors see real-time progress of students they've supported</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Campaigns */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span>Active Sponsorship Campaigns</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeCampaigns.map((campaign, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{campaign.course}</h4>
                      <span className="text-xs text-primary font-medium">{campaign.value}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">Sponsored by {campaign.sponsor}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Seats Available</span>
                        <span>{campaign.seatsAvailable}/{campaign.totalSeats}</span>
                      </div>
                      <Progress value={(campaign.seatsAvailable / campaign.totalSeats) * 100} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Apply by {new Date(campaign.deadline).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-accent" />
                  <span>Success Stories</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {successStories.map((story, index) => (
                  <div key={index} className="p-3 bg-impact/5 rounded-lg border border-impact/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{story.name}</span>
                      <span className="text-xs text-impact">{story.outcome}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{story.course}</p>
                    <p className="text-xs text-muted-foreground">Sponsored by {story.sponsor}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;