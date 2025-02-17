import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Building2 } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      title: 'BTS SIO option SLAM',
      institution: 'En alternance',
      period: '2022 - Present',
      description: 'Solutions Logicielles et Applications Métiers',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: 'Alternance CNMSS',
      institution: 'Toulon',
      period: '2022 - Present',
      description: 'Développement d\'applications métiers',
      icon: <Building2 className="w-6 h-6" />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Parcours & Formation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mon parcours académique et professionnel dans le développement informatique
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-8 border-l-2 border-gray-200 last:border-0"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 bg-white p-2 rounded-full border-2 border-gray-200">
                {item.icon}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.institution}</p>
                <p className="text-sm text-gray-500 mb-4">{item.period}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;