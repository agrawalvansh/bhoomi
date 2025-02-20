import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Undo, Redo, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Slider } from "../../components/ui/slider";
import Navbar from './Navbar';

const CustomizationInterface = () => {
  const [savedDrafts, setSavedDrafts] = useState([]);
  
  const handleSaveDraft = () => {
    // Add draft saving logic here
    const newDraft = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      // Add other design state here
    };
    setSavedDrafts([...savedDrafts, newDraft]);
  };

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
          <h1 className="text-3xl font-bold text-[#2D3B2D]">Design Customization</h1>
          <div className="flex space-x-4">
            <Button variant="outline" onClick={() => {}}>
              <Undo className="w-4 h-4 mr-2" /> Undo
            </Button>
            <Button variant="outline" onClick={() => {}}>
              <Redo className="w-4 h-4 mr-2" /> Redo
            </Button>
            <Button 
              className="bg-[#4A6741] hover:bg-[#2D3B2D]" 
              onClick={handleSaveDraft}
            >
              <Save className="w-4 h-4 mr-2" /> Save Draft
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Real-Time Editor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-white rounded-lg shadow-inner p-4">
                  {/* Add 3D preview renderer here */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    3D Preview Area
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customization Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Plant Size</label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Pot Size</label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  {/* Add more customization controls */}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Saved Drafts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savedDrafts.map((draft) => (
                    <div 
                      key={draft.id}
                      className="p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <p className="text-sm text-gray-600">
                        {new Date(draft.timestamp).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add feedback component here */}
          </CardContent>
        </Card>
      </motion.div>
    </div>
    </>
  );
};

export default CustomizationInterface;