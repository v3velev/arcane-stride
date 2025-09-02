import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { GripVertical, Plus, History, Edit, Trash2, CheckCircle } from "lucide-react";

const mockTasks = [
  {
    id: 1,
    name: "Complete project proposal",
    description: "Finalize the Q4 project proposal with budget allocation",
    dueDate: "9/5/2024",
    createdDate: "8/30/2024",
    priority: "Urgent",
    completed: false
  },
  {
    id: 2,
    name: "Review team performance metrics", 
    description: "Analyze Q3 team performance and prepare feedback",
    dueDate: "9/3/2024",
    createdDate: "8/29/2024",
    priority: "Critical",
    completed: false
  },
  {
    id: 3,
    name: "Update documentation",
    description: "Update API documentation and user guides",
    dueDate: "9/7/2024", 
    createdDate: "8/28/2024",
    priority: "Medium",
    completed: false
  }
];

const completedTasks = [
  {
    name: "Complete project proposal",
    completedDate: "3 days ago",
    completion: "67%"
  },
  {
    name: "Review team performance", 
    completedDate: "3 days ago",
    completion: "67%"
  },
  {
    name: "Prepare presentation slides",
    completedDate: "3 days ago", 
    completion: "67%"
  },
  {
    name: "Client consultation call",
    completedDate: "2 days ago",
    completion: "67%"
  },
  {
    name: "Update project timeline",
    completedDate: "2 days ago",
    completion: "67%"
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority.toLowerCase()) {
    case 'urgent': return 'bg-destructive/20 text-destructive';
    case 'critical': return 'bg-warning/20 text-warning';
    case 'medium': return 'bg-accent/20 text-accent';
    default: return 'bg-muted text-muted-foreground';
  }
};

export const TaskManagement = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Task Management */}
      <div className="col-span-2">
        <Card className="card-glow">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-xl">
                <CheckCircle className="w-6 h-6 text-accent" />
                Task Management
              </CardTitle>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="hover-glow">
                  <History className="w-4 h-4 mr-1" />
                  History (1)
                </Button>
                <Button size="sm" className="accent-gradient hover-glow">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Task
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Drag tasks to reorder by priority. 3 active tasks</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockTasks.map((task, index) => (
              <div key={task.id} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group">
                <GripVertical className="w-5 h-5 text-muted-foreground cursor-grab" />
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <Checkbox />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-medium text-foreground">{task.name}</h3>
                    <p className="text-sm text-muted-foreground">{task.description}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>📅 Due: {task.dueDate}</span>
                      <span>Created: {task.createdDate}</span>
                    </div>
                  </div>
                </div>
                
                <Badge className={getPriorityColor(task.priority)}>
                  {task.priority}
                </Badge>
                
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Tasks Done Last Days */}
      <div className="col-span-1">
        <Card className="card-glow">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <CheckCircle className="w-5 h-5 text-success" />
              Tasks Done Last Days
            </CardTitle>
            <p className="text-sm text-muted-foreground">Track your daily task completion progress</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 3 days ago */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">📅 3 days ago</span>
                <span className="text-sm px-2 py-1 bg-warning/20 text-warning rounded">67% Complete</span>
              </div>
              <div className="progress-gradient h-1 rounded-full" style={{ width: '67%' }}></div>
              <div className="space-y-1 ml-2">
                {completedTasks.slice(0, 3).map((task, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span className="text-muted-foreground">{task.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 days ago */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">📅 2 days ago</span>
                <span className="text-sm px-2 py-1 bg-warning/20 text-warning rounded">67% Complete</span>
              </div>
              <div className="progress-gradient h-1 rounded-full" style={{ width: '67%' }}></div>
              <div className="space-y-1 ml-2">
                {completedTasks.slice(3, 5).map((task, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span className="text-muted-foreground">{task.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Yesterday */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">📅 Yesterday</span>
                <span className="text-sm px-2 py-1 bg-success/20 text-success rounded">75% Complete</span>
              </div>
              <div className="progress-gradient h-1 rounded-full" style={{ width: '75%' }}></div>
              <div className="space-y-1 ml-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-3 h-3 text-success" />
                  <span className="text-muted-foreground">Morning standup meeting</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-3 h-3 text-success" />
                  <span className="text-muted-foreground">Feature development</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-3 h-3 text-success" />
                  <span className="text-muted-foreground">Documentation update</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};