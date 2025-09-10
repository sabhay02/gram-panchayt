import { motion } from "framer-motion";
import { useState } from "react";
import {
  FileText,
  Home,
  Droplets,
  Zap,
  Heart,
  GraduationCap,
  Building,
  Truck,
  Search,
  Filter,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      icon: FileText,
      title: "Birth Certificate",
      description:
        "Apply for birth certificate online with required documents. Fast processing within 7 working days.",
      category: "certificates",
      color: "primary",
      requirements: [
        "Birth Registration Form",
        "Hospital Certificate",
        "Parent ID Proof",
      ],
      processingTime: "7 days",
    },
    {
      icon: FileText,
      title: "Death Certificate",
      description:
        "Get death certificate issued quickly for legal and administrative purposes.",
      category: "certificates",
      color: "secondary",
      requirements: ["Death Registration Form", "Medical Certificate", "ID Proof"],
      processingTime: "5 days",
    },
    {
      icon: Heart,
      title: "Marriage Certificate",
      description:
        "Register your marriage and obtain official marriage certificate.",
      category: "certificates",
      color: "purple",
      requirements: [
        "Marriage Registration Form",
        "Age Proof",
        "Photos",
        "Witnesses",
      ],
      processingTime: "10 days",
    },
    {
      icon: Home,
      title: "Property Tax",
      description:
        "Pay property tax online and get instant receipt. View tax history and pending dues.",
      category: "tax",
      color: "blue",
      requirements: [
        "Property Documents",
        "Previous Tax Receipt",
        "ID Proof",
      ],
      processingTime: "Instant",
    },
    {
      icon: Droplets,
      title: "Water Connection",
      description:
        "Apply for new water connection or transfer existing connection to your name.",
      category: "utilities",
      color: "blue",
      requirements: [
        "Application Form",
        "Property Proof",
        "ID Proof",
        "Site Plan",
      ],
      processingTime: "15 days",
    },
    {
      icon: Zap,
      title: "Electricity Connection",
      description:
        "Get new electricity connection or modify existing connection details.",
      category: "utilities",
      color: "orange",
      requirements: [
        "Application Form",
        "Property Documents",
        "Load Requirement",
        "ID Proof",
      ],
      processingTime: "21 days",
    },
    {
      icon: Building,
      title: "Building Permission",
      description:
        "Apply for building construction permission and get approval for your project.",
      category: "permits",
      color: "secondary",
      requirements: [
        "Building Plan",
        "Site Survey",
        "NOC Documents",
        "Fee Payment",
      ],
      processingTime: "30 days",
    },
    {
      icon: GraduationCap,
      title: "Education Certificate",
      description:
        "Get income certificate for educational purposes and scholarship applications.",
      category: "certificates",
      color: "purple",
      requirements: [
        "Income Declaration",
        "Employment Certificate",
        "Bank Statement",
      ],
      processingTime: "7 days",
    },
    {
      icon: Truck,
      title: "Trade License",
      description:
        "Apply for trade license to start your business legally in the village.",
      category: "permits",
      color: "primary",
      requirements: [
        "Business Plan",
        "Shop/Office Proof",
        "ID Proof",
        "NOC",
      ],
      processingTime: "20 days",
    },
  ];

  const categories = [
    { value: "all", label: "All Services" },
    { value: "certificates", label: "Certificates" },
    { value: "tax", label: "Tax Services" },
    { value: "utilities", label: "Utilities" },
    { value: "permits", label: "Permits & Licenses" },
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Government Services
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Access all essential government services online. Apply, track, and
              manage your applications from the comfort of your home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <Filter
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field pl-10 pr-8 appearance-none bg-white"
              >
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Available Services ({filteredServices.length})
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive list of digital services designed to
              make your interaction with the government simple and efficient.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="card-hover p-6"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 border ${
                    service.color === "primary"
                      ? "bg-green-50 text-green-600 border-green-200"
                      : service.color === "secondary"
                      ? "bg-teal-50 text-teal-600 border-teal-200"
                      : service.color === "blue"
                      ? "bg-blue-50 text-blue-600 border-blue-200"
                      : service.color === "purple"
                      ? "bg-purple-50 text-purple-600 border-purple-200"
                      : "bg-orange-50 text-orange-600 border-orange-200"
                  }`}
                >
                  <service.icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">
                      Required Documents:
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Processing Time:</span>
                    <span className="font-medium text-green-600">
                      {service.processingTime}
                    </span>
                  </div>
                </div>

                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                No services found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Our support team is here to assist you with any questions about
              our services or help you complete your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-green-700 hover:bg-gray-100">
                Contact Support
              </button>
              <button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700">
                Download Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
