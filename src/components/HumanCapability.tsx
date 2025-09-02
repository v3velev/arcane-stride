import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle, Plus, TrendingUp } from "lucide-react";

const mockCapabilities = [
  {
    name: "English Accent",
    timePerDay: "15min/day",
    totalDays: 300,
    completedDays: 23,
    daysRemaining: 277,
    progress: 23,
    streak: 7,
    status: "active"
  },
  {
    name: "Typing Speed",
    timePerDay: "10min/day", 
    totalDays: 100,
    completedDays: 62,
    daysRemaining: 38,
    progress: 62,
    streak: 12,
    status: "active"
  },
  {
    name: "Spanish Language",
    timePerDay: "30min/day",
    totalDays: 365,
    completedDays: 89,
    daysRemaining: 276,
    progress: 24,
    streak: 5,
    status: "active"
  },
  {
    name: "Meditation Practice",
    timePerDay: "20min/day",
    totalDays: 100,
    completedDays: 45,
    daysRemaining: 55,
    progress: 45,
    streak: 21,
    status: "active"
  }
];

export const HumanCapability = () => {
  return (
    <Card className="card-glow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            <TrendingUp className="w-6 h-6 text-accent" />
            Human Capability Levelling Up
          </CardTitle>
          <Button size="sm" className="accent-gradient hover-glow">
            <Plus className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">Daily habits to unlock your potential</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockCapabilities.map((capability, index) => (
          <div key={index} className="space-y-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <div>
                  <h3 className="font-medium text-foreground">{capability.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{capability.timePerDay}</span>
                    <span>•</span>
                    <span>{capability.completedDays}/{capability.totalDays} days</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-primary">{capability.progress}%</div>
                <div className="text-xs text-muted-foreground">{capability.daysRemaining} days remaining</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Progress 
                value={capability.progress} 
                className="h-2"
              />
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Day {capability.completedDays}</span>
                {capability.streak > 0 && (
                  <span className="px-2 py-1 bg-success/20 text-success rounded-full font-medium">
                    🔥 {capability.streak} day streak
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};