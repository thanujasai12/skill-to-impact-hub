import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Gift, Trophy, Zap, Crown, Star, Award, Flame, Target } from "lucide-react";

const Rewards = () => {
  const userProgress = {
    currentStreak: 7,
    sessionsAttended: 12,
    totalPoints: 1240,
    nextRewardAt: 1500,
    level: "Impact Hero",
    rank: 23
  };

  const availableRewards = [
    {
      id: 1,
      title: "Udemy Business Course",
      description: "Access to any premium Udemy course of your choice",
      pointsRequired: 1500,
      category: "Premium Learning",
      icon: "🎓",
      difficulty: "15 sessions",
      claimed: false,
      popular: true
    },
    {
      id: 2,
      title: "LinkedIn Premium (3 months)",
      description: "3-month LinkedIn Premium subscription for career growth",
      pointsRequired: 1200,
      category: "Career Growth",
      icon: "💼",
      difficulty: "12 sessions",
      claimed: true,
      popular: false
    },
    {
      id: 3,
      title: "LeetCode Premium (6 months)",
      description: "6-month LeetCode Premium for coding interview prep",
      pointsRequired: 2000,
      category: "Technical Skills",
      icon: "💻",
      difficulty: "20 sessions",
      claimed: false,
      popular: true
    },
    {
      id: 4,
      title: "Coursera Specialization",
      description: "Complete any Coursera specialization with certificate",
      pointsRequired: 2500,
      category: "Premium Learning",
      icon: "📚",
      difficulty: "25 sessions",
      claimed: false,
      popular: false
    },
    {
      id: 5,
      title: "1-on-1 Career Mentoring",
      description: "2-hour session with industry expert mentor",
      pointsRequired: 3000,
      category: "Mentorship",
      icon: "🎯",
      difficulty: "30 sessions",
      claimed: false,
      popular: true
    },
    {
      id: 6,
      title: "Design Tools Bundle",
      description: "Figma Pro + Adobe Creative Cloud (1 month each)",
      pointsRequired: 1800,
      category: "Design Tools",
      icon: "🎨",
      difficulty: "18 sessions",
      claimed: false,
      popular: false
    }
  ];

  const streakRewards = [
    { streak: 3, reward: "First Steps Badge", unlocked: true },
    { streak: 7, reward: "Week Warrior Badge", unlocked: true },
    { streak: 14, reward: "Fortnight Champion", unlocked: false },
    { streak: 30, reward: "Monthly Master", unlocked: false },
    { streak: 100, reward: "Century Legend", unlocked: false }
  ];

  const achievements = [
    {
      title: "First Session",
      description: "Completed your first learning session",
      icon: Star,
      earned: true,
      rarity: "Common"
    },
    {
      title: "Week Warrior",
      description: "Maintained 7-day learning streak",
      icon: Flame,
      earned: true,
      rarity: "Uncommon"
    },
    {
      title: "Impact Hero",
      description: "Funded 100+ meals through learning",
      icon: Trophy,
      earned: true,
      rarity: "Rare"
    },
    {
      title: "Knowledge Seeker",
      description: "Attended 10+ different workshop topics",
      icon: Target,
      earned: false,
      rarity: "Epic"
    },
    {
      title: "Community Leader",
      description: "Referred 5+ friends to the platform",
      icon: Crown,
      earned: false,
      rarity: "Legendary"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Priya S.", points: 4560, badge: "👑" },
    { rank: 2, name: "Arjun M.", points: 3840, badge: "🥈" },
    { rank: 3, name: "Kavya R.", points: 3120, badge: "🥉" },
    { rank: 23, name: "You", points: 1240, badge: "⭐", isUser: true },
    { rank: 24, name: "Rohit K.", points: 1180, badge: "⭐" }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Rewards & Recognition</h1>
          <p className="text-xl text-muted-foreground">
            Earn points, unlock perks, and climb the leaderboard while making an impact
          </p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center bg-gradient-primary text-white">
            <CardContent className="p-4">
              <Trophy className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{userProgress.totalPoints}</div>
              <div className="text-sm opacity-90">Total Points</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-accent text-white">
            <CardContent className="p-4">
              <Flame className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{userProgress.currentStreak}</div>
              <div className="text-sm opacity-90">Day Streak</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-impact text-white">
            <CardContent className="p-4">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">#{userProgress.rank}</div>
              <div className="text-sm opacity-90">Leaderboard</div>
            </CardContent>
          </Card>
          <Card className="text-center border-primary/20">
            <CardContent className="p-4">
              <Crown className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">{userProgress.level}</div>
              <div className="text-sm text-muted-foreground">Current Level</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Available Rewards */}
          <div className="lg:col-span-2">
            {/* Progress to Next Reward */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Progress to Next Reward</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Udemy Business Course</span>
                    <span className="text-sm text-muted-foreground">
                      {userProgress.totalPoints}/{userProgress.nextRewardAt} points
                    </span>
                  </div>
                  <Progress 
                    value={(userProgress.totalPoints / userProgress.nextRewardAt) * 100} 
                    className="h-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    {userProgress.nextRewardAt - userProgress.totalPoints} points to go! 
                    Attend 3 more sessions to unlock.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Available Rewards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gift className="h-5 w-5 text-accent" />
                  <span>Available Rewards</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {availableRewards.map((reward) => (
                    <div 
                      key={reward.id} 
                      className={`p-4 rounded-lg border-2 transition-all ${
                        reward.claimed 
                          ? 'bg-muted/50 border-muted' 
                          : userProgress.totalPoints >= reward.pointsRequired
                          ? 'bg-impact/5 border-impact/20 hover:border-impact/40'
                          : 'bg-card border-border hover:border-primary/20'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-2xl">{reward.icon}</span>
                            <h3 className="font-semibold">{reward.title}</h3>
                            {reward.popular && (
                              <Badge variant="secondary" className="bg-accent/10 text-accent">
                                Popular
                              </Badge>
                            )}
                            {reward.claimed && (
                              <Badge variant="secondary" className="bg-impact/10 text-impact">
                                Claimed
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{reward.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span className="bg-muted px-2 py-1 rounded">{reward.category}</span>
                            <span>{reward.difficulty}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary mb-2">
                            {reward.pointsRequired} pts
                          </div>
                          <Button 
                            size="sm" 
                            variant={
                              reward.claimed ? "outline" : 
                              userProgress.totalPoints >= reward.pointsRequired ? "default" : "outline"
                            }
                            disabled={reward.claimed || userProgress.totalPoints < reward.pointsRequired}
                          >
                            {reward.claimed ? "Claimed" : 
                             userProgress.totalPoints >= reward.pointsRequired ? "Claim Now" : "Locked"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Streak Rewards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Flame className="h-5 w-5 text-accent" />
                  <span>Streak Rewards</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {streakRewards.map((streak, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      streak.unlocked ? 'bg-impact/10' : 'bg-muted/30'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-sm">{streak.reward}</div>
                      <div className="text-xs text-muted-foreground">{streak.streak} days</div>
                    </div>
                    {streak.unlocked ? (
                      <Badge variant="secondary" className="bg-impact/20 text-impact">
                        Unlocked
                      </Badge>
                    ) : (
                      <div className="w-6 h-6 border-2 border-muted-foreground rounded-full"></div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      achievement.earned ? 'bg-primary/5' : 'bg-muted/30 opacity-60'
                    }`}
                  >
                    <achievement.icon className={`h-6 w-6 ${
                      achievement.earned ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{achievement.title}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        achievement.rarity === 'Common' ? 'border-gray-400 text-gray-600' :
                        achievement.rarity === 'Uncommon' ? 'border-green-400 text-green-600' :
                        achievement.rarity === 'Rare' ? 'border-blue-400 text-blue-600' :
                        achievement.rarity === 'Epic' ? 'border-purple-400 text-purple-600' :
                        'border-yellow-400 text-yellow-600'
                      }`}
                    >
                      {achievement.rarity}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Mini Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  <span>Top Learners</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {leaderboard.map((user) => (
                  <div 
                    key={user.rank} 
                    className={`flex items-center justify-between p-2 rounded ${
                      user.isUser ? 'bg-primary/10 border border-primary/20' : 'bg-muted/20'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{user.badge}</span>
                      <div>
                        <div className="font-medium text-sm">{user.name}</div>
                        <div className="text-xs text-muted-foreground">#{user.rank}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">{user.points} pts</div>
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

export default Rewards;