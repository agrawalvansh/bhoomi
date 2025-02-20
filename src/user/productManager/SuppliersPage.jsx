import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { LineChart, BarChart, XAxis, YAxis, Tooltip, Legend, Line, Bar } from 'recharts';
import { Truck, Star, Clock, ShieldCheck, Phone, Mail } from 'lucide-react';
import NavBar from './NavBar';

const colors = {
  primary: '#2D3B2D',
  secondary: '#D4B982',
  tertiary: '#4A6741',
  background: '#F9F6F0',
  accent: '#A8C69F',
  deep: '#1B4D3E',
  highlight: '#F3E5AB'
};

const deliveryData = [
  { month: 'Jan', onTime: 95, delayed: 5 },
  { month: 'Feb', onTime: 92, delayed: 8 },
  { month: 'Mar', onTime: 97, delayed: 3 },
  { month: 'Apr', onTime: 94, delayed: 6 },
  { month: 'May', onTime: 96, delayed: 4 },
  { month: 'Jun', onTime: 98, delayed: 2 }
];

const orderHistory = [
  { month: 'Jan', value: 45000 },
  { month: 'Feb', value: 52000 },
  { month: 'Mar', value: 48000 },
  { month: 'Apr', value: 51000 },
  { month: 'May', value: 54000 },
  { month: 'Jun', value: 58000 }
];

const SuppliersPage = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <NavBar />  
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Top Suppliers */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Top Suppliers</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-tertiary" />
                    <span>ABC Supplies</span>
                  </div>
                  <span className="font-medium">4.9/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-tertiary" />
                    <span>XYZ Distribution</span>
                  </div>
                  <span className="font-medium">4.8/5</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Orders */}
          <Card className="bg-highlight">
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Active Purchase Orders</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>PO-2024-001</span>
                  <span className="text-deep font-medium">Due in 3 days</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>PO-2024-002</span>
                  <span className="text-deep font-medium">Due in 5 days</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Quick Contacts */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Quick Contacts</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-tertiary" />
                    <span>Support Line</span>
                  </div>
                  <span className="font-medium">1-800-555-0123</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-tertiary" />
                    <span>Support Email</span>
                  </div>
                  <span className="font-medium">support@supplier.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Delivery Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Delivery Performance</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[400px] w-full">
                <BarChart
                  width={800}
                  height={400}
                  data={deliveryData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="onTime" fill={colors.tertiary} name="On Time %" />
                  <Bar dataKey="delayed" fill={colors.secondary} name="Delayed %" />
                </BarChart>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Order History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Order History</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px] w-full">
                <LineChart
                  width={800}
                  height={300}
                  data={orderHistory}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={colors.primary} 
                    strokeWidth={2}
                    name="Order Value ($)"
                  />
                </LineChart>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Supplier Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-tertiary" />
                    <span>Average Lead Time</span>
                  </div>
                  <span className="font-medium">3.2 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-tertiary" />
                    <span>Quality Rating</span>
                  </div>
                  <span className="font-medium">98.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-tertiary" />
                    <span>On-Time Delivery</span>
                  </div>
                  <span className="font-medium">96.8%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Supply Chain Status</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Active Suppliers</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pending Approvals</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Total Categories</span>
                  <span className="font-medium">12</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SuppliersPage;