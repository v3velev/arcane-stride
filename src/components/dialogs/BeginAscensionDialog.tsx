import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Zap } from "lucide-react";
import { useState } from "react";

interface BeginAscensionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBegin: () => void;
}

const mockTasks = [
  "Complete project proposal", 
  "Review team performance", 
  "Update documentation",
  "Client consultation",
  "Code review session",
  "Write blog post",
  "Design mockups"
];

export const BeginAscensionDialog = ({ open, onOpenChange, onBegin }: BeginAscensionDialogProps) => {
  const [takeAim, setTakeAim] = useState("");
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const handleTaskToggle = (task: string) => {
    setSelectedTasks(prev => 
      prev.includes(task) 
        ? prev.filter(t => t !== task)
        : [...prev, task]
    );
  };

  const handleBeginAscension = () => {
    // Save the aim and tasks to database
    console.log("Ascension started:", { takeAim, selectedTasks });
    onBegin();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl card-glow">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gradient flex items-center gap-2">
            <Zap className="w-6 h-6 text-accent" />
            Begin Ascension Opportunity
          </DialogTitle>
          <DialogDescription>
            Focus your energy and define what you want to accomplish in this work session.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* A. Take Aim */}
          <div className="space-y-3">
            <Label className="text-lg font-medium">A. Take Aim</Label>
            <p className="text-sm text-muted-foreground">
              What are you trying to accomplish during this work block?
            </p>
            
            {/* Pre-made tasks */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Select relevant tasks:</span>
                <Button size="sm" variant="outline" className="hover-glow">
                  <Plus className="w-4 h-4 mr-1" />
                  Create New Task
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {mockTasks.map((task) => (
                  <Badge
                    key={task}
                    variant={selectedTasks.includes(task) ? "default" : "outline"}
                    className={`cursor-pointer hover-glow ${
                      selectedTasks.includes(task) ? 'accent-gradient' : ''
                    }`}
                    onClick={() => handleTaskToggle(task)}
                  >
                    {task}
                    {selectedTasks.includes(task) && (
                      <X className="w-3 h-3 ml-1" />
                    )}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Free text for aim */}
            <Textarea
              placeholder="Describe your specific focus and goals for this work session..."
              value={takeAim}
              onChange={(e) => setTakeAim(e.target.value)}
              className="min-h-[120px] bg-secondary/20 border-border focus:border-accent"
            />
            
            {/* Show selected tasks */}
            {selectedTasks.length > 0 && (
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <span className="text-sm text-muted-foreground">Tasks to focus on: </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedTasks.map((task) => (
                    <Badge key={task} variant="outline" className="text-xs">
                      {task}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Motivation */}
          <div className="p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="font-medium text-accent">Ready to Ascend?</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Once you click "Begin Ascension", the timer will start and your focus session begins. 
              Stay dedicated and push your limits!
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="hover-glow">
            Cancel
          </Button>
          <Button 
            onClick={handleBeginAscension} 
            className="accent-gradient hover-glow pulse-glow"
            disabled={!takeAim.trim() && selectedTasks.length === 0}
          >
            <Zap className="w-4 h-4 mr-2" />
            Begin Ascension
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};