import React from 'react';
import { Code2, Database, Wrench, BookOpen } from 'lucide-react';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Java', 'JavaScript', 'SQL'],
      color: 'blue'
    },
    {
      title: 'Frameworks & APIs',
      icon: BookOpen,
      skills: ['Spring Boot', 'RESTful APIs'],
      color: 'green'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL'],
      color: 'purple'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git', 'Eclipse', 'JUnit'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-primary-100 text-primary-600',
      green: 'bg-success-100 text-success-600',
      purple: 'bg-accent-100 text-accent-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  const getSkillBadgeColor = (color: string) => {
    const colorMap = {
      blue: 'bg-primary-50 text-primary-700 border-primary-200',
      green: 'bg-success-50 text-success-700 border-success-200',
      purple: 'bg-accent-50 text-accent-700 border-accent-200',
      orange: 'bg-orange-50 text-orange-700 border-orange-200'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(category.color)}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`inline-block w-full px-3 py-2 text-sm font-medium rounded-lg border text-center ${getSkillBadgeColor(category.color)}`}
                    >
                      {skill}
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

export default TechnicalSkills;