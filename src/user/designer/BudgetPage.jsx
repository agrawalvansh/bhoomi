import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import Navbar from './Navbar';
const BudgetPage = () => {
  const [costData] = useState([
    { name: 'Plants', eco: 2500, standard: 2000 },
    { name: 'Materials', eco: 1800, standard: 1500 },
    { name: 'Labor', eco: 3000, standard: 3000 },
    { name: 'Maintenance', eco: 1200, standard: 1000 },
  ]);

  const [suppliers] = useState([
    { name: 'EcoGreen Supplies', rating: 4.8, price: 2300 },
    { name: 'Garden Masters', rating: 4.5, price: 2100 },
    { name: 'Plant Paradise', rating: 4.7, price: 2500 },
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
        <h1 className="text-3xl font-bold text-[#2D3B2D] mb-8">Budget & Materials</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Cost Estimator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={costData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="eco" 
                      stroke="#4A6741" 
                      name="Eco-Friendly"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="standard" 
                      stroke="#D4B982" 
                      name="Standard"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Breakdown Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {costData.map((item) => (
                  <div key={item.name} className="flex justify-between items-center p-3 bg-white rounded-lg shadow">
                    <span className="font-medium">{item.name}</span>
                    <div className="text-right">
                      <p className="text-[#4A6741]">Eco: ${item.eco}</p>
                      <p className="text-[#D4B982]">Standard: ${item.standard}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Supplier Quotes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {suppliers.map((supplier) => (
                <div 
                  key={supplier.name}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-[#2D3B2D] mb-2">{supplier.name}</h3>
                  <div className="flex justify-between text-sm">
                    <span>Rating: {supplier.rating}/5</span>
                    <span className="font-medium">${supplier.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Package Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Add package comparison cards here */}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    </>
  );
};

export default BudgetPage;