import React from 'react';
import { FiEdit3, FiMapPin, FiMail, FiCalendar } from 'react-icons/fi';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import NavBar from './Navbar';
const PlantExpertProfile = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  const userStats = {
    plantsUploaded: 45,
    expertiseScore: 850,
    helpfulVotes: 230,
    joinDate: 'March 2024'
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: colors.background }}>
        <NavBar />
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/api/placeholder/96/96" />
                <AvatarFallback style={{ backgroundColor: colors.tertiary }}>PE</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
                      Sarah Johnson
                    </h2>
                    <p className="text-sm" style={{ color: colors.tertiary }}>
                      Plant Expert & Garden Enthusiast
                    </p>
                  </div>
                  <Button style={{ backgroundColor: colors.primary }}>
                    <FiEdit3 className="mr-2" />
                    Edit Profile
                  </Button>
                </div>
                <div className="flex gap-4 mt-4">
                  {[
                    { icon: FiMapPin, text: "Portland, OR" },
                    { icon: FiMail, text: "sarah.j@example.com" },
                    { icon: FiCalendar, text: "Joined " + userStats.joinDate }
                  ].map(({ icon: Icon, text }, index) => (
                    <div key={index} className="flex items-center gap-1" style={{ color: colors.tertiary }}>
                      <Icon className="w-4 h-4" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Plants Uploaded", value: userStats.plantsUploaded },
            { label: "Expertise Score", value: userStats.expertiseScore },
            { label: "Helpful Votes", value: userStats.helpfulVotes },
            { label: "Plant Collection", value: "23 Active" }
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold" style={{ color: colors.primary }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: colors.tertiary }}>
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantExpertProfile;