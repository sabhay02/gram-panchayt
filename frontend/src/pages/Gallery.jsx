import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Calendar, MapPin, Users, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Village Development Project',
      category: 'development',
      date: '2024-01-15',
      location: 'Main Village Square',
      description: 'Inauguration of the new community center and library facility for villagers.'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Digital Literacy Program',
      category: 'education',
      date: '2024-01-10',
      location: 'Panchayat Office',
      description: 'Training session for senior citizens on using digital services and online applications.'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Clean Water Initiative',
      category: 'infrastructure',
      date: '2024-01-05',
      location: 'Ward 3',
      description: 'Installation of new water purification system ensuring clean drinking water for all households.'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Health Camp 2024',
      category: 'health',
      date: '2023-12-20',
      location: 'Primary Health Center',
      description: 'Free health checkup camp organized for all villagers with specialist doctors.'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Road Construction',
      category: 'infrastructure',
      date: '2023-12-15',
      location: 'Village Roads',
      description: 'Completion of concrete road construction connecting all major areas of the village.'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Cultural Festival',
      category: 'events',
      date: '2023-12-10',
      location: 'Village Ground',
      description: 'Annual cultural festival celebrating local traditions and community spirit.'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Skill Development Workshop',
      category: 'education',
      date: '2023-12-05',
      location: 'Community Hall',
      description: 'Vocational training program for youth focusing on modern agricultural techniques.'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Solar Panel Installation',
      category: 'development',
      date: '2023-11-30',
      location: 'Panchayat Building',
      description: 'Installation of solar panels for sustainable energy and reduced electricity costs.'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Women Empowerment Program',
      category: 'events',
      date: '2023-11-25',
      location: "Women's Center",
      description: 'Self-help group meeting and microfinance program launch for women entrepreneurs.'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'development', label: 'Development' },
    { value: 'education', label: 'Education' },
    { value: 'infrastructure', label: 'Infrastructure' },
    { value: 'health', label: 'Health' },
    { value: 'events', label: 'Events' }
  ];

  const filteredImages = images.filter(image => 
    selectedCategory === 'all' || image.category === selectedCategory
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
          >
            Village Gallery
          </motion.h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
            Explore the visual journey of our village's progress, events, and initiatives. 
            Witness the transformation and celebrate our achievements together.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="relative">
            <Filter size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Journey in Pictures ({filteredImages.length})
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each image tells a story of progress, unity, and community spirit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <span className={`absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full text-white shadow ${
                    image.category === 'development' ? 'bg-blue-500' :
                    image.category === 'education' ? 'bg-green-500' :
                    image.category === 'infrastructure' ? 'bg-orange-500' :
                    image.category === 'health' ? 'bg-red-500' :
                    'bg-purple-500'
                  }`}>
                    {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                  </span>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{image.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {new Date(image.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={12} className="mr-1" />
                      {image.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Users size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-600">No images found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-4">{selectedImage.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {new Date(selectedImage.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {selectedImage.location}
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full text-white ${
                  selectedImage.category === 'development' ? 'bg-blue-500' :
                  selectedImage.category === 'education' ? 'bg-green-500' :
                  selectedImage.category === 'infrastructure' ? 'bg-orange-500' :
                  selectedImage.category === 'health' ? 'bg-red-500' :
                  'bg-purple-500'
                }`}>
                  {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4">Share Your Moments</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Have photos from village events or projects? Share them with us to be featured in the gallery.
            </p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100 transform hover:-translate-y-0.5 transition">
              Submit Photos
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
