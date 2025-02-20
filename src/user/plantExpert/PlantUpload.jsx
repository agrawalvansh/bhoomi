import React, { useState } from 'react';
import { 
  FiUpload, FiImage, FiVideo, FiFile, FiSave, FiClock,
  FiDroplet, FiSun, FiThermometer, FiCalendar, FiList,
  FiBookOpen, FiDollarSign, FiInfo, FiAlertCircle, FiActivity,
  FiPackage
} from "react-icons/fi";
import { Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

const PlantUpload = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  const [formData, setFormData] = useState({
    name: '',
    scientificName: '',
    category: '',
    description: '',
    sunlight: '',
    water: '',
    temperature: '',
    season: '',
    care: '',
    images: [],
    documents: [],
    price: '',
    stock: ''
  });

  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedDocs, setUploadedDocs] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + uploadedImages.length > 10) {
      alert('Maximum 10 images allowed');
      return;
    }
    setUploadedImages(prev => [...prev, ...files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }))]);
  };

  const handleDocUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedDocs(prev => [...prev, ...files]);
  };

  const handleSubmit = (isDraft = false) => {
    // TODO: Implement form submission
    console.log('Submitting form data:', { ...formData, isDraft });
  };

  return (
    <div className="min-h-screen p-6" style={{ background: colors.background }}>
      <div className="max-w-4xl mx-auto space-y-6">
        <Tabs defaultValue="basic">
          <TabsList className="w-full justify-start mb-6 gap-2" style={{ background: colors.background }}>
            {['basic', 'care', 'media', 'inventory'].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab}
                className="px-4 py-2 rounded-lg transition-all"
                style={{
                  color: colors.primary,
                  backgroundColor: 'transparent',
                  border: `2px solid transparent`,
                }}
                _active={{
                  backgroundColor: colors.secondary,
                  borderColor: colors.primary,
                  boxShadow: `0 2px 4px ${colors.highlight}`
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Info
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Basic Information Tab */}
          <TabsContent value="basic">
            <Card style={{ borderColor: colors.accent }}>
              <CardHeader style={{ borderBottom: `2px solid ${colors.accent}` }}>
                <CardTitle className="flex items-center gap-2" style={{ color: colors.primary }}>
                  <Leaf style={{ color: colors.tertiary }} />
                  Basic Plant Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['name', 'scientificName'].map((field) => (
                    <div key={field} className="space-y-2">
                      <Label className="flex items-center gap-1" style={{ color: colors.deep }}>
                        {field === 'name' ? <Leaf /> : <FiActivity />}
                        {field === 'name' ? 'Plant Name' : 'Scientific Name'}
                      </Label>
                      <Input
                        value={formData[field]}
                        onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                        placeholder={field === 'name' ? "Common name" : "Botanical name"}
                        style={{
                          borderColor: colors.tertiary,
                          backgroundColor: colors.background,
                          focus: { borderColor: colors.highlight }
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Category Selector */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-1" style={{ color: colors.deep }}>
                    <FiList />
                    Category
                  </Label>
                  <Select 
                    value={formData.category}
                    onValueChange={(value) => setFormData({...formData, category: value})}
                  >
                    <SelectTrigger style={{ 
                      borderColor: colors.tertiary,
                      backgroundColor: colors.background
                    }}>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent style={{ 
                      backgroundColor: colors.background,
                      borderColor: colors.tertiary
                    }}>
                      {[
                        'Indoor Plants',
                        'Outdoor Plants',
                        'Flowering Plants',
                        'Succulents',
                        'Herbs',
                        'Vegetables',
                        'Fruit Trees',
                        'Ornamental Trees',
                        'Climbers',
                        'Aquatic Plants'
                      ].map(category => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-1" style={{ color: colors.deep }}>
                    <FiBookOpen />
                    Description
                  </Label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="min-h-[100px]"
                    placeholder="Describe the plant's characteristics..."
                    style={{
                      borderColor: colors.tertiary,
                      backgroundColor: colors.background
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Care Guide Tab - Improved Consistency */}
          <TabsContent value="care">
            <Card style={{ borderColor: colors.accent }}>
              <CardHeader style={{ borderBottom: `2px solid ${colors.accent}` }}>
                <CardTitle className="flex items-center gap-2" style={{ color: colors.primary }}>
                  <FiSun />
                  Care Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Sunlight Requirements */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1" style={{ color: colors.deep }}>
                      <FiSun />
                      Sunlight Requirements
                    </Label>
                    <Select 
                      value={formData.sunlight}
                      onValueChange={(value) => setFormData({...formData, sunlight: value})}
                    >
                      <SelectTrigger style={{ 
                        borderColor: colors.tertiary,
                        backgroundColor: colors.background
                      }}>
                        <SelectValue placeholder="Select sunlight needs" />
                      </SelectTrigger>
                      <SelectContent>
                        {['Full Sun', 'Partial Sun', 'Shade'].map(option => (
                          <SelectItem key={option} value={option.toLowerCase()}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Watering Needs */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1" style={{ color: colors.deep }}>
                      <FiDroplet />
                      Watering Needs
                    </Label>
                    <Select 
                      value={formData.water}
                      onValueChange={(value) => setFormData({...formData, water: value})}
                    >
                      <SelectTrigger style={{ 
                        borderColor: colors.tertiary,
                        backgroundColor: colors.background
                      }}>
                        <SelectValue placeholder="Select watering needs" />
                      </SelectTrigger>
                      <SelectContent>
                        {['High', 'Moderate', 'Low'].map(option => (
                          <SelectItem key={option} value={option.toLowerCase()}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Temperature Range */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1" style={{ color: colors.deep }}>
                      <FiThermometer />
                      Temperature Range
                    </Label>
                    <Input
                      value={formData.temperature}
                      onChange={(e) => setFormData({...formData, temperature: e.target.value})}
                      placeholder="e.g., 18-24°C"
                      style={{
                        borderColor: colors.tertiary,
                        backgroundColor: colors.background
                      }}
                    />
                  </div>

                  {/* Growing Season */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1" style={{ color: colors.deep }}>
                      <FiCalendar />
                      Growing Season
                    </Label>
                    <Select 
                      value={formData.season}
                      onValueChange={(value) => setFormData({...formData, season: value})}
                    >
                      <SelectTrigger style={{ 
                        borderColor: colors.tertiary,
                        backgroundColor: colors.background
                      }}>
                        <SelectValue placeholder="Select growing season" />
                      </SelectTrigger>
                      <SelectContent>
                        {['Spring', 'Summer', 'Fall', 'Winter', 'Year-round'].map(option => (
                          <SelectItem key={option} value={option.toLowerCase()}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Care Instructions */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-1" style={{ color: colors.deep }}>
                    <FiBookOpen />
                    Care Instructions
                  </Label>
                  <Textarea
                    value={formData.care}
                    onChange={(e) => setFormData({...formData, care: e.target.value})}
                    className="min-h-[100px]"
                    placeholder="Detailed care instructions..."
                    style={{
                      borderColor: colors.tertiary,
                      backgroundColor: colors.background
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Media Tab - Enhanced Upload Experience */}
          <TabsContent value="media">
            <Card style={{ borderColor: colors.accent }}>
              <CardHeader style={{ borderBottom: `2px solid ${colors.accent}` }}>
                <CardTitle className="flex items-center gap-2" style={{ color: colors.primary }}>
                  <FiImage />
                  Media Upload
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <div>
                  <Label className="block mb-3" style={{ color: colors.deep }}>
                    Plant Images (max 10 files)
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {uploadedImages.map((img, index) => (
                      <div 
                        key={index}
                        className="aspect-square rounded-lg overflow-hidden relative group"
                      >
                        <img 
                          src={img.preview}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => {
                            URL.revokeObjectURL(img.preview);
                            setUploadedImages(prev => prev.filter((_, i) => i !== index));
                          }}
                          className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    {uploadedImages.length < 10 && (
                      <label
                        className="aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all hover:border-solid hover:scale-95"
                        style={{ 
                          borderColor: colors.tertiary,
                          backgroundColor: colors.background
                        }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <FiUpload className="w-6 h-6 mb-2" style={{ color: colors.tertiary }} />
                        <span className="text-sm text-center" style={{ color: colors.tertiary }}>
                          Upload Images
                        </span>
                      </label>
                    )}
                  </div>
                </div>

                <div>
                  <Label className="block mb-3" style={{ color: colors.deep }}>
                    Care Documents (PDF, DOCX)
                  </Label>
                  <div 
                    className="p-4 rounded-lg cursor-pointer transition-all hover:opacity-90 hover:scale-[99%]"
                    style={{ 
                      background: colors.highlight,
                      border: `2px dashed ${colors.tertiary}`
                    }}
                  >
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc"
                      multiple
                      onChange={handleDocUpload}
                      className="hidden"
                      id="doc-upload"
                    />
                    <label htmlFor="doc-upload" className="flex flex-col items-center cursor-pointer">
                      <FiFile className="w-8 h-8 mb-2" style={{ color: colors.tertiary }} />
                      <span className="text-center" style={{ color: colors.tertiary }}>
                        Drop documents here or click to upload
                      </span>
                    </label>
                    {uploadedDocs.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {uploadedDocs.map((doc, index) => (
                          <div 
                            key={index}
                            className="flex items-center justify-between p-2 rounded"
                            style={{ backgroundColor: colors.background }}
                          >
                            <span className="flex items-center gap-2" style={{ color: colors.tertiary }}>
                              <FiFile />
                              {doc.name}
                            </span>
                            <button
                              onClick={() => setUploadedDocs(prev => prev.filter((_, i) => i !== index))}
                              className="text-red-500 hover:text-red-700"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inventory Tab - Improved Input Handling */}
          <TabsContent value="inventory">
            <Card style={{ borderColor: colors.accent }}>
              <CardHeader style={{ borderBottom: `2px solid ${colors.accent}` }}>
                <CardTitle className="flex items-center gap-2" style={{ color: colors.primary }}>
                  <FiDollarSign />
                  Inventory Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* ... price input with enhanced styling ... */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-1" style={{ color: colors.deep }}>
                      <FiPackage />
                      Stock Quantity
                    </Label>
                    <Input 
                      type="number"
                      placeholder="Available quantity"
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: e.target.value})}
                      style={{
                        borderColor: colors.tertiary,
                        backgroundColor: colors.background
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Enhanced Action Buttons */}
        <div className="flex gap-4 justify-end border-t pt-4" style={{ borderColor: colors.accent }}>
          <Button 
            variant="outline"
            className="transition-all hover:scale-105"
            style={{
              borderColor: colors.tertiary,
              color: colors.primary,
              backgroundColor: colors.background,
              hover: { backgroundColor: colors.highlight }
            }}
            onClick={() => handleSubmit(true)}
          >
            <FiSave className="mr-2" />
            Save Draft
          </Button>
          <Button 
            className="transition-all hover:scale-105"
            style={{
              backgroundColor: colors.primary,
              hover: { backgroundColor: colors.deep }
            }}
            onClick={() => handleSubmit(false)}
          >
            <FiUpload className="mr-2" />
            Publish Plant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlantUpload;