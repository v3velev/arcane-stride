import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp } from "lucide-react";

const mockData = [
  { day: 'Mon', hours: 6, intensity: 7 },
  { day: 'Tue', hours: 8, intensity: 8 },
  { day: 'Wed', hours: 5, intensity: 6 },
  { day: 'Thu', hours: 7, intensity: 7 },
  { day: 'Fri', hours: 9, intensity: 9 },
  { day: 'Sat', hours: 4, intensity: 5 },
  { day: 'Sun', hours: 6, intensity: 7 }
];

export const WorkIntensityChart = () => {
  return (
    <Card className="card-glow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="w-5 h-5 text-accent" />
            Work Intensity
          </CardTitle>
          <Button size="sm" variant="outline" className="hover-glow">
            <Calendar className="w-4 h-4 mr-1" />
            Select date range
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Chart Area */}
        <div className="h-48 bg-secondary/20 rounded-lg p-4 relative">
          <div className="flex items-end justify-between h-full">
            {mockData.map((data, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                <div className="relative w-full max-w-8 flex flex-col items-center">
                  {/* Intensity Bar */}
                  <div 
                    className="w-4 bg-accent rounded-t"
                    style={{ height: `${(data.intensity / 10) * 80}px` }}
                  />
                  {/* Hours Bar */}
                  <div 
                    className="w-4 bg-success rounded-b"
                    style={{ height: `${(data.hours / 12) * 80}px` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{data.day}</span>
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="absolute top-2 right-2 flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-success rounded"></div>
              <span className="text-muted-foreground">Hours of work</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-accent rounded"></div>
              <span className="text-muted-foreground">Intensity of work</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-3 text-center bg-secondary/50">
            <div className="text-lg font-bold text-primary">6.4</div>
            <div className="text-xs text-muted-foreground">AVG. Work Hours per day</div>
          </Card>
          <Card className="p-3 text-center bg-secondary/50">
            <div className="text-lg font-bold text-primary">7.1</div>
            <div className="text-xs text-muted-foreground">AVG. Intensity per day</div>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};