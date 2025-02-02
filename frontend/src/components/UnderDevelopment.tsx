import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoConstructOutline } from "react-icons/io5";

function UnderDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-8"
        >
          <IoConstructOutline className="w-24 h-24 text-blue-500" />
        </motion.div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Under <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Development</span>
        </h1>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We're working hard to bring you something amazing. This page is currently under construction.
        </p>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default UnderDevelopment;