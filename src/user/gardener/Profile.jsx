import React from 'react';
import { 
  FiUser,
  FiAward,
  FiPhone,
  FiMail,
  FiClock,
  FiStar,
  FiCalendar,
  FiSettings,
  FiTool,
  FiHeart ,
  FiCheckCircle
} from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import { Badge } from "../../components/ui/badge";
import Header from '../gardener/Header';

const GardenerProfile = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  const gardenerInfo = {
    name: "Alex Thompson",
    role: "Senior Landscape Gardener",
    phone: "+1 (555) 123-4567",
    email: "alex.thompson@example.com",
    experience: "5 years",
    rating: 4.8,
    totalServices: 1248,
    specializations: [
      "Garden Maintenance",
      "Plant Installation",
      "Landscape Design",
      "Pruning & Trimming",
      "Soil Management"
    ],
    certifications: [
      {
        name: "Certified Professional Horticulturist",
        issuer: "American Society of Horticulture",
        year: "2021"
      },
      {
        name: "Sustainable Landscaping Certificate",
        issuer: "Landscape Professionals Association",
        year: "2022"
      }
    ],
    skills: [
      { name: "Plant Care", level: 95 },
      { name: "Garden Design", level: 88 },
      { name: "Pest Management", level: 82 },
      { name: "Irrigation Systems", level: 75 },
      { name: "Soil Analysis", level: 90 }
    ],
    monthlyStats: {
      completedTasks: 45,
      onTimeDelivery: "98%",
      customerSatisfaction: "4.9/5",
      averageServiceTime: "2.5 hours"
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen" style={{ background: colors.background }}>
      <div className="max-w-3xl mx-auto space-y-6 p-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: colors.tertiary }}>
                  <FiUser className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>{gardenerInfo.name}</h2>
                  <p style={{ color: colors.tertiary }}>{gardenerInfo.role}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <FiStar className="w-4 h-4" style={{ color: colors.secondary }} />
                    <span style={{ color: colors.tertiary }}>{gardenerInfo.rating} Rating</span>
                  </div>
                </div>
              </div>
              <Button style={{ background: colors.primary, color: 'white' }}>
                <FiSettings className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: colors.primary }}>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2" style={{ color: colors.tertiary }}>
              <FiPhone className="w-4 h-4" />
              <span>{gardenerInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: colors.tertiary }}>
              <FiMail className="w-4 h-4" />
              <span>{gardenerInfo.email}</span>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Performance */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: colors.primary }}>Monthly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg" style={{ background: colors.highlight }}>
                <FiCalendar className="w-6 h-6 mx-auto mb-2" style={{ color: colors.tertiary }} />
                <div className="font-bold" style={{ color: colors.primary }}>{gardenerInfo.monthlyStats.completedTasks}</div>
                <div className="text-sm" style={{ color: colors.tertiary }}>Tasks Completed</div>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ background: colors.highlight }}>
                <FiClock className="w-6 h-6 mx-auto mb-2" style={{ color: colors.tertiary }} />
                <div className="font-bold" style={{ color: colors.primary }}>{gardenerInfo.monthlyStats.onTimeDelivery}</div>
                <div className="text-sm" style={{ color: colors.tertiary }}>On-Time Delivery</div>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ background: colors.highlight }}>
                <FiStar className="w-6 h-6 mx-auto mb-2" style={{ color: colors.tertiary }} />
                <div className="font-bold" style={{ color: colors.primary }}>{gardenerInfo.monthlyStats.customerSatisfaction}</div>
                <div className="text-sm" style={{ color: colors.tertiary }}>Customer Rating</div>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ background: colors.highlight }}>
                <FiClock className="w-6 h-6 mx-auto mb-2" style={{ color: colors.tertiary }} />
                <div className="font-bold" style={{ color: colors.primary }}>{gardenerInfo.monthlyStats.averageServiceTime}</div>
                <div className="text-sm" style={{ color: colors.tertiary }}>Avg. Service Time</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: colors.primary }}>Professional Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {gardenerInfo.skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm" style={{ color: colors.tertiary }}>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2 rounded-full"
                  style={{ background: colors.accent }}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Specializations */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: colors.primary }}>Specializations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {gardenerInfo.specializations.map((spec) => (
                <Badge 
                  key={spec} 
                  className="px-3 py-1 flex items-center gap-1"
                  style={{ background: colors.tertiary, color: 'white' }}
                >
                  <FiHeart  className="w-3 h-3" />
                  {spec}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: colors.primary }}>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {gardenerInfo.certifications.map((cert) => (
                <div 
                  key={cert.name} 
                  className="flex items-start gap-3 p-4 rounded-lg"
                  style={{ background: colors.highlight }}
                >
                  <FiAward className="w-6 h-6 shrink-0" style={{ color: colors.tertiary }} />
                  <div>
                    <h3 className="font-medium" style={{ color: colors.primary }}>{cert.name}</h3>
                    <p className="text-sm" style={{ color: colors.tertiary }}>{cert.issuer}</p>
                    <p className="text-sm" style={{ color: colors.tertiary }}>Issued: {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default GardenerProfile;