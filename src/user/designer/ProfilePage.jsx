import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Edit2, Camera, Bell, Clock, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const ProfilePage = () => {
  const [profile] = useState({
    name: 'Alex Johnson',
    role: 'Landscape Designer',
    email: 'alex.johnson@example.com',
    avatar: '/api/placeholder/128/128',
    projects: 24,
    completedDesigns: 18
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: false
  });

  const [recentActivity] = useState([
    {
      id: 1,
      type: 'design',
      title: 'Modern Garden Design',
      status: 'completed',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'project',
      title: 'Urban Rooftop Garden',
      status: 'in-progress',
      time: '1 day ago'
    },
    {
      id: 3,
      type: 'feedback',
      title: 'Client Feedback Received',
      status: 'notification',
      time: '2 days ago'
    }
  ]);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#F9F6F0] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#2D3B2D]">Profile</h1>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" /> Settings
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <button className="absolute bottom-0 right-0 p-2 bg-[#4A6741] rounded-full text-white hover:bg-[#2D3B2D]">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-[#2D3B2D]">{profile.name}</h2>
                <p className="text-gray-600">{profile.role}</p>
                <div className="mt-6 w-full grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white rounded-lg shadow">
                    <p className="text-2xl font-bold text-[#4A6741]">{profile.projects}</p>
                    <p className="text-sm text-gray-600">Projects</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <p className="text-2xl font-bold text-[#4A6741]">{profile.completedDesigns}</p>
                    <p className="text-sm text-gray-600">Completed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Edit2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Notification Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-600">Receive project updates via email</p>
                    </div>
                    <Switch 
                      checked={notifications.email}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, email: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-gray-600">Receive notifications in-app</p>
                    </div>
                    <Switch 
                      checked={notifications.push}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, push: checked }))
                      }
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div 
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-white rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    {activity.status === 'completed' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Clock className="w-5 h-5 text-[#4A6741]" />
                    )}
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    </>
  );
};

export default ProfilePage;