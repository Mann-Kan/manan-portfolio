import React from 'react';
import { Calendar, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Date of Birth</h3>
              <p className="text-gray-600">25 December 2002</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={24} className="text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Languages</h3>
              <p className="text-gray-600">English, Hindi, Spanish</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-success-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hobbies</h3>
              <p className="text-gray-600">Cricket, Listening to Music</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;