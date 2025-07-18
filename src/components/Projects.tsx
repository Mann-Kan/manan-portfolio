import React from 'react';
import { Code, ExternalLink, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FacultyBot',
      year: '2025',
      description: 'AI-powered chatbot to help students find faculty by interest. Deployed on Vercel using modern web stack.',
      technologies: ['AI/ML', 'Web Development', 'Vercel'],
      status: 'Completed'
    },
    {
      title: 'E-Wallet App',
      year: '2025–Ongoing',
      description: 'Transaction app with Spring Security, OAuth 2.0, Redis for secure and efficient financial operations.',
      technologies: ['Spring Boot', 'OAuth 2.0', 'Redis', 'Security'],
      status: 'In Progress'
    },
    {
      title: 'Smart Manufacturing Optimization System',
      year: '2025–Ongoing',
      description: 'Real-time monitoring, defect prediction, AI-driven design for manufacturing optimization.',
      technologies: ['AI/ML', 'IoT', 'Real-time Systems', 'Predictive Analytics'],
      status: 'In Progress'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-success-100 text-success-800';
      case 'In Progress':
        return 'bg-primary-100 text-primary-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Code size={20} className="text-primary-600" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-500 mb-3">
                  <Calendar size={14} className="mr-2" />
                  <span className="text-sm">{project.year}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white text-gray-700 text-sm rounded-lg border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;