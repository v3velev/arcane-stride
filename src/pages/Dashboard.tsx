import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flame, Calendar, FileText, Zap } from "lucide-react";
import { AscensionSessions } from "@/components/AscensionSessions";
import { HumanCapability } from "@/components/HumanCapability";
import { TaskManagement } from "@/components/TaskManagement";
import { WorkIntensityChart } from "@/components/WorkIntensityChart";
import { CalendarView } from "@/components/CalendarView";
import { MotivatorBox } from "@/components/MotivatorBox";
import { NewDayDialog } from "@/components/dialogs/NewDayDialog";
import { BeginAscensionDialog } from "@/components/dialogs/BeginAscensionDialog";
import { EndOfLifeDialog } from "@/components/dialogs/EndOfLifeDialog";

const Dashboard = () => {
  const [streakCount, setStreakCount] = useState(42);
  const [isAscensionActive, setIsAscensionActive] = useState(false);
  const [ascensionTimer, setAscensionTimer] = useState(0);
  const [showNewDayDialog, setShowNewDayDialog] = useState(false);
  const [showBeginAscensionDialog, setShowBeginAscensionDialog] = useState(false);
  const [showEndOfLifeDialog, setShowEndOfLifeDialog] = useState(false);

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold text-foreground">
            Sunday, August 31, 2025
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-streak rounded-lg glow-streak">
            <Flame className="w-5 h-5 text-white" />
            <span className="font-bold text-white">Streak {streakCount} days</span>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button 
            variant="secondary" 
            className="hover-glow"
            onClick={() => setShowNewDayDialog(true)}
          >
            New Day, New Opportunity
          </Button>
          <Button 
            variant="secondary" 
            className="hover-glow"
            onClick={() => setShowEndOfLifeDialog(true)}
          >
            End Of Life Report
          </Button>
          <Button variant="secondary" className="hover-glow">
            <Calendar className="w-4 h-4 mr-2" />
            Performance Calendar
          </Button>
          <Button 
            variant={isAscensionActive ? "destructive" : "default"}
            className={isAscensionActive ? "glow-streak pulse-glow" : "accent-gradient hover-glow"}
            onClick={() => {
              if (isAscensionActive) {
                // Complete ascension logic
                setIsAscensionActive(false);
                setAscensionTimer(0);
              } else {
                setShowBeginAscensionDialog(true);
              }
            }}
          >
            <Zap className="w-4 h-4 mr-2" />
            {isAscensionActive ? "Complete Ascension" : "Begin Ascension Opportunity"}
          </Button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-4 gap-6">
        {/* Left Column - Ascension Sessions */}
        <div className="col-span-2">
          <AscensionSessions />
        </div>
        
        {/* Right Column - Human Capability */}
        <div className="col-span-2">
          <HumanCapability />
        </div>
      </div>

      {/* Task Management Section */}
      <div className="w-full">
        <TaskManagement />
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Work Intensity Chart */}
        <div className="col-span-1">
          <WorkIntensityChart />
        </div>
        
        {/* Calendar View */}
        <div className="col-span-1">
          <CalendarView />
        </div>
        
        {/* Motivator Box */}
        <div className="col-span-1">
          <MotivatorBox />
        </div>
      </div>

      {/* Dialogs */}
      <NewDayDialog 
        open={showNewDayDialog} 
        onOpenChange={setShowNewDayDialog}
      />
      <BeginAscensionDialog 
        open={showBeginAscensionDialog} 
        onOpenChange={setShowBeginAscensionDialog}
        onBegin={() => {
          setIsAscensionActive(true);
          setShowBeginAscensionDialog(false);
        }}
      />
      <EndOfLifeDialog 
        open={showEndOfLifeDialog} 
        onOpenChange={setShowEndOfLifeDialog}
      />
    </div>
  );
};

export default Dashboard;