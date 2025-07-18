import React from 'react';
import { Github, Linkedin, Mail, MapPin, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Mann-Kan',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/manan-kant-agarwal-867040249/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:mkantagarwal@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-primary-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              MKA
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Manan Kant Agarwal
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-primary-600 font-semibold mb-6">
            Aspiring Software Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Software Developer | Passionate about Java, backend systems, and scalable architecture | 
            I engineer logic into solutions.
          </p>
          
          <div className="flex items-center justify-center text-gray-500 mb-8">
            <MapPin size={20} className="mr-2" />
            <span>Faridabad, India</span>
          </div>
          
          <div className="flex justify-center space-x-6 mb-10">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-primary-50 transition-all duration-300 text-gray-700 hover:text-primary-600"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/manan-portfolio/Resume.pdf"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
            <a
              href="mailto:mkantagarwal@gmail.com"
              className="inline-flex items-center px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              <MessageCircle size={20} className="mr-2" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
