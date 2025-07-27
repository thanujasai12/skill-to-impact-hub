import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Flame, Star, TrendingUp, Gift, Users, Calendar, Award } from "lucide-react";

const Dashboard = () => {
  const userStats = {
    sessionsAttended: 12,
    mealsSponsored: 96,
    currentStreak: 7,
    nextReward: "LinkedIn Premium",
    progressToReward: 75,
    rank: 23,
    totalLearners: 1856,
    badges: ["First Session", "Week Warrior", "Impact Hero"]
  };

  const recommendations = [
    {
      title: "Advanced React Patterns",
      instructor: "Sarah Chen",
      date: "Tomorrow, 6 PM",
      price: "₹199",
      difficulty: "Advanced",
      category: "Tech"
    },
    {
      title: "Financial Literacy Basics",
      instructor: "Raj Kumar",
      date: "Friday, 7 PM",
      price: "₹99",
      difficulty: "Beginner",
      category: "Finance"
    },
    {
      title: "Design Thinking Workshop",
      instructor: "Maya Patel",
      date: "Sunday, 4 PM",
      price: "₹149",
      difficulty: "Intermediate",
      category: "Design"
    }
  ];

  const leaderboard = [
    { name: "Priya S.", sessions: 45, meals: 360 },
    { name: "Arjun M.", sessions: 38, meals: 304 },
    { name: "You", sessions: 12, meals: 96, isUser: true },
    { name: "Kavya R.", sessions: 31, meals: 248 },
    { name: "Rohit K.", sessions: 29, meals: 232 }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
          <p className="text-muted-foreground">Your learning journey is making a real difference.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Sessions Attended</p>
                  <p className="text-2xl font-bold">{userStats.sessionsAttended}</p>
                </div>
                <Calendar className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-accent text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Meals Sponsored</p>
                  <p className="text-2xl font-bold">{userStats.mealsSponsored}</p>
                </div>
                <Gift className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-impact text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Current Streak</p>
                  <p className="text-2xl font-bold">{userStats.currentStreak} days</p>
                </div>
                <Flame className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Leaderboard Rank</p>
                  <p className="text-2xl font-bold text-accent">#{userStats.rank}</p>
                </div>
                <Trophy className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>AI Recommendations for You</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{rec.title}</h4>
                        <p className="text-sm text-muted-foreground">by {rec.instructor}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline" className="text-xs">{rec.category}</Badge>
                          <Badge variant="secondary" className="text-xs">{rec.difficulty}</Badge>
                          <span className="text-sm text-muted-foreground">{rec.date}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{rec.price}</p>
                        <Button size="sm" className="mt-2">Join Now</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress to Next Reward */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gift className="h-5 w-5 text-accent" />
                  <span>Next Reward Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{userStats.nextReward}</span>
                    <span className="text-sm text-muted-foreground">{userStats.progressToReward}%</span>
                  </div>
                  <Progress value={userStats.progressToReward} className="h-3" />
                  <p className="text-sm text-muted-foreground">
                    Attend 3 more sessions to unlock {userStats.nextReward}!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-impact" />
                  <span>Your Badges</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {userStats.badges.map((badge, index) => (
                    <div key={index} className="flex flex-col items-center p-3 bg-impact/10 rounded-lg">
                      <Trophy className="h-6 w-6 text-impact mb-1" />
                      <span className="text-xs text-center font-medium">{badge}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Leaderboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((user, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        user.isUser ? 'bg-primary/10 border border-primary/20' : 'bg-muted/30'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`font-bold ${user.isUser ? 'text-primary' : 'text-muted-foreground'}`}>
                          #{index + 1}
                        </span>
                        <span className={`font-medium ${user.isUser ? 'text-primary' : ''}`}>
                          {user.name}
                        </span>
                      </div>
                      <div className="text-right text-sm">
                        <div className="font-medium">{user.sessions} sessions</div>
                        <div className="text-muted-foreground">{user.meals} meals</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;