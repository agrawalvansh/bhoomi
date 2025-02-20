import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { 
  Timer, 
  CheckCircle2, 
  Play, 
  Pause, 
  Upload,
  Camera,
  QrCode,
  AlertCircle,
  ClipboardCheck,
  ChevronRight,
  Info,
  AlertTriangle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Progress } from "../../components/ui/progress";
import { Badge } from "../../components/ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../../components/ui/tooltip";
import Header from '../gardener/Header';
// Service Execution Page
const ServiceExecution = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, task: "Initial site inspection", completed: false },
    { id: 2, task: "Prune overgrown plants", completed: false },
    { id: 3, task: "Remove weeds", completed: false },
    { id: 4, task: "Check soil moisture", completed: false },
    { id: 5, task: "Water plants as needed", completed: false },
    { id: 6, task: "Apply fertilizer", completed: false },
    { id: 7, task: "Clean up work area", completed: false }
  ]);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = (tasks.filter(t => t.completed).length / tasks.length) * 100;

  return (<>
  <Header />
    <div className="min-h-screen bg-[#F9F6F0] p-4 md:p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Service Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#2D3B2D]">Garden Maintenance Service</h1>
          <div className="flex items-center gap-2 text-sm text-[#4A6741]">
            <Info className="w-4 h-4" />
            <span>Location: 123 Green Street • Today, {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Timer Card */}
        <Card className="shadow-sm">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Timer className="w-6 h-6 text-[#4A6741]" />
                <div>
                  <p className="text-sm text-[#4A6741]">Service Duration</p>
                  <p className="text-2xl font-bold text-[#2D3B2D]">
                    {formatTime(timer)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={isTimerRunning ? "default" : "secondary"} className="bg-[#4A6741]">
                  {isTimerRunning ? "Tracking" : "Paused"}
                </Badge>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="lg"
                      className={`rounded-full ${isTimerRunning ? "bg-[#D4B982] hover:bg-[#C2A875]" : "bg-[#2D3B2D] hover:bg-[#3A4A3A]"}`}
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                    >
                      {isTimerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {isTimerRunning ? "Pause timer" : "Start timer"}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Task Progress */}
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-[#4A6741]" />
                  <span className="text-sm font-medium text-[#4A6741]">Task Progress</span>
                </div>
                <span className="text-sm font-semibold text-[#2D3B2D]">
                  {tasks.filter(t => t.completed).length} of {tasks.length} completed
                </span>
              </div>
              <Progress value={progress} className="h-3 bg-[#A8C69F]" />
              <div className="text-right text-sm text-[#4A6741]">
                {Math.round(progress)}% Complete
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checklist */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-[#2D3B2D] flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5" />
              Service Checklist
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="space-y-3">
              {tasks.map((task) => (
                <div 
                  key={task.id} 
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${task.completed ? 'bg-[#E8F5E9]' : 'hover:bg-[#F3E5AB]'}`}
                  onClick={() => {
                    setTasks(tasks.map(t => 
                      t.id === task.id ? {...t, completed: !t.completed} : t
                    ));
                  }}
                >
                  <Checkbox
                    id={`task-${task.id}`}
                    checked={task.completed}
                    className="h-5 w-5 mr-3"
                  />
                  <Label 
                    htmlFor={`task-${task.id}`}
                    className={`text-[#4A6741] flex-1 ${task.completed ? 'line-through opacity-75' : ''}`}
                  >
                    {task.task}
                  </Label>
                  <ChevronRight className="w-4 h-4 text-[#4A6741]" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Button 
          className="w-full bg-[#2D3B2D] hover:bg-[#4A6741] h-12"
          onClick={() => navigate('../quality-check')}
          disabled={progress < 100}
        >
          <span>Proceed to Quality Check</span>
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
    </>
  );
};

// Quality Check Page
const QualityCheck = () => {
  const navigate = useNavigate();
  const [qualityChecks, setQualityChecks] = useState([
    { id: 1, check: "Plant stability and secure placement", completed: false },
    { id: 2, check: "Proper pruning technique applied", completed: false },
    { id: 3, check: "Soil moisture levels appropriate", completed: false },
    { id: 4, check: "Design matches customer requirements", completed: false },
    { id: 5, check: "Work area cleaned and organized", completed: false }
  ]);

  return (
    <>
    <Header />
    <div className="min-h-screen bg-[#F9F6F0] p-4 md:p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Service Header */}
        <div className="space-y-2">
          <Button 
            variant="link" 
            className="text-[#4A6741] p-0" 
            onClick={() => navigate(-1)}
          >
            ← Back to Tasks
          </Button>
          <h1 className="text-2xl font-bold text-[#2D3B2D]">Quality Assurance</h1>
        </div>

        {/* Quality Checklist */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3B2D] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Quality Inspection
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="space-y-3">
              {qualityChecks.map((check) => (
                <div 
                  key={check.id} 
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${check.completed ? 'bg-[#E8F5E9]' : 'hover:bg-[#F3E5AB]'}`}
                  onClick={() => {
                    setQualityChecks(qualityChecks.map(c => 
                      c.id === check.id ? {...c, completed: !c.completed} : c
                    ));
                  }}
                >
                  <Checkbox
                    id={`quality-${check.id}`}
                    checked={check.completed}
                    className="h-5 w-5 mr-3"
                  />
                  <Label 
                    htmlFor={`quality-${check.id}`}
                    className={`text-[#4A6741] flex-1 ${check.completed ? 'line-through opacity-75' : ''}`}
                  >
                    {check.check}
                  </Label>
                  <ChevronRight className="w-4 h-4 text-[#4A6741]" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Care Guides */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3B2D] flex items-center gap-2">
              <QrCode className="w-5 h-5" />
              Digital Care Guides
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { id: 1, title: "Rose Care Guide", desc: "Pruning & watering instructions" },
                { id: 2, title: "Lawn Maintenance", desc: "Seasonal care schedule" },
                { id: 3, title: "Tree Health", desc: "Disease prevention guide" },
                { id: 4, title: "Soil Management", desc: "pH balancing & fertilization" }
              ].map((guide) => (
                <div 
                  key={guide.id} 
                  className="flex items-center gap-4 p-4 border rounded-lg hover:bg-[#F3E5AB] transition-colors cursor-pointer"
                >
                  <QrCode className="w-8 h-8 text-[#4A6741]" />
                  <div>
                    <h3 className="font-medium text-[#2D3B2D]">{guide.title}</h3>
                    <p className="text-sm text-[#4A6741]">{guide.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Button 
          className="w-full bg-[#2D3B2D] hover:bg-[#4A6741] h-12"
          onClick={() => navigate('../completion')}
          disabled={qualityChecks.filter(c => c.completed).length !== qualityChecks.length}
        >
          <span>Complete Quality Check</span>
          <CheckCircle2 className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  </>
  );
};

// Task Completion Page
const TaskCompletion = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({
    customerComments: '',
    personalNotes: '',
    issues: ''
  });
  const [photos, setPhotos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map(file => URL.createObjectURL(file));
    setPhotos(prev => [...prev, ...newPhotos]);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    navigate('/gardener/home');
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-[#F9F6F0] p-4 md:p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Service Header */}
        <div className="space-y-2">
          <Button 
            variant="link" 
            className="text-[#4A6741] p-0" 
            onClick={() => navigate(-1)}
          >
            ← Back to Quality Check
          </Button>
          <h1 className="text-2xl font-bold text-[#2D3B2D]">Service Completion</h1>
        </div>

        {/* Photo Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3B2D] flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Work Documentation
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {photos.map((photo, index) => (
                <div key={index} className="aspect-square relative">
                  <img 
                    src={photo} 
                    alt={`Work photo ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-500/80 hover:bg-red-600/90 text-white"
                    onClick={() => setPhotos(photos.filter((_, i) => i !== index))}
                  >
                    ×
                  </Button>
                </div>
              ))}
              <label 
                htmlFor="photo-upload"
                className="aspect-square border-2 border-dashed border-[#4A6741] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#F3E5AB] transition-colors"
              >
                <Camera className="w-8 h-8 text-[#4A6741] mb-2" />
                <span className="text-sm text-center text-[#4A6741]">
                  Upload Photos<br />(Max 9)
                </span>
                <input 
                  id="photo-upload"
                  type="file" 
                  multiple 
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Feedback Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3B2D] flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5" />
              Service Feedback
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 space-y-4">
            <div>
              <Label className="text-[#4A6741] flex items-center gap-1">
                Customer Comments
                <span className="text-red-500">*</span>
              </Label>
              <Textarea 
                placeholder="Enter customer feedback..."
                value={feedback.customerComments}
                onChange={(e) => setFeedback({...feedback, customerComments: e.target.value})}
                className="min-h-[100px]"
                required
              />
            </div>
            <div>
              <Label className="text-[#4A6741]">Personal Notes</Label>
              <Textarea 
                placeholder="Add your notes about the service..."
                value={feedback.personalNotes}
                onChange={(e) => setFeedback({...feedback, personalNotes: e.target.value})}
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Issue Reporting */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3B2D] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Issue Reporting
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 space-y-4">
            <div className="flex items-start gap-2 p-3 bg-[#FFF3CD] rounded-lg">
              <AlertCircle className="w-5 h-5 text-[#856404] flex-shrink-0" />
              <p className="text-sm text-[#856404]">
                Please report any unresolved issues or special circumstances encountered during the service.
              </p>
            </div>
            <Textarea 
              placeholder="Describe any issues or concerns..."
              value={feedback.issues}
              onChange={(e) => setFeedback({...feedback, issues: e.target.value})}
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        <Button 
          className="w-full bg-[#2D3B2D] hover:bg-[#4A6741] h-12"
          onClick={handleSubmit}
          disabled={isSubmitting || !feedback.customerComments}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </div>
          ) : (
            'Mark Service as Completed'
          )}
        </Button>
      </div>
    </div>
    </>
  );
};

// Router Component
const GardenerServiceRouter = () => {
  return (
    <TooltipProvider>
      <Routes>
        <Route path="/" element={<ServiceExecution />} />
        <Route path="/quality-check" element={<QualityCheck />} />
        <Route path="/completion" element={<TaskCompletion />} />
      </Routes>
    </TooltipProvider>
  );
};

export default GardenerServiceRouter;