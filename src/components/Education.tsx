import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Manav Rachna International Institute of Research and Studies',
      period: '2022 – Present',
      grade: 'CGPA: 7.43',
      icon: GraduationCap
    },
    {
      degree: '12th Grade',
      institution: 'JIVA Public School',
      period: '2021',
      grade: '82.8%',
      icon: Award
    },
    {
      degree: '10th Grade',
      institution: 'JIVA Public School',
      period: '2019',
      grade: '83.0%',
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.degree}</h3>
                    <p className="text-lg text-gray-700 mb-2">{item.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-primary-600 font-semibold">{item.period}</span>
                      <span className="text-gray-600 font-medium">{item.grade}</span>
                    </div>
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

export default Education;