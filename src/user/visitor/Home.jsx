import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, Search, PlusCircle, ClipboardList, CalendarDays, MapPin, Activity, CalendarCheck, TrendingUp, Calendar, Users } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { cn } from '../../lib/utils';
import Header from '../visitor/Header';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Real-time clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format date with ordinal indicator
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Enhanced performance data with goals
  const performanceData = [
    { name: 'Mon', completion: 85, satisfaction: 90, response: 95, goal: 90 },
    { name: 'Tue', completion: 88, satisfaction: 85, response: 92, goal: 90 },
    { name: 'Wed', completion: 92, satisfaction: 88, response: 88, goal: 90 },
    { name: 'Thu', completion: 90, satisfaction: 92, response: 90, goal: 90 },
    { name: 'Fri', completion: 95, satisfaction: 95, response: 94, goal: 90 }
  ];

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
          <p className="font-bold text-[#2D3B2D]">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="flex items-center gap-2" style={{ color: entry.color }}>
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] p-6">
      {/* Header Section */}
      <Header />
      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Today's Schedule */}
          <Card>
            <CardHeader className="border-b border-[#E5E7EB]">
              <CardTitle className="text-[#2D3B2D] flex items-center gap-2">
                <CalendarDays className="w-5 h-5" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="p-4 rounded-lg bg-[#FFFDF9] border border-[#E5E7EB]">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={cn(
                          'text-xs',
                          index === 0 ? 'bg-[#D4B982]' : 'bg-[#A8C69F]'
                        )}>
                          {index === 0 ? 'In Progress' : 'Scheduled'}
                        </Badge>
                        <span className="text-sm text-[#4A6741]">
                          {index === 0 ? '09:00 AM' : index === 1 ? '11:30 AM' : '02:00 PM'}
                        </span>
                      </div>
                      <h3 className="font-medium text-[#1B4D3E]">Customer Name {index + 1}</h3>
                      <div className="flex items-center gap-2 text-sm text-[#4A6741] mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>123 Main St, Suite {100 + index}</span>
                      </div>
                      <div className="mt-2 text-sm text-[#6B7280]">
                        Service: {['Haircut', 'Coloring', 'Treatment'][index]}
                      </div>
                    </div>
                    <Button className={cn(
                      'self-center',
                      index === 0 ? 'bg-[#2D3B2D] hover:bg-[#4A6741]' : 'bg-[#D4B982] hover:bg-[#F3E5AB]'
                    )}>
                      {index === 0 ? 'Resume' : 'Start'}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader className="border-b border-[#E5E7EB]">
              <CardTitle className="text-[#2D3B2D] flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#4A6741' }}
                      axisLine={{ stroke: '#E5E7EB' }}
                    />
                    <YAxis 
                      tickFormatter={(value) => `${value}%`}
                      tick={{ fill: '#4A6741' }}
                      axisLine={{ stroke: '#E5E7EB' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="completion" 
                      stroke="#2D3B2D" 
                      strokeWidth={2}
                      dot={{ fill: '#2D3B2D', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="satisfaction" 
                      stroke="#D4B982" 
                      strokeWidth={2}
                      dot={{ fill: '#D4B982', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="response" 
                      stroke="#4A6741" 
                      strokeWidth={2}
                      dot={{ fill: '#4A6741', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="goal" 
                      stroke="#E5E7EB" 
                      strokeDasharray="5 5"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard 
              title="Today's Appointments"
              value="3"
              icon={<CalendarCheck className="w-6 h-6" />}
              color="#D4B982"
            />
            <StatCard 
              title="Completion Rate"
              value="92%"
              icon={<TrendingUp className="w-6 h-6" />}
              color="#4A6741"
            />
          </div>

          {/* Calendar */}
          <Card>
            <CardHeader className="border-b border-[#E5E7EB]">
              <CardTitle className="text-[#2D3B2D] flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Service Calendar
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-7 gap-1 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-sm font-medium text-[#4A6741] py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => {
                  const date = new Date();
                  date.setDate(i + 1);
                  const isCurrent = i + 1 === currentTime.getDate();
                  return (
                    <div
                      key={i}
                      className={cn(
                        'aspect-square p-2 rounded-lg cursor-pointer transition-colors',
                        isCurrent ? 'bg-[#2D3B2D] text-white' : 'hover:bg-[#F3E5AB]',
                        selectedDate === i + 1 ? 'border-2 border-[#4A6741]' : 'border border-[#E5E7EB]'
                      )}
                      onClick={() => setSelectedDate(i + 1)}
                    >
                      {i + 1}
                      {i % 7 === 0 && <span className="block text-xs text-red-500">2 apps</span>}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Customers */}
          <Card>
            <CardHeader className="border-b border-[#E5E7EB]">
              <CardTitle className="text-[#2D3B2D] flex items-center gap-2">
                <Users className="w-5 h-5" />
                Recent Clients
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`/avatar-${i + 1}.jpg`} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-[#1B4D3E]">Client Name {i + 1}</h4>
                    <p className="text-sm text-[#6B7280]">Last visit: 2 days ago</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Additional components
const StatCard = ({ title, value, icon, color }) => (
  <Card className="bg-white">
    <CardContent className="p-4 flex items-center justify-between">
      <div>
        <p className="text-sm text-[#6B7280]">{title}</p>
        <p className="text-2xl font-bold mt-1" style={{ color }}>{value}</p>
      </div>
      <div className="p-3 rounded-full" style={{ backgroundColor: color + '20' }}>
        {icon}
      </div>
    </CardContent>
  </Card>
);

export default Dashboard;