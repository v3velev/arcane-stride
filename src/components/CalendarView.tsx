import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const mockCalendarData = [
  { date: 1, score: 8.5, isToday: false },
  { date: 2, score: 7.2, isToday: true },
  { date: 3, score: 0, isToday: false },
  { date: 4, score: 9.1, isToday: false },
  { date: 5, score: 6.8, isToday: false },
  { date: 6, score: 0, isToday: false },
  { date: 7, score: 8.9, isToday: false },
  { date: 8, score: 7.5, isToday: false },
  { date: 9, score: 8.2, isToday: false },
  { date: 10, score: 0, isToday: false },
  { date: 11, score: 9.3, isToday: false },
  { date: 12, score: 7.8, isToday: false },
  { date: 13, score: 8.6, isToday: false },
  { date: 14, score: 0, isToday: false },
  { date: 15, score: 8.1, isToday: false },
  { date: 16, score: 7.9, isToday: false },
  { date: 17, score: 8.7, isToday: false },
  { date: 18, score: 9.0, isToday: false },
  { date: 19, score: 7.4, isToday: false },
  { date: 20, score: 8.3, isToday: false }
];

const getScoreColor = (score: number) => {
  if (score === 0) return 'bg-muted';
  if (score < 5) return 'bg-destructive/60';
  if (score < 7) return 'bg-warning/60';  
  if (score < 8.5) return 'bg-success/60';
  return 'bg-success';
};

export const CalendarView = () => {
  return (
    <Card className="card-glow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="w-5 h-5 text-accent" />
            Calendar view
          </CardTitle>
          <div className="flex items-center gap-1">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm font-medium px-2">September 2025</span>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Clickable days - Click on a day and you get a new page with data about that day specifically. 
          Days get displayed a score and they are in colors
        </p>
      </CardHeader>
      <CardContent>
        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="p-2 text-xs text-center text-muted-foreground font-medium">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for start of month */}
          {Array.from({ length: 6 }, (_, i) => (
            <div key={`empty-${i}`} className="p-2 h-10"></div>
          ))}
          
          {/* Calendar days */}
          {mockCalendarData.map((day) => (
            <Button
              key={day.date}
              variant="ghost"
              className={`h-10 p-0 relative text-xs font-medium hover-glow ${
                day.isToday ? 'ring-2 ring-accent' : ''
              } ${getScoreColor(day.score)}`}
            >
              <span className="relative z-10">{day.date}</span>
              {day.score > 0 && (
                <span className="absolute bottom-0 right-0 text-[10px] font-bold bg-background/80 px-1 rounded-tl">
                  {day.score.toFixed(1)}
                </span>
              )}
            </Button>
          ))}
          
          {/* Fill remaining cells */}
          {Array.from({ length: 11 }, (_, i) => (
            <div key={`end-${i}`} className="p-2 h-10"></div>
          ))}
        </div>

        {/* Score Legend */}
        <div className="mt-4 pt-3 border-t border-border">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Score Legend:</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-destructive/60 rounded"></div>
                <span className="text-muted-foreground">&lt;5</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-warning/60 rounded"></div>
                <span className="text-muted-foreground">5-7</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-success/60 rounded"></div>
                <span className="text-muted-foreground">7-8.5</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-success rounded"></div>
                <span className="text-muted-foreground">&gt;8.5</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};