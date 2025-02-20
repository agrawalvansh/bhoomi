import React from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Navbar from './Navbar';

const PlantExpertHome = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  const featuredPlants = [
    {
      name: "Monstera Deliciosa",
      category: "Indoor",
      difficulty: "Medium",
      image: "/api/placeholder/400/300"
    },
    {
      name: "Peace Lily",
      category: "Air Purifying",
      difficulty: "Easy",
      image: "/api/placeholder/400/300"
    },
    {
      name: "Snake Plant",
      category: "Low Light",
      difficulty: "Easy",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <Navbar />
      {/* Hero Section */}
      <div className="relative py-20 px-6" style={{ backgroundColor: colors.deep }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6" style={{ color: colors.secondary }}>
            Your Plant Care Expert
          </h1>
          <p className="text-xl mb-8" style={{ color: colors.background }}>
            Discover, grow, and nurture your perfect plants with expert guidance
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              className="px-6 py-2"
              style={{ backgroundColor: colors.secondary, color: colors.primary }}
            >
              <FiSearch className="mr-2" />
              Browse Plants
            </Button>
            <Button 
              className="px-6 py-2"
              style={{ backgroundColor: colors.tertiary }}
            >
              <FiPlus className="mr-2" />
              Add Your Plant
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Plants */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-8" style={{ color: colors.primary }}>
          Featured Plants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPlants.map((plant, index) => (
            <Card key={index} className="overflow-hidden">
              <img 
                src={plant.image} 
                alt={plant.name} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold mb-2" style={{ color: colors.primary }}>
                  {plant.name}
                </h3>
                <div className="flex gap-2">
                  <Badge style={{ backgroundColor: colors.accent }}>
                    {plant.category}
                  </Badge>
                  <Badge style={{ backgroundColor: colors.secondary }}>
                    {plant.difficulty}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantExpertHome;