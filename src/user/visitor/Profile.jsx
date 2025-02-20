import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Star,
  Clock,
  FileText,
  Settings,
  Camera
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from './Header';

const performanceData = [
  { month: 'Jan', completions: 45, satisfaction: 4.8 },
  { month: 'Feb', completions: 52, satisfaction: 4.9 },
  { month: 'Mar', completions: 48, satisfaction: 4.7 },
  { month: 'Apr', completions: 55, satisfaction: 4.8 },
  { month: 'May', completions: 49, satisfaction: 4.9 }
];

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    address: '123 Service Street, City, State',
    bio: 'Experienced service professional with 5+ years in landscape maintenance and customer service.',
    specializations: ['Landscape Design', 'Garden Maintenance', 'Irrigation Systems']
  });

  return (
    <div className="min-h-screen bg-[#F9F6F0] p-6">
        <Header />
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-[#D4B982] flex items-center justify-center">
                  <User className="w-12 h-12 text-[#2D3B2D]" />
                </div>
                <Button 
                  size="icon" 
                  className="absolute bottom-0 right-0 rounded-full bg-[#2D3B2D]"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-[#2D3B2D]">
                      {profileData.name}
                    </h2>
                    <p className="text-[#4A6741]">Service Professional</p>
                  </div>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-[#D4B982] hover:bg-[#F3E5AB] text-[#2D3B2D]"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </Button>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-[#4A6741]">
                    <Mail className="w-4 h-4" />
                    {isEditing ? (
                      <Input 
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="max-w-xs"
                      />
                    ) : (
                      <span>{profileData.email}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[#4A6741]">
                    <Phone className="w-4 h-4" />
                    {isEditing ? (
                      <Input 
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="max-w-xs"
                      />
                    ) : (
                      <span>{profileData.phone}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[#4A6741]">
                    <MapPin className="w-4 h-4" />
                    {isEditing ? (
                      <Input 
                        value={profileData.address}
                        onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                        className="max-w-xs"
                      />
                    ) : (
                      <span>{profileData.address}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-[#2D3B2D] text-white">
            <TabsTrigger 
              value="overview"
              className="data-[state=active]:bg-[#4A6741]"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="performance"
              className="data-[state=active]:bg-[#4A6741]"
            >
              Performance
            </TabsTrigger>
            <TabsTrigger 
              value="schedule"
              className="data-[state=active]:bg-[#4A6741]"
            >
              Schedule
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Bio Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2D3B2D]">About</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Textarea 
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    className="min-h-[100px]"
                  />
                ) : (
                  <p className="text-[#4A6741]">{profileData.bio}</p>
                )}
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2D3B2D]">Specializations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.specializations.map((spec, index) => (
                    <Badge key={index} className="bg-[#A8C69F] text-[#2D3B2D]">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#F3E5AB] rounded-lg">
                      <Award className="w-6 h-6 text-[#2D3B2D]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#4A6741]">Completion Rate</p>
                      <p className="text-2xl font-bold text-[#2D3B2D]">98%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#F3E5AB] rounded-lg">
                      <Star className="w-6 h-6 text-[#2D3B2D]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#4A6741]">Average Rating</p>
                      <p className="text-2xl font-bold text-[#2D3B2D]">4.8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#F3E5AB] rounded-lg">
                      <Clock className="w-6 h-6 text-[#2D3B2D]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#4A6741]">Response Time</p>
                      <p className="text-2xl font-bold text-[#2D3B2D]">
                        &lt; 30 min
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2D3B2D]">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="completions"
                        stroke="#2D3B2D"
                        name="Completions"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="satisfaction"
                        stroke="#D4B982"
                        name="Satisfaction"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2D3B2D]">Recent Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-1">
                              {Array(5).fill(0).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < 4 ? 'fill-[#D4B982] text-[#D4B982]' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-sm text-[#4A6741] mt-1">
                              "Great service, very professional!"
                            </p>
                          </div>
                          <span className="text-sm text-[#4A6741]">2 days ago</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2D3B2D]">Service History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((service) => (
                      <div key={service} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                        <div className="p-2 bg-[#F3E5AB] rounded">
                          <FileText className="w-4 h-4 text-[#2D3B2D]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-[#2D3B2D]">
                            Garden Maintenance
                          </p>
                          <p className="text-sm text-[#4A6741]">
                            Completed on May {service}, 2025
                          </p>
                        </div>
                        <Badge className="bg-[#A8C69F] text-[#2D3B2D]">
                          Completed
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2D3B2D]">Weekly Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="text-center">
                      <div className="font-medium text-[#4A6741] mb-2">{day}</div>
                      <div className="space-y-2">
                        {Array(Math.floor(Math.random() * 3) + 1).fill(0).map((_, i) => (
                          <div
                            key={i}
                            className="p-2 text-xs bg-[#A8C69F] rounded text-[#2D3B2D]"
                          >
                            {9 + i * 2}:00 AM
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;