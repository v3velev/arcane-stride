import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Target } from "lucide-react";

export const MotivatorBox = () => {
  return (
    <Card className="card-glow">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Target className="w-5 h-5 text-accent" />
          Free text about my motivators and deadlines
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Write about what motivates you and your important deadlines..."
          className="min-h-[200px] bg-secondary/20 border-border focus:border-accent resize-none"
          defaultValue="Need to finish the project proposal by September 5th to secure the Q4 budget. The team is counting on this success to unlock new opportunities.

My goal is to maintain at least 7.5 intensity score daily to keep my streak alive. The gamification helps me stay focused and motivated.

Remember: Every productive day brings me closer to my yearly goals of skill mastery and career advancement."
        />
      </CardContent>
    </Card>
  );
};