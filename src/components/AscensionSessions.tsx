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

        {/* Summary Buttons */}
        <div className="flex gap-4 pt-4 border-t border-border">
          <Button variant="outline" className="flex-1 hover-glow">
            <Clock className="w-4 h-4 mr-2" />
            Total Duration
          </Button>
          <Button variant="outline" className="flex-1 hover-glow">
            <Zap className="w-4 h-4 mr-2" />
            Avg. Intensity
          </Button>
          <Button variant="outline" className="flex-1 hover-glow">
            <CheckCircle className="w-4 h-4 mr-2" />
            Total Score
          </Button>
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