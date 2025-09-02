import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Target, Zap, CheckCircle, AlertCircle } from "lucide-react";

const mockSessions = [
  {
    time: "09:30",
    aim: "Complete project proposal",
    duration: "2h 15m",
    intensity: "8/10",
    status: "Done",
    insight: "Great flow state, very productive",
    completedWork: "Finished budget section, completed timeline"
  },
  {
    time: "14:00", 
    aim: "Review team performance",
    duration: "1h 30m",
    intensity: "7/10",
    status: "Done",
    insight: "Good analysis, need follow-up",
    completedWork: "Analyzed Q3 metrics, identified improvement areas"
  },
  {
    time: "16:45",
    aim: "Prepare presentation slides",
    duration: "45m",
    intensity: "6/10", 
    status: "In Progress",
    insight: "Got distracted, need better focus",
    completedWork: "Created outline, added 5 slides"
  }
];

export const AscensionSessions = () => {
  return (
    <Card className="card-glow">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Target className="w-6 h-6 text-accent" />
          Today's Ascension Sessions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Sessions Table */}
        <div className="space-y-3">
          {/* Header */}
          <div className="grid grid-cols-6 gap-4 px-3 py-2 text-sm font-medium text-muted-foreground border-b border-border">
            <div>Time</div>
            <div>Aim</div>
            <div>Duration</div>
            <div>Intensity</div>
            <div>Work Completed</div>
            <div>Insight</div>
          </div>
          
          {/* Sessions */}
          {mockSessions.map((session, index) => (
            <div key={index} className="grid grid-cols-6 gap-4 px-3 py-3 hover:bg-secondary/50 rounded-lg transition-colors">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                {session.time}
              </div>
              <div className="text-sm font-medium">{session.aim}</div>
              <div className="text-sm">{session.duration}</div>
              <div className="flex items-center gap-1">
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  parseInt(session.intensity) >= 8 ? 'bg-success/20 text-success' : 
                  parseInt(session.intensity) >= 6 ? 'bg-warning/20 text-warning' : 
                  'bg-destructive/20 text-destructive'
                }`}>
                  {session.intensity}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {session.completedWork}
              </div>
              <div className="text-sm italic text-muted-foreground">
                {session.insight}
              </div>
            </div>
          ))}
        </div>

        {/* Today's Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-4 rounded-lg border border-accent/20">
            <div className="flex items-center gap-2 text-accent mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-medium uppercase tracking-wide">Total Duration</span>
            </div>
            <div className="text-2xl font-bold text-foreground">4h 30m</div>
            <div className="text-[10px] text-muted-foreground mt-1">Today's work time</div>
          </div>
          <div className="bg-gradient-to-br from-warning/20 to-warning/5 p-4 rounded-lg border border-warning/20">
            <div className="flex items-center gap-2 text-warning mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-medium uppercase tracking-wide">Avg. Intensity</span>
            </div>
            <div className="text-2xl font-bold text-foreground">7.0</div>
            <div className="text-[10px] text-muted-foreground mt-1">Focus & speed</div>
          </div>
          <div className="bg-gradient-to-br from-success/20 to-success/5 p-4 rounded-lg border border-success/20">
            <div className="flex items-center gap-2 text-success mb-1">
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs font-medium uppercase tracking-wide">Total Score</span>
            </div>
            <div className="text-2xl font-bold text-foreground">31.5</div>
            <div className="text-[10px] text-muted-foreground mt-1">Performance score</div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 pt-4">
          <Card className="p-4 text-center bg-secondary/50">
            <div className="text-2xl font-bold text-primary">6.2h</div>
            <div className="text-sm text-muted-foreground">AVG daily work time</div>
          </Card>
          <Card className="p-4 text-center bg-secondary/50">
            <div className="text-2xl font-bold text-primary">7.8</div>
            <div className="text-sm text-muted-foreground">AVG. focus intensity</div>
          </Card>
          <Card className="p-4 text-center bg-secondary/50">
            <div className="text-2xl font-bold text-primary">23</div>
            <div className="text-sm text-muted-foreground">Number of Tasks completed last 7 days</div>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};