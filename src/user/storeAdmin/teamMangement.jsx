import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, FiUsers, FiBox, FiShoppingBag, FiMessageSquare, FiBarChart2, FiMail, FiTool,
  FiCalendar, FiStar, FiBook, FiTruck, FiAward, FiClock, FiTrendingUp, FiPackage
} from 'react-icons/fi';
import AdminSidebar from './navBar';

const TeamManagementPage = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

 
  const [activeView, setActiveView] = useState('gardeners');

  // Sample team data
  const teamMembers = {
    gardeners: [
      {
        id: 1,
        name: 'John Smith',
        role: 'Senior Gardener',
        rating: 4.8,
        completedJobs: 156,
        specialties: ['Landscaping', 'Plant Care', 'Tree Pruning'],
        availability: 'Full-time'
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        role: 'Garden Specialist',
        rating: 4.9,
        completedJobs: 132,
        specialties: ['Organic Gardening', 'Vegetable Gardens'],
        availability: 'Part-time'
      }
    ],
    experts: [
      {
        id: 3,
        name: 'Dr. Emily Chen',
        role: 'Plant Pathologist',
        rating: 5.0,
        consultations: 89,
        specialties: ['Disease Control', 'Plant Health'],
        availability: 'On-call'
      }
    ]
  };

  const equipmentList = [
    { id: 1, name: 'Professional Lawn Mower', assigned: 'John Smith', status: 'In Use' },
    { id: 2, name: 'Pruning Tools Set', assigned: 'Sarah Johnson', status: 'Available' },
    { id: 3, name: 'Soil Testing Kit', assigned: 'Dr. Emily Chen', status: 'In Use' }
  ];

  return (
    <div className="min-h-screen">
      <div className="flex" style={{ backgroundColor: colors.background }}>
        {/* Sidebar Navigation */}
        <AdminSidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold" style={{ color: colors.deep }}>Team Management</h2>
            <p className="text-lg mt-2" style={{ color: colors.tertiary }}>
              Manage team members, schedules, and resources
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <FiUsers className="mr-2" style={{ color: colors.tertiary }} />
                <span className="font-medium">Total Team</span>
              </div>
              <div className="text-2xl font-bold" style={{ color: colors.deep }}>15</div>
              <div className="text-sm" style={{ color: colors.tertiary }}>Active Members</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <FiCalendar className="mr-2" style={{ color: colors.tertiary }} />
                <span className="font-medium">Scheduled Jobs</span>
              </div>
              <div className="text-2xl font-bold" style={{ color: colors.deep }}>28</div>
              <div className="text-sm" style={{ color: colors.tertiary }}>This Week</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <FiStar className="mr-2" style={{ color: colors.tertiary }} />
                <span className="font-medium">Avg. Rating</span>
              </div>
              <div className="text-2xl font-bold" style={{ color: colors.deep }}>4.8</div>
              <div className="text-sm" style={{ color: colors.tertiary }}>Last 30 Days</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <FiTruck className="mr-2" style={{ color: colors.tertiary }} />
                <span className="font-medium">Equipment</span>
              </div>
              <div className="text-2xl font-bold" style={{ color: colors.deep }}>45</div>
              <div className="text-sm" style={{ color: colors.tertiary }}>Items Assigned</div>
            </div>
          </div>

          {/* Team View Controls */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded-lg ${activeView === 'gardeners' ? 'text-white' : ''}`}
                style={{ 
                  backgroundColor: activeView === 'gardeners' ? colors.deep : colors.background,
                  color: activeView === 'gardeners' ? 'white' : colors.deep
                }}
                onClick={() => setActiveView('gardeners')}
              >
                Gardeners
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${activeView === 'experts' ? 'text-white' : ''}`}
                style={{ 
                  backgroundColor: activeView === 'experts' ? colors.deep : colors.background,
                  color: activeView === 'experts' ? 'white' : colors.deep
                }}
                onClick={() => setActiveView('experts')}
              >
                Expert Consultants
              </button>
            </div>
            <button
              className="px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: colors.tertiary }}
            >
              + Add Team Member
            </button>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {teamMembers[activeView].map(member => (
              <motion.div
                key={member.id}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: colors.deep }}>{member.name}</h3>
                    <p style={{ color: colors.tertiary }}>{member.role}</p>
                  </div>
                  <div className="flex items-center">
                    <FiStar style={{ color: colors.secondary }} />
                    <span className="ml-1" style={{ color: colors.deep }}>{member.rating}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-medium mb-2" style={{ color: colors.deep }}>Specialties</div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded-full text-xs"
                        style={{ backgroundColor: colors.background, color: colors.deep }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t" style={{ borderColor: colors.accent }}>
                  <span className="text-sm" style={{ color: colors.tertiary }}>
                    {member.availability}
                  </span>
                  <button
                    className="px-3 py-1 rounded text-sm"
                    style={{ backgroundColor: colors.background, color: colors.deep }}
                  >
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Equipment Assignment Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4" style={{ color: colors.deep }}>Equipment Assignment</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: colors.background }}>
                    <th className="p-3 text-left" style={{ color: colors.deep }}>Equipment Name</th>
                    <th className="p-3 text-left" style={{ color: colors.deep }}>Assigned To</th>
                    <th className="p-3 text-left" style={{ color: colors.deep }}>Status</th>
                    <th className="p-3 text-left" style={{ color: colors.deep }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {equipmentList.map(equipment => (
                    <tr key={equipment.id} className="border-t" style={{ borderColor: colors.accent }}>
                      <td className="p-3" style={{ color: colors.deep }}>{equipment.name}</td>
                      <td className="p-3" style={{ color: colors.tertiary }}>{equipment.assigned}</td>
                      <td className="p-3">
                        <span 
                          className="px-2 py-1 rounded-full text-sm"
                          style={{ 
                            backgroundColor: equipment.status === 'Available' ? colors.accent : colors.background,
                            color: colors.deep 
                          }}
                        >
                          {equipment.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <button
                          className="px-3 py-1 rounded text-sm"
                          style={{ backgroundColor: colors.background, color: colors.deep }}
                        >
                          Reassign
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Training Materials Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold" style={{ color: colors.deep }}>Training Materials</h3>
              <button
                className="px-4 py-2 rounded text-white"
                style={{ backgroundColor: colors.tertiary }}
              >
                Upload New Material
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: colors.background }}>
                <div className="flex items-center mb-2">
                  <FiBook className="mr-2" style={{ color: colors.tertiary }} />
                  <span className="font-medium" style={{ color: colors.deep }}>Basic Gardening Guide</span>
                </div>
                <p className="text-sm mb-2" style={{ color: colors.tertiary }}>Essential gardening techniques and best practices</p>
                <button className="text-sm" style={{ color: colors.deep }}>View Document →</button>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: colors.background }}>
                <div className="flex items-center mb-2">
                  <FiBook className="mr-2" style={{ color: colors.tertiary }} />
                  <span className="font-medium" style={{ color: colors.deep }}>Equipment Safety Manual</span>
                </div>
                <p className="text-sm mb-2" style={{ color: colors.tertiary }}>Safety guidelines for equipment handling</p>
                <button className="text-sm" style={{ color: colors.deep }}>View Document →</button>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: colors.background }}>
                <div className="flex items-center mb-2">
                  <FiBook className="mr-2" style={{ color: colors.tertiary }} />
                  <span className="font-medium" style={{ color: colors.deep }}>Customer Service Training</span>
                </div>
                <p className="text-sm mb-2" style={{ color: colors.tertiary }}>Guidelines for client interactions</p>
                <button className="text-sm" style={{ color: colors.deep }}>View Document →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagementPage;