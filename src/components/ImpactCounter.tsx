import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Trophy, Users } from "lucide-react";

interface CounterData {
  meals: number;
  books: number;
  scholarships: number;
  learners: number;
}

const ImpactCounter = () => {
  const [counts, setCounts] = useState<CounterData>({
    meals: 0,
    books: 0,
    scholarships: 0,
    learners: 0,
  });

  const targets = {
    meals: 15420,
    books: 3240,
    scholarships: 287,
    learners: 1856,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => ({
        meals: Math.min(prev.meals + Math.ceil(targets.meals / steps), targets.meals),
        books: Math.min(prev.books + Math.ceil(targets.books / steps), targets.books),
        scholarships: Math.min(prev.scholarships + Math.ceil(targets.scholarships / steps), targets.scholarships),
        learners: Math.min(prev.learners + Math.ceil(targets.learners / steps), targets.learners),
      }));
    }, interval);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  const metrics = [
    {
      icon: Heart,
      label: "Meals Funded",
      count: counts.meals.toLocaleString(),
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      icon: BookOpen,
      label: "Books Donated",
      count: counts.books.toLocaleString(),
      color: "text-primary",
      bg: "bg-primary/5",
    },
    {
      icon: Trophy,
      label: "Scholarships Granted",
      count: counts.scholarships.toLocaleString(),
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Users,
      label: "Active Learners",
      count: counts.learners.toLocaleString(),
      color: "text-impact",
      bg: "bg-impact/10",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
      {metrics.map(({ icon: Icon, label, count, color, bg }) => (
        <Card key={label} className={`${bg} border-none shadow-card animate-float`}>
          <CardContent className="p-6 text-center">
            <Icon className={`h-8 w-8 ${color} mx-auto mb-2`} />
            <div className={`text-2xl font-bold ${color} mb-1`}>{count}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ImpactCounter;