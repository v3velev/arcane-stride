import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

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
        <div className="h-48 bg-secondary/20 rounded-lg p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData} margin={{ top: 5, right: 30, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
              />
              <YAxis 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
              />
              <Legend 
                wrapperStyle={{ 
                  paddingTop: '10px',
                  fontSize: '12px',
                  color: 'hsl(var(--muted-foreground))'
                }}
              />
              <Bar 
                dataKey="hours" 
                fill="hsl(var(--success))" 
                name="Work Hours"
                radius={[2, 2, 0, 0]}
              />
              <Bar 
                dataKey="intensity" 
                fill="hsl(var(--accent))" 
                name="Intensity"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
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