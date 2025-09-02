import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle, Plus, TrendingUp, Check } from "lucide-react";
import { useState } from "react";

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
  const [completedToday, setCompletedToday] = useState<Set<number>>(new Set());

  const toggleCompletion = (index: number) => {
    setCompletedToday(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

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
          <div key={index} className="space-y-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:scale-[1.02]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleCompletion(index)}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    completedToday.has(index)
                      ? 'bg-success border-success text-white glow-accent'
                      : 'border-muted-foreground hover:border-success'
                  }`}
                >
                  {completedToday.has(index) && <Check className="w-4 h-4" />}
                </button>
                <div>
                  <h3 className="font-medium text-foreground text-pop">{capability.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-accent">{capability.timePerDay}</span>
                    <span>•</span>
                    <span>{capability.completedDays}/{capability.totalDays} days</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gradient">{capability.progress}%</div>
                <div className="text-xs text-muted-foreground">{capability.daysRemaining} days remaining</div>
              </div>
            </div>
            
            {completedToday.has(index) && (
              <div className="flex items-center gap-2 px-3 py-2 bg-success/20 border border-success/30 rounded-lg animate-scale-in">
                <Check className="w-4 h-4 text-success" />
                <span className="text-success font-medium">✓ Completed Today</span>
              </div>
            )}
            
            <div className="space-y-2">
              <div className="relative">
                <Progress 
                  value={capability.progress} 
                  className="h-3 bg-muted"
                />
                <div 
                  className="absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ease-out capability-progress-gradient"
                  style={{ width: `${capability.progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground font-medium">Day {capability.completedDays}</span>
                {capability.streak > 0 && (
                  <span className="px-3 py-1 bg-streak/20 text-streak rounded-full font-bold glow-streak text-pop">
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