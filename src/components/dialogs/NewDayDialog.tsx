import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";
import { useState } from "react";

interface NewDayDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const mockTasks = [
  "Complete project proposal", 
  "Review team performance", 
  "Update documentation",
  "Client consultation",
  "Code review session"
];

export const NewDayDialog = ({ open, onOpenChange }: NewDayDialogProps) => {
  const [mindEnergyBehaviour, setMindEnergyBehaviour] = useState("");
  const [tasksToday, setTasksToday] = useState("");
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const handleTaskToggle = (task: string) => {
    setSelectedTasks(prev => 
      prev.includes(task) 
        ? prev.filter(t => t !== task)
        : [...prev, task]
    );
  };

  const handleSubmit = () => {
    // Save to database logic would go here
    console.log("Day data:", { mindEnergyBehaviour, tasksToday, selectedTasks });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl card-glow">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gradient">New Day, New Opportunity</DialogTitle>
          <DialogDescription>
            Start your day by reflecting on your current state and setting your intentions.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* A. Day so far - Mind, Energy, Behaviour */}
          <div className="space-y-3">
            <Label className="text-lg font-medium">A. Day so far - Mind, Energy, Behaviour</Label>
            <Textarea
              placeholder="How are you feeling mentally, physically, and behaviorally right now?"
              value={mindEnergyBehaviour}
              onChange={(e) => setMindEnergyBehaviour(e.target.value)}
              className="min-h-[100px] bg-secondary/20 border-border focus:border-accent"
            />
          </div>

          {/* B. Tasks Today */}
          <div className="space-y-3">
            <Label className="text-lg font-medium">B. Tasks Today</Label>
            
            {/* Pre-made tasks */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Select from existing tasks:</span>
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

            {/* Free text for tasks */}
            <Textarea
              placeholder="Describe your tasks for today in your own words..."
              value={tasksToday}
              onChange={(e) => setTasksToday(e.target.value)}
              className="min-h-[120px] bg-secondary/20 border-border focus:border-accent"
            />
            
            {/* Show selected tasks mixed with text */}
            {selectedTasks.length > 0 && (
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <span className="text-sm text-muted-foreground">Selected tasks: </span>
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
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="hover-glow">
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="accent-gradient hover-glow">
            Start Today's Journey
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};