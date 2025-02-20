import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { motion } from "framer-motion";
import Navbar from './Navbar';

const DesignHub = () => {
  const [templates, setTemplates] = useState([
    { id: '1', title: 'Modern Garden', preview: '/api/placeholder/300/200' },
    { id: '2', title: 'Zen Space', preview: '/api/placeholder/300/200' },
    { id: '3', title: 'Urban Oasis', preview: '/api/placeholder/300/200' },
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
        <h1 className="text-3xl font-bold text-[#2D3B2D] mb-8">3D Design Hub</h1>
        
        <Tabs defaultValue="workspace" className="w-full">
          <TabsList className="bg-[#4A6741] text-white">
            <TabsTrigger value="workspace">Design Workspace</TabsTrigger>
            <TabsTrigger value="templates">Template Gallery</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
          </TabsList>

          <TabsContent value="workspace" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Design Workspace</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Tools</h3>
                    {/* Add your design tools here */}
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Preview</h3>
                    <div className="aspect-video bg-gray-100 rounded"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card key={template.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <img
                      src={template.preview}
                      alt={template.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-[#2D3B2D]">
                      {template.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="collaboration" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Project Comments</h3>
                {/* Add collaboration features here */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
    </>
  );
};

export default DesignHub;