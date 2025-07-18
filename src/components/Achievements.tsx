import React from 'react';
import { Trophy, Users, FileText, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Vice-President – Data Science Club',
      year: '2025',
      icon: Users,
      category: 'Leadership'
    },
    {
      title: 'Management Head – Data Science Club',
      year: '2024',
      icon: Users,
      category: 'Leadership'
    },
    {
      title: 'Paper on Heavy Metal Pollution published in International Conference',
      year: '2024',
      icon: FileText,
      category: 'Research'
    },
    {
      title: 'University Clan Vice-President',
      year: '2023–24',
      icon: Award,
      category: 'Leadership'
    },
    {
      title: '3rd Place – UiPath Hack-a-bot',
      year: '2023',
      icon: Trophy,
      category: 'Competition'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Leadership':
        return 'bg-primary-100 text-primary-800';
      case 'Research':
        return 'bg-success-100 text-success-800';
      case 'Competition':
        return 'bg-accent-100 text-accent-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getIconColor = (category: string) => {
    switch (category) {
      case 'Leadership':
        return 'bg-primary-100 text-primary-600';
      case 'Research':
        return 'bg-success-100 text-success-600';
      case 'Competition':
        return 'bg-accent-100 text-accent-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${getIconColor(achievement.category)}`}>
                    <achievement.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">{achievement.title}</h3>
                      <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(achievement.category)}`}>
                          {achievement.category}
                        </span>
                        <span className="text-gray-500 font-medium">{achievement.year}</span>
                      </div>
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

export default Achievements;