import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { BarChart, LineChart, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';
import { Package, Clock, TrendingUp, CheckCircle } from 'lucide-react';
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

const orderData = [
  { date: 'Mon', pending: 12, completed: 8 },
  { date: 'Tue', pending: 15, completed: 10 },
  { date: 'Wed', pending: 8, completed: 12 },
  { date: 'Thu', pending: 10, completed: 9 },
  { date: 'Fri', pending: 14, completed: 11 }
];

const OrderPrep = () => {
  return (
    <div className="min-h-screen bg-background p-6">
    <NavBar />
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Active Orders */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Active Orders</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-tertiary" />
                    <span>Pending Orders</span>
                  </div>
                  <span className="font-medium">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-tertiary" />
                    <span>Average Prep Time</span>
                  </div>
                  <span className="font-medium">45 mins</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Status */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Today's Progress</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-tertiary" />
                    <span>Completed</span>
                  </div>
                  <span className="font-medium">23 orders</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-tertiary" />
                    <span>Efficiency Rate</span>
                  </div>
                  <span className="font-medium">92%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Priority Orders */}
          <Card className="bg-highlight">
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Priority Orders</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Order #1234</span>
                  <span className="text-deep font-medium">Due in 1h</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Order #1235</span>
                  <span className="text-deep font-medium">Due in 2h</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Order Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Order Processing Trends</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[400px] w-full">
                <LineChart
                  width={800}
                  height={400}
                  data={orderData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="pending" 
                    stroke={colors.primary} 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="completed" 
                    stroke={colors.secondary} 
                    strokeWidth={2}
                  />
                </LineChart>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderPrep;