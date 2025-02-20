import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CalendarDays, 
  MapPin, 
  Clock, 
  Sunrise,
  ThermometerSun,
  Wind,
  Droplets,
  AlertTriangle,
  Users,
  ChevronRight,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { FiTool } from 'react-icons/fi';
import Header from '../gardener/Header';

const GardenerHome = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const tasks = [
    {
      id: 1,
      time: "09:00 AM",
      client: "Sarah Johnson",
      address: "123 Pine Street",
      service: "Garden Maintenance",
      duration: "2 hours",
      isUrgent: true,
      tools: ["Pruning shears", "Leaf blower", "Garden fork"],
      preferences: "Prefer organic fertilizers only",
      status: "pending"
    },
    {
      id: 2,
      time: "11:30 AM",
      client: "Michael Brown",
      address: "456 Oak Avenue",
      service: "Lawn Mowing",
      duration: "1.5 hours",
      isUrgent: false,
      tools: ["Lawn mower", "Edge trimmer", "Rake"],
      preferences: "Cut grass to 2.5 inches height",
      status: "pending"
    },
    {
      id: 3,
      time: "02:00 PM",
      client: "Emma Davis",
      address: "789 Maple Road",
      service: "Plant Installation",
      duration: "3 hours",
      isUrgent: false,
      tools: ["Shovel", "Wheelbarrow", "Garden trowel"],
      preferences: "Specific layout plan provided",
      status: "pending"
    }
  ];

  const weather = {
    temperature: "72°F",
    sunrise: "6:45 AM",
    wind: "8 mph",
    precipitation: "20%"
  };

  const handleStartService = (taskId) => {
    // In a real app, we would update the task status in the backend
    navigate(`/gardener/service/`);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      <Header />
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#2D3B2D]">Welcome, Gardener</h1>
          <Button 
            variant="outline" 
            className="border-[#4A6741] text-[#4A6741] hover:bg-[#4A6741] hover:text-white"
            onClick={() => navigate('/gardener/profile')}
          >
            View Profile
          </Button>
        </div>

        {/* Weather Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2D3B2D] flex items-center gap-2">
              Today's Weather
              {isLoading && <span className="text-sm text-[#4A6741]">(Loading...)</span>}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-[#4A6741]">
                <ThermometerSun className="w-5 h-5" />
                <span>{weather.temperature}</span>
              </div>
              <div className="flex items-center gap-2 text-[#4A6741]">
                <Sunrise className="w-5 h-5" />
                <span>{weather.sunrise}</span>
              </div>
              <div className="flex items-center gap-2 text-[#4A6741]">
                <Wind className="w-5 h-5" />
                <span>{weather.wind}</span>
              </div>
              <div className="flex items-center gap-2 text-[#4A6741]">
                <Droplets className="w-5 h-5" />
                <span>{weather.precipitation}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Schedule */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-[#2D3B2D]">Today's Schedule</CardTitle>
              <Badge variant="outline" className="bg-[#F9F6F0] text-[#4A6741] border-[#4A6741]">
                {tasks.length} Tasks Today
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {tasks.length === 0 ? (
              <div className="text-center py-8">
                <Calendar className="w-12 h-12 text-[#4A6741] mx-auto mb-2" />
                <p className="text-[#4A6741]">No tasks scheduled for today</p>
              </div>
            ) : (
              <div className="space-y-4">
                {tasks.map((task) => (
                  <Card key={task.id} className="border-l-4 border-l-[#4A6741]">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4 text-[#4A6741]" />
                          <span className="font-medium">{task.time}</span>
                        </div>
                        {task.isUrgent && (
                          <Badge className="bg-[#D4B982]">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            Urgent
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-medium text-[#2D3B2D] mb-2">{task.service}</h3>
                      
                      <div className="grid gap-2 text-sm text-[#4A6741]">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{task.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{task.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{task.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiTool  className="w-4 h-4" />
                          <span>{task.tools.join(", ")}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-sm text-[#4A6741] italic">
                          {task.preferences}
                        </p>
                        <Button 
                          className="bg-[#2D3B2D] hover:bg-[#4A6741]"
                          onClick={() => handleStartService(task.id)}
                        >
                          Start Service
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GardenerHome;