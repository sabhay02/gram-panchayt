import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  Bell, 
  LogOut,
  Clock,
  CheckCircle,
  AlertTriangle,
  Plus,
  Search,
  Filter
} from 'lucide-react';
import Card from '../components/Card';

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const stats = [
    {
      icon: Users,
      label: 'Total Requests',
      value: '125',
      change: '+12%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      label: 'Pending Actions',
      value: '15',
      change: '-5%',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: CheckCircle,
      label: 'Completed Today',
      value: '28',
      change: '+18%',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: AlertTriangle,
      label: 'Urgent Items',
      value: '3',
      change: '0%',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const recentApplications = [
    {
      id: 'APP001',
      type: 'Birth Certificate',
      applicant: 'Rajesh Kumar',
      date: '2024-01-15',
      status: 'pending',
      priority: 'normal'
    },
    {
      id: 'APP002',
      type: 'Water Connection',
      applicant: 'Priya Sharma',
      date: '2024-01-14',
      status: 'approved',
      priority: 'high'
    },
    {
      id: 'APP003',
      type: 'Property Tax',
      applicant: 'Mohan Singh',
      date: '2024-01-14',
      status: 'processing',
      priority: 'normal'
    },
    {
      id: 'APP004',
      type: 'Trade License',
      applicant: 'Sunita Devi',
      date: '2024-01-13',
      status: 'rejected',
      priority: 'low'
    }
  ];

  const schemes = [
    {
      id: 1,
      name: 'PM Awas Yojana',
      applications: 45,
      approved: 32,
      pending: 13,
      budget: '₹50 Lakh'
    },
    {
      id: 2,
      name: 'MGNREGA',
      applications: 120,
      approved: 98,
      pending: 22,
      budget: '₹2 Crore'
    },
    {
      id: 3,
      name: 'PM Kisan',
      applications: 200,
      approved: 185,
      pending: 15,
      budget: '₹12 Lakh'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'processing': return 'bg-blue-100 text-blue-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 font-semibold';
      case 'normal': return 'text-blue-600 font-semibold';
      case 'low': return 'text-gray-500';
      default: return 'text-gray-600';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'schemes', label: 'Schemes', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <header className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center shadow">
                <span className="text-white font-bold">GP</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">e-Gram Panchayat Admin</h1>
                <p className="text-sm text-gray-500">Administrative Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-red-50 text-gray-600 hover:text-red-600 transition"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex gap-6 border-b">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-3 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? 'border-b-2 border-primary-500 text-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tabs Content */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                          <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                            {stat.change} vs last month
                          </p>
                        </div>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bgColor}`}>
                          <Icon size={22} className={stat.color} />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Applications Table */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Recent Applications</h3>
                <button className="btn-primary flex items-center gap-2">
                  <Plus size={16} />
                  New Application
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600">
                      <th className="py-3 px-4">ID</th>
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4">Applicant</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentApplications.map((app, i) => (
                      <tr key={app.id} className={`text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition`}>
                        <td className="py-3 px-4 font-medium text-gray-800">{app.id}</td>
                        <td className="py-3 px-4 text-gray-600">{app.type}</td>
                        <td className="py-3 px-4 text-gray-600">{app.applicant}</td>
                        <td className="py-3 px-4 text-gray-600">{app.date}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(app.status)}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={getPriorityColor(app.priority)}>
                            {app.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <Card className="text-center py-12 text-gray-500">
            <FileText size={48} className="mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Application Management</h4>
            <p>Detailed application management will be added here.</p>
          </Card>
        )}

        {/* Schemes Tab */}
        {activeTab === 'schemes' && (
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Government Schemes</h3>
              <button className="btn-primary flex items-center gap-2">
                <Plus size={16} />
                Add Scheme
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schemes.map((scheme) => (
                <Card key={scheme.id} className="p-4 hover:shadow-md transition">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">{scheme.name}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex justify-between"><span>Total Applications:</span><span className="font-semibold">{scheme.applications}</span></p>
                    <p className="flex justify-between"><span>Approved:</span><span className="text-green-600 font-semibold">{scheme.approved}</span></p>
                    <p className="flex justify-between"><span>Pending:</span><span className="text-orange-600 font-semibold">{scheme.pending}</span></p>
                    <p className="flex justify-between"><span>Budget:</span><span className="text-blue-600 font-semibold">{scheme.budget}</span></p>
                  </div>
                  <div className="mt-4">
                    <button className="btn-secondary w-full">Manage Scheme</button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <Card className="text-center py-12 text-gray-500">
            <Settings size={48} className="mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">System Settings</h4>
            <p>Administrative settings will be available here.</p>
          </Card>
        )}
      </div>
    </motion.div>
  );
};

export default Admin;
