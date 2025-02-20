import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card.jsx";
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Award, 
  Target, 
  TrendingUp,
  CheckCircle,
  Clock,
  FileText
} from 'lucide-react';
import NavBar from './NavBar.jsx';
const colors = {
  primary: '#2D3B2D',
  secondary: '#D4B982',
  tertiary: '#4A6741',
  background: '#F9F6F0',
  accent: '#A8C69F',
  deep: '#1B4D3E',
  highlight: '#F3E5AB'
};

const performanceData = [
  { month: 'Jan', efficiency: 92, accuracy: 95 },
  { month: 'Feb', efficiency: 94, accuracy: 93 },
  { month: 'Mar', efficiency: 91, accuracy: 96 },
  { month: 'Apr', efficiency: 95, accuracy: 94 },
  { month: 'May', efficiency: 93, accuracy: 97 },
  { month: 'Jun', efficiency: 96, accuracy: 95 }
];

const ProductManagerProfile = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <NavBar />  
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-tertiary rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary">Sarah Johnson</h1>
                  <p className="text-tertiary">Senior Product Manager</p>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>sarah.j@company.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="text-primary">Performance Overview</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-tertiary" />
                      <span>Goals Achieved</span>
                    </div>
                    <span className="font-medium">94%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-tertiary" />
                      <span>Productivity</span>
                    </div>
                    <span className="font-medium">96%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Current Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-highlight">
              <CardHeader className="border-b">
                <CardTitle className="text-primary">Active Projects</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Inventory Optimization</span>
                    <span className="text-deep font-medium">In Progress</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Supplier Integration</span>
                    <span className="text-deep font-medium">Planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Work Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="text-primary">Work Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-tertiary" />
                      <span>Tasks Completed</span>
                    </div>
                    <span className="font-medium">145</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-tertiary" />
                      <span>Avg Response Time</span>
                    </div>
                    <span className="font-medium">2.5 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Performance Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Performance Trends</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px] w-full">
                <LineChart
                  width={800}
                  height={300}
                  data={performanceData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="efficiency" 
                    stroke={colors.primary} 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="accuracy" 
                    stroke={colors.secondary} 
                    strokeWidth={2}
                  />
                </LineChart>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Certifications & Skills</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-tertiary" />
                  <span>PMP Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-tertiary" />
                  <span>Agile Scrum Master</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-tertiary" />
                  <span>Six Sigma Green Belt</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-tertiary" />
                  <div>
                    <p className="font-medium">Supplier Review Meeting</p>
                    <p className="text-sm text-gray-600">Yesterday at 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-tertiary" />
                  <div>
                    <p className="font-medium">Q2 Planning Document</p>
                    <p className="text-sm text-gray-600">Updated 2 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductManagerProfile;