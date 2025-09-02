import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Zap, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const mockData = [
  { day: 'Mon', hours: 6, intensity: 7 },
  { day: 'Tue', hours: 7, intensity: 8 },
  { day: 'Wed', hours: 5, intensity: 7 },
  { day: 'Thu', hours: 3, intensity: 6 },
  { day: 'Fri', hours: 7, intensity: 9 },
  { day: 'Sat', hours: 5, intensity: 8 },
  { day: 'Sun', hours: 6, intensity: 8 }
];

export const WorkIntensityChart = () => {
  return (
    <Card className="card-glow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg text-pop">
            <TrendingUp className="w-5 h-5 text-accent" />
            Work Intensity
          </CardTitle>
          <Button size="sm" variant="outline" className="hover-glow border-accent/30 hover:border-accent">
            <Calendar className="w-4 h-4 mr-1" />
            Select date range
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Chart Area */}
        <div className="h-48 bg-gradient-to-br from-secondary/10 to-secondary/30 rounded-lg p-4 border border-border/50">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="2 2" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="day" 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                axisLine={{ stroke: 'hsl(var(--border))', strokeWidth: 1 }}
                tickLine={{ stroke: 'hsl(var(--border))' }}
              />
              <YAxis 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                axisLine={{ stroke: 'hsl(var(--border))', strokeWidth: 1 }}
                tickLine={{ stroke: 'hsl(var(--border))' }}
                domain={[0, 12]}
              />
              <Legend 
                wrapperStyle={{ 
                  paddingTop: '8px',
                  fontSize: '11px',
                  color: 'hsl(var(--muted-foreground))'
                }}
              />
              <Line 
                type="monotone"
                dataKey="hours" 
                stroke="hsl(var(--accent))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--accent))', strokeWidth: 2, fill: 'hsl(var(--background))' }}
                name="Hours of work"
              />
              <Line 
                type="monotone"
                dataKey="intensity" 
                stroke="hsl(var(--success))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--success))', strokeWidth: 2, fill: 'hsl(var(--background))' }}
                name="Intensity of work"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gamified Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-4 text-center hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-accent mr-2" />
                <div className="text-2xl font-bold text-gradient">5.9</div>
              </div>
              <div className="text-xs font-medium text-accent uppercase tracking-wide">AVG. Work Hours per day</div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-success/10 to-success/5 border border-success/20 p-4 text-center hover:shadow-lg hover:shadow-success/20 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-5 h-5 text-success mr-2" />
                <div className="text-2xl font-bold text-gradient">7.4</div>
              </div>
              <div className="text-xs font-medium text-success uppercase tracking-wide">AVG. Intensity per day</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};