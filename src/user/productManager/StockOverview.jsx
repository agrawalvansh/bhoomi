// StockOverview.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { LineChart, BarChart, XAxis, YAxis, Tooltip, Legend, Line, Bar } from 'recharts';
import { Thermometer, Droplets, AlertTriangle } from 'lucide-react';
import NavBar from '../productManager/NavBar.jsx';
const colors = {
  primary: '#2D3B2D',
  secondary: '#D4B982',
  tertiary: '#4A6741',
  background: '#F9F6F0',
  accent: '#A8C69F',
  deep: '#1B4D3E',
  highlight: '#F3E5AB'
};

// Example data - replace with real data
const stockData = [
  { month: 'Jan', stock: 4000, demand: 2400 },
  { month: 'Feb', stock: 3000, demand: 2800 },
  { month: 'Mar', stock: 2000, demand: 2400 },
  { month: 'Apr', stock: 2780, demand: 2908 },
  { month: 'May', stock: 1890, demand: 2800 },
  { month: 'Jun', stock: 2390, demand: 3800 }
];

const StockOverview = () => {
  return (
    <div className="min-h-screen bg-background p-6">
    <NavBar />
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Climate Conditions */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Warehouse Climate</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-tertiary" />
                    <span>Temperature</span>
                  </div>
                  <span className="font-medium">23°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-tertiary" />
                    <span>Humidity</span>
                  </div>
                  <span className="font-medium">45%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Low Stock Alerts */}
          <Card className="bg-highlight">
            <CardHeader className="border-b">
              <CardTitle className="text-primary flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Low Stock Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Product A</span>
                  <span className="text-deep font-medium">5 units left</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Product B</span>
                  <span className="text-deep font-medium">3 units left</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Items</span>
                  <span className="font-medium">1,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Categories</span>
                  <span className="font-medium">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pending Orders</span>
                  <span className="font-medium">23</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stock Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Stock Trends</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[400px] w-full">
                <LineChart
                  width={800}
                  height={400}
                  data={stockData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="stock" 
                    stroke={colors.primary} 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="demand" 
                    stroke={colors.secondary} 
                    strokeWidth={2}
                  />
                </LineChart>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Predictive Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Demand Forecast</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px] w-full">
                <BarChart
                  width={800}
                  height={300}
                  data={stockData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="demand" fill={colors.tertiary} />
                </BarChart>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default StockOverview;