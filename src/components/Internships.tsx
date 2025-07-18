import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      company: 'UnitedRSA Management Solutions LLP',
      position: 'IT Intern',
      duration: 'June 2024 – July 2024',
      type: 'Internship',
      description: 'Gained hands-on experience in IT operations and system management.'
    },
    {
      company: 'Bharat Intern',
      position: 'Data Science Intern',
      duration: 'Sept 2023 – Oct 2023',
      type: 'Internship',
      description: 'Worked on Stock Price Prediction and Titanic Classification Projects using Python, Pandas, NumPy, Scikit-Learn, and Jupyter Notebook.'
    }
  ];

  return (
    <section id="internships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase size={24} className="text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{internship.position}</h3>
                      <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                        {internship.type}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-primary-600 mb-2">{internship.company}</h4>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{internship.duration}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{internship.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
    )
    
    </section>
  );
};

export default Internships;