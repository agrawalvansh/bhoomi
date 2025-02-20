import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { ShoppingCart, TrendingDown, AlertCircle, DollarSign } from 'lucide-react';

import { Link } from 'react-router-dom';
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

const reorderData = [
  { category: 'Electronics', pending: 15, approved: 10 },
  { category: 'Furniture', pending: 8, approved: 6 },
  { category: 'Office', pending: 12, approved: 8 },
  { category: 'Kitchen', pending: 6, approved: 4 },
  { category: 'Storage', pending: 9, approved: 7 }
];

const ReorderPage = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <NavBar />  
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Reorder Status */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Reorder Status</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-tertiary" />
                    <span>Pending Orders</span>
                  </div>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-tertiary" />
                    <span>Total Value</span>
                  </div>
                  <span className="font-medium">$45,230</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Low Stock Items */}
          <Card className="bg-highlight">
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Critical Stock</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Printer Paper</span>
                  <span className="text-deep font-medium">2 days supply</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Ink Cartridges</span>
                  <span className="text-deep font-medium">3 days supply</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Reorder Metrics */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Quick Metrics</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-tertiary" />
                    <span>Urgent Items</span>
                  </div>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-tertiary" />
                    <span>Below Threshold</span>
                  </div>
                  <span className="font-medium">15</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reorder Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-primary">Reorder by Category</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[400px] w-full">
                <BarChart
                  width={800}
                  height={400}
                  data={reorderData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pending" fill={colors.primary} />
                  <Bar dataKey="approved" fill={colors.secondary} />
                </BarChart>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ReorderPage;