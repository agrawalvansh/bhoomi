import React, { useState } from 'react';
import { 
  FiCheck, 
  FiAlertTriangle, 
  FiCamera, 
  FiUpload,
  FiFile,
  FiTrash2,
  FiPlus
} from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";

const QualityAssurance = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  const [checklist, setChecklist] = useState([
    { id: 1, category: "Health", items: [
      { id: "h1", text: "Leaves are healthy and green", checked: false },
      { id: "h2", text: "No signs of wilting", checked: false },
      { id: "h3", text: "Stems are strong and upright", checked: false }
    ]},
    { id: 2, category: "Pests", items: [
      { id: "p1", text: "No visible insects", checked: false },
      { id: "p2", text: "No evidence of pest damage", checked: false },
      { id: "p3", text: "No webbing or eggs present", checked: false }
    ]},
    { id: 3, category: "Disease", items: [
      { id: "d1", text: "No spots or discoloration", checked: false },
      { id: "d2", text: "No mold or mildew", checked: false },
      { id: "d3", text: "No rotting or decay", checked: false }
    ]}
  ]);

  return (
    <div className="min-h-screen p-6" style={{ background: colors.background }}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Quick Actions */}
        <div className="flex gap-4 mb-6">
          <Button 
            className="flex-1"
            style={{ background: colors.tertiary }}
          >
            <FiCheck className="w-4 h-4 mr-2" />
            Mark All Healthy
          </Button>
          <Button 
            className="flex-1"
            style={{ background: colors.deep }}
          >
            <FiAlertTriangle className="w-4 h-4 mr-2" />
            Flag All Issues
          </Button>
        </div>

        {/* Inspection Checklist */}
        {checklist.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <CardTitle style={{ color: colors.primary }}>{category.category} Check</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3">
                    <Checkbox
                      id={item.id}
                      checked={item.checked}
                      onCheckedChange={(checked) => {
                        const updatedChecklist = checklist.map(cat => ({
                          ...cat,
                          items: cat.items.map(i => 
                            i.id === item.id ? {...i, checked} : i
                          )
                        }));
                        setChecklist(updatedChecklist);
                      }}
                    />
                    <Label 
                      htmlFor={item.id}
                      className="text-sm"
                      style={{ color: colors.tertiary }}
                    >
                      {item.text}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Photo Documentation */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: colors.primary }}>Photo Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((slot) => (
                <div 
                  key={slot}
                  className="aspect-square rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ 
                    background: colors.highlight,
                    border: `2px dashed ${colors.tertiary}`
                  }}
                >
                  <FiCamera className="w-8 h-8" style={{ color: colors.tertiary }} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quality Report */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: colors.primary }}>Quality Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder="Enter detailed observations..."
              className="min-h-[150px]"
              style={{ borderColor: colors.tertiary }}
            />
            <div className="flex gap-4">
              <Button style={{ background: colors.primary }}>
                <FiUpload className="w-4 h-4 mr-2" />
                Submit Report
              </Button>
              <Button variant="outline" style={{ borderColor: colors.tertiary, color: colors.tertiary }}>
                <FiFile className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QualityAssurance;