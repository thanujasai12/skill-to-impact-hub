import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, MapPin, Filter, Star, Gift } from "lucide-react";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const events = [
    {
      id: 1,
      title: "Advanced React Patterns & Performance",
      instructor: "Sarah Chen",
      category: "Tech",
      level: "Advanced",
      date: "2024-01-28",
      time: "6:00 PM - 8:00 PM",
      duration: "2 hours",
      price: 299,
      originalPrice: 499,
      participants: 24,
      maxParticipants: 30,
      hasSponsorship: true,
      sponsoredSeats: 5,
      description: "Master advanced React patterns including render props, higher-order components, and performance optimization techniques.",
      skills: ["React", "JavaScript", "Performance"],
      rating: 4.9
    },
    {
      id: 2,
      title: "Financial Literacy for Young Professionals",
      instructor: "Raj Kumar",
      category: "Finance",
      level: "Beginner",
      date: "2024-01-29",
      time: "7:00 PM - 9:00 PM",
      duration: "2 hours",
      price: 99,
      originalPrice: 199,
      participants: 45,
      maxParticipants: 50,
      hasSponsorship: true,
      sponsoredSeats: 10,
      description: "Learn essential financial concepts: budgeting, investing, taxes, and building wealth in your 20s and 30s.",
      skills: ["Budgeting", "Investing", "Tax Planning"],
      rating: 4.8
    },
    {
      id: 3,
      title: "Design Thinking Workshop: Innovation Mindset",
      instructor: "Maya Patel",
      category: "Design",
      level: "Intermediate",
      date: "2024-01-30",
      time: "4:00 PM - 7:00 PM",
      duration: "3 hours",
      price: 199,
      originalPrice: 299,
      participants: 18,
      maxParticipants: 25,
      hasSponsorship: false,
      sponsoredSeats: 0,
      description: "Hands-on workshop covering the complete design thinking process from empathy mapping to prototyping.",
      skills: ["Design Thinking", "Innovation", "Problem Solving"],
      rating: 4.7
    },
    {
      id: 4,
      title: "Python for Data Science Bootcamp",
      instructor: "Dr. Ankit Sharma",
      category: "Data Science",
      level: "Beginner",
      date: "2024-02-01",
      time: "5:30 PM - 8:30 PM",
      duration: "3 hours",
      price: 249,
      originalPrice: 399,
      participants: 32,
      maxParticipants: 40,
      hasSponsorship: true,
      sponsoredSeats: 8,
      description: "Complete introduction to Python for data analysis, pandas, numpy, and visualization with matplotlib.",
      skills: ["Python", "Data Analysis", "Pandas", "NumPy"],
      rating: 4.9
    },
    {
      id: 5,
      title: "Book Club: Atomic Habits Discussion",
      instructor: "Priya Reddy",
      category: "Personal Development",
      level: "All Levels",
      date: "2024-02-02",
      time: "8:00 PM - 9:30 PM",
      duration: "1.5 hours",
      price: 49,
      originalPrice: 99,
      participants: 15,
      maxParticipants: 20,
      hasSponsorship: true,
      sponsoredSeats: 5,
      description: "Deep dive discussion on James Clear's Atomic Habits with practical implementation strategies.",
      skills: ["Habit Formation", "Personal Growth", "Productivity"],
      rating: 4.6
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || event.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const categories = ["all", "Tech", "Finance", "Design", "Data Science", "Personal Development"];
  const levels = ["all", "Beginner", "Intermediate", "Advanced", "All Levels"];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-muted-foreground">Join affordable workshops that make a difference</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search events, instructors, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>by {event.instructor}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{event.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-primary">₹{event.price}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{event.originalPrice}</span>
                    </div>
                    {event.hasSponsorship && (
                      <Badge variant="secondary" className="bg-impact/10 text-impact">
                        <Gift className="h-3 w-3 mr-1" />
                        {event.sponsoredSeats} sponsored seats
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {event.skills.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.participants}/{event.maxParticipants} joined</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Online</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button className="flex-1" variant="default">
                      Join Now - ₹{event.price}
                    </Button>
                    {event.hasSponsorship && (
                      <Button variant="outline" className="border-impact text-impact hover:bg-impact hover:text-white">
                        Request Scholarship
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;