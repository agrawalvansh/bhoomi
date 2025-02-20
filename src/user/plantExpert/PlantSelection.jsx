import React, { useState } from 'react';
import { 
  FiSun, FiCloud, FiThermometer, FiFilter, 
  FiSearch, FiInfo, FiHeart, FiCheckCircle, FiStar
} from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Slider } from "../../components/ui/slider";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import Navbar from "./Navbar";

const PlantSelection = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  const [filters, setFilters] = useState({
    sunlight: 'partial',
    maintenance: 50,
    climate: 'temperate'
  });

  const plants = [
    {
      name: "Peace Lily",
      scientific: "Spathiphyllum",
      compatibility: 95,
      sunlight: "low",
      maintenance: "easy",
      climate: "indoor",
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=800&auto=format&fit=crop"
    },
    {
      name: "Snake Plant",
      scientific: "Sansevieria trifasciata",
      compatibility: 88,
      sunlight: "partial",
      maintenance: "easy",
      climate: "indoor",
      image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=800&auto=format&fit=crop"
    },
    {
      name: "Monstera Deliciosa",
      scientific: "Monstera deliciosa",
      compatibility: 92,
      sunlight: "partial",
      maintenance: "moderate",
      climate: "tropical",
      image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&auto=format&fit=crop"
    },
    {
      name: "Fiddle Leaf Fig",
      scientific: "Ficus lyrata",
      compatibility: 85,
      sunlight: "full",
      maintenance: "high",
      climate: "tropical",
      image: "https://images.unsplash.com/photo-1598880940942-ae5681bf11cc?w=800&auto=format&fit=crop"
    },
    {
      name: "Jade Plant",
      scientific: "Crassula ovata",
      compatibility: 90,
      sunlight: "full",
      maintenance: "low",
      climate: "arid",
      image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&auto=format&fit=crop"
    },
    {
      name: "Bird of Paradise",
      scientific: "Strelitzia reginae",
      compatibility: 87,
      sunlight: "full",
      maintenance: "moderate",
      climate: "tropical",
      image: "https://images.unsplash.com/photo-1599685315640-9ceab2f58944?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen p-6" style={{ background: colors.background }}>
      <Navbar />
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Enhanced Search and Filter Section */}
        <Card style={{ borderColor: colors.accent }}>
          <CardHeader style={{ borderBottom: `2px solid ${colors.accent}` }}>
            <CardTitle className="flex items-center gap-2" style={{ color: colors.primary }}>
              <FiFilter className="w-5 h-5" />
              Plant Finder
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            {/* Search Bar with Icon Integration */}
            <div className="flex gap-4 relative">
              <Input 
                placeholder="Search plants..." 
                className="w-full pl-10"
                style={{ 
                  borderColor: colors.tertiary,
                  backgroundColor: colors.background
                }}
              />
              <FiSearch 
                className="absolute left-3 top-3" 
                style={{ color: colors.tertiary }} 
              />
              <Button 
                className="px-8 transition-all hover:scale-105"
                style={{ 
                  background: colors.primary,
                  hover: { backgroundColor: colors.deep }
                }}
              >
                Search
              </Button>
            </div>

            {/* Enhanced Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sunlight Filter */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 font-medium" style={{ color: colors.deep }}>
                  <FiSun className="w-4 h-4" />
                  Sunlight Needs
                </label>
                <div className="flex gap-2 flex-wrap">
                  {['low', 'partial', 'full'].map(level => (
                    <Button
                      key={level}
                      variant="outline"
                      className="gap-2 transition-all"
                      onClick={() => setFilters({...filters, sunlight: level})}
                      style={{
                        borderColor: filters.sunlight === level ? colors.primary : colors.tertiary,
                        backgroundColor: filters.sunlight === level ? colors.highlight : 'transparent',
                        color: colors.primary
                      }}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                      {filters.sunlight === level && <FiCheckCircle className="w-4 h-4" />}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Maintenance Slider */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 font-medium" style={{ color: colors.deep }}>
                  <FiHeart className="w-4 h-4" />
                  Maintenance Level
                </label>
                <div className="relative">
                  <Slider
                    value={[filters.maintenance]}
                    onValueChange={(value) => setFilters({...filters, maintenance: value[0]})}
                    max={100}
                    step={1}
                    className="py-4"
                    style={{
                      "--track-color": colors.accent,
                      "--thumb-color": colors.primary
                    }}
                  />
                  <div className="text-sm mt-1" style={{ color: colors.tertiary }}>
                    Level: {filters.maintenance}%
                  </div>
                </div>
              </div>

              {/* Climate Filter */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 font-medium" style={{ color: colors.deep }}>
                  <FiThermometer className="w-4 h-4" />
                  Climate Zone
                </label>
                <div className="flex gap-2 flex-wrap">
                  {['tropical', 'temperate', 'arid'].map(zone => (
                    <Button
                      key={zone}
                      variant="outline"
                      className="gap-2 transition-all"
                      onClick={() => setFilters({...filters, climate: zone})}
                      style={{
                        borderColor: filters.climate === zone ? colors.primary : colors.tertiary,
                        backgroundColor: filters.climate === zone ? colors.highlight : 'transparent',
                        color: colors.primary
                      }}
                    >
                      {zone.charAt(0).toUpperCase() + zone.slice(1)}
                      {filters.climate === zone && <FiCheckCircle className="w-4 h-4" />}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Plant Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <Card 
              key={plant.name}
              className="transition-all hover:shadow-lg hover:-translate-y-1"
              style={{ 
                borderColor: colors.accent,
                backgroundColor: colors.background
              }}
            >
              <CardContent className="p-4 space-y-4">
                {/* Image Section */}
                <div className="relative">
                  <img 
                    src={plant.image} 
                    alt={plant.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Badge 
                    className="absolute top-2 right-2 flex items-center gap-1"
                    style={{ 
                      background: colors.secondary,
                      color: colors.primary
                    }}
                  >
                    <FiStar className="w-4 h-4" />
                    {plant.compatibility}%
                  </Badge>
                </div>

                {/* Plant Info */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium" style={{ color: colors.primary }}>
                        {plant.name}
                      </h3>
                      <p className="text-sm italic" style={{ color: colors.tertiary }}>
                        {plant.scientific}
                      </p>
                    </div>
                    <FiHeart 
                      className="w-5 h-5 cursor-pointer transition-colors" 
                      style={{ color: colors.tertiary }}
                    />
                  </div>

                  {/* Plant Attributes */}
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="flex flex-col items-center p-2 rounded" style={{ background: colors.highlight }}>
                      <FiSun className="w-5 h-5 mb-1" style={{ color: colors.tertiary }} />
                      <span style={{ color: colors.primary }}>{plant.sunlight}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded" style={{ background: colors.highlight }}>
                      <FiHeart className="w-5 h-5 mb-1" style={{ color: colors.tertiary }} />
                      <span style={{ color: colors.primary }}>{plant.maintenance}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded" style={{ background: colors.highlight }}>
                      <FiCloud className="w-5 h-5 mb-1" style={{ color: colors.tertiary }} />
                      <span style={{ color: colors.primary }}>{plant.climate}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full transition-all hover:scale-[102%]"
                    style={{ 
                      background: colors.primary,
                      hover: { backgroundColor: colors.deep }
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantSelection;