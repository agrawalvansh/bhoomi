import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LineChart, BarChart3, Calendar, Users, Leaf, 
  TrendingUp, Clock, PlusCircle 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import Navbar from './Navbar';
import { Progress } from "../../components/ui/progress";

const DesignerHome = () => {
  const [recentProjects] = useState([
    {
      id: 1,
      title: "Modern Zen Garden",
      client: "Sarah Johnson",
      progress: 75,
      deadline: "2024-03-01",
      thumbnail: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Urban Rooftop Oasis",
      client: "Michael Chen",
      progress: 45,
      deadline: "2024-03-15",
      thumbnail: "https://images.unsplash.com/photo-1598901796257-7fe9b193e47b?w=800&auto=format&fit=crop"
    }
  ]);

  const [metrics] = useState({
    activeProjects: 8,
    completedThisMonth: 4,
    clientSatisfaction: 92,
    averageProjectTime: "18 days"
  });

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#F9F6F0] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Welcome Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#2D3B2D]">Welcome Back, Designer</h1>
            <p className="text-gray-600 mt-2">Here's what's happening with your projects today</p>
          </div>
          <Button className="bg-[#4A6741] hover:bg-[#2D3B2D]">
            <PlusCircle className="w-4 h-4 mr-2" /> New Project
          </Button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Projects</p>
                  <p className="text-2xl font-bold text-[#2D3B2D]">{metrics.activeProjects}</p>
                </div>
                <div className="p-3 bg-[#4A6741] bg-opacity-10 rounded-full">
                  <LineChart className="w-6 h-6 text-[#4A6741]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed This Month</p>
                  <p className="text-2xl font-bold text-[#2D3B2D]">{metrics.completedThisMonth}</p>
                </div>
                <div className="p-3 bg-[#D4B982] bg-opacity-10 rounded-full">
                  <BarChart3 className="w-6 h-6 text-[#D4B982]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                  <p className="text-2xl font-bold text-[#2D3B2D]">{metrics.clientSatisfaction}%</p>
                </div>
                <div className="p-3 bg-[#A8C69F] bg-opacity-10 rounded-full">
                  <Users className="w-6 h-6 text-[#A8C69F]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg. Project Time</p>
                  <p className="text-2xl font-bold text-[#2D3B2D]">{metrics.averageProjectTime}</p>
                </div>
                <div className="p-3 bg-[#1B4D3E] bg-opacity-10 rounded-full">
                  <Clock className="w-6 h-6 text-[#1B4D3E]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Projects Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentProjects.map(project => (
                    <div key={project.id} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#2D3B2D]">{project.title}</h3>
                          <p className="text-sm text-gray-600">Client: {project.client}</p>
                          <div className="mt-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>
                          <div className="mt-4 flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-1" />
                            Due: {new Date(project.deadline).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Link to="/designer/design-hub" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
                    <div className="p-3 bg-[#4A6741] bg-opacity-10 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-[#4A6741]" />
                    </div>
                    <p className="text-sm font-medium">New Design</p>
                  </Link>
                  <Link to="/designer/profile" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
                    <div className="p-3 bg-[#D4B982] bg-opacity-10 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#D4B982]" />
                    </div>
                    <p className="text-sm font-medium">Profile</p>
                  </Link>
                  <Link to="/designer/budget" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
                    <div className="p-3 bg-[#1B4D3E] bg-opacity-10 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-[#1B4D3E]" />
                    </div>
                    <p className="text-sm font-medium">Budget Tools</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm"><span className="font-medium">Sarah Johnson</span> approved the design changes</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm"><span className="font-medium">Michael Chen</span> requested revisions</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map(project => (
                    <div key={project.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{project.title}</p>
                        <p className="text-xs text-gray-500">Due {new Date(project.deadline).toLocaleDateString()}</p>
                      </div>
                      <Progress value={project.progress} className="w-20 h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default DesignerHome;