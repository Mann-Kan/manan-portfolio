import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    'UiPath RPA Citizen Developer Foundation',
    'CompTIA A+ Core 1 (Networking Essentials)',
    'Azure Data & AI Masterclass',
    'AI Foundations: Machine Learning',
    'Creating & Giving Business Presentations'
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Training</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-success-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">{cert}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;