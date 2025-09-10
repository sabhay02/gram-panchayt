import { motion } from 'framer-motion';
import { Users, Target, Eye, Award, MapPin, Calendar } from 'lucide-react';
import Card from '../components/Card';

const About = () => {
  const members = [
    {
      name: 'Shri Rajesh Kumar',
      position: 'Sarpanch',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '8 years'
    },
    {
      name: 'Smt. Priya Sharma',
      position: 'Deputy Sarpanch',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '5 years'
    },
    {
      name: 'Shri Mohan Singh',
      position: 'Ward Member',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '6 years'
    },
    {
      name: 'Smt. Sunita Devi',
      position: 'Ward Member',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '4 years'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Best Digital Village 2023',
      description: 'Recognized for outstanding digital transformation initiatives'
    },
    {
      icon: Users,
      title: '100% Service Coverage',
      description: 'All essential services now available digitally'
    },
    {
      icon: Target,
      title: 'Zero Corruption Initiative',
      description: 'Transparent governance with complete accountability'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold drop-shadow-lg mb-6">
            About Our Gram Panchayat
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Committed to serving our community with transparency, efficiency, and dedication 
            towards building a progressive and digitally empowered village.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our History & Heritage</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Established in 1952, our Gram Panchayat has been serving the community for over 
              seven decades. What started as a small agricultural village has now transformed 
              into a model digital village, setting an example for rural development across the region.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our journey from traditional governance to digital transformation reflects our 
              commitment to progress while preserving our cultural values and community spirit.
            </p>
            <div className="flex items-center space-x-4 text-primary-600">
              <Calendar size={20} />
              <span className="font-semibold">Established: 1952</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Village Heritage"
              className="rounded-xl shadow-2xl w-full h-80 object-cover transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Card className="h-full p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <Eye size={32} className="text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To create a self-reliant, digitally empowered, and sustainable village 
                community where every citizen has access to quality services, opportunities 
                for growth, and a voice in governance decisions.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Card className="h-full p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <Target size={32} className="text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide transparent, efficient, and citizen-centric governance through 
                digital innovation, community participation, and sustainable development 
                practices that improve the quality of life for all residents.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Panchayat Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated leaders who work tirelessly to serve our community 
              and drive positive change in our village.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              >
                <Card className="text-center p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-primary-100"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-500 text-sm">Experience: {member.experience}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence 
              and community development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="text-center p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-center items-center w-16 h-16 rounded-full bg-primary-100 mx-auto mb-4">
                      <Icon size={32} className="text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.6 }}
          >
            <MapPin size={48} className="mx-auto mb-6 text-primary-400 animate-bounce" />
            <h2 className="text-4xl font-extrabold mb-4">Visit Our Office</h2>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              We welcome you to visit our office for any assistance, suggestions, 
              or to participate in community meetings and discussions.
            </p>
            <div className="bg-gray-700 p-6 rounded-xl shadow-lg inline-block text-left">
              <p className="mb-2">Village Panchayat Office</p>
              <p className="mb-2">Main Road, Village Name</p>
              <p className="mb-4">District, State - 123456</p>
              <p className="text-primary-400 font-semibold">Office Hours: 9 AM - 5 PM (Mon-Sat)</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
