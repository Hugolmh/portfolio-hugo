import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hugo Lamarche
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Étudiant en BTS SIO SLAM
            </h2>
            <p className="text-gray-600 mb-8">
              Né le 20 mars 2004 • En alternance chez CNMSS à Toulon
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@hugolamarche.fr"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                title="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/hugolamarche"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/hugolamarche"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80"
              alt="Hugo Lamarche"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;