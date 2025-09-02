import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileText, Moon } from "lucide-react";
import { useState } from "react";

interface EndOfLifeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EndOfLifeDialog = ({ open, onOpenChange }: EndOfLifeDialogProps) => {
  const [feedback, setFeedback] = useState("");
  const [warPlan, setWarPlan] = useState("");

  const handleSubmit = () => {
    // Save to database logic would go here
    console.log("End of life report:", { feedback, warPlan });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl card-glow">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gradient flex items-center gap-2">
            <Moon className="w-6 h-6 text-accent" />
            End Of Life Report
          </DialogTitle>
          <DialogDescription>
            Reflect on today's journey and prepare your strategy for tomorrow's conquest.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* A. Feedback on today's opportunities */}
          <div className="space-y-3">
            <Label className="text-lg font-medium">A. Feedback on today's opportunities</Label>
            <p className="text-sm text-muted-foreground">
              How did today go? What worked well and what could be improved?
            </p>
            <Textarea
              placeholder="Reflect on your performance, achievements, challenges, and lessons learned today..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[150px] bg-secondary/20 border-border focus:border-accent"
            />
          </div>

          {/* B. War plan tomorrow */}
          <div className="space-y-3">
            <Label className="text-lg font-medium">B. War plan tomorrow</Label>
            <p className="text-sm text-muted-foreground">
              What's your strategic plan and mindset for tomorrow's challenges?
            </p>
            <Textarea
              placeholder="Outline your strategy, priorities, and intentions for tomorrow..."
              value={warPlan}
              onChange={(e) => setWarPlan(e.target.value)}
              className="min-h-[150px] bg-secondary/20 border-border focus:border-accent"
            />
          </div>

          {/* Completion Message */}
          <div className="p-4 bg-gradient-to-r from-success/10 to-accent/10 rounded-lg border border-success/20">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-success" />
              <span className="font-medium text-success">Complete Your Day</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Take a moment to acknowledge your efforts today. Every completed day is a step closer to your goals. 
              Rest well and prepare for tomorrow's opportunities.
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="hover-glow">
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            className="primary-gradient hover-glow"
            disabled={!feedback.trim() || !warPlan.trim()}
          >
            <FileText className="w-4 h-4 mr-2" />
            Complete Day
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};