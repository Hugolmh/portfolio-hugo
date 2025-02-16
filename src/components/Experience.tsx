import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Code, Github as Git, Database } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Développeur Informatique',
      company: 'CNMSS',
      period: '2022 - Présent',
      description: 'Développement et maintenance d\'applications métiers',
      tasks: [
        'Développement de nouvelles fonctionnalités',
        'Maintenance d\'applications existantes',
        'Collaboration avec les équipes métiers',
        'Participation aux réunions de projet'
      ],
      icon: <Code className="w-6 h-6" />,
      tech: ['Php', 'SQL', 'Git']
    },
    {
      title: 'Projet Principal',
      company: 'Application de Gestion',
      period: '2023',
      description: 'Développement d\'une application de gestion interne',
      tasks: [
        'Conception de l\'architecture',
        'Développement du front-end',
        'Mise en place de la base de données',
        'Tests et déploiement'
      ],
      icon: <Database className="w-6 h-6" />,
      tech: ['TypeScript', 'React', 'PostgreSQL', 'Docker']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Expériences Professionnelles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mes expériences en tant que développeur en alternance
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg mr-4">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;