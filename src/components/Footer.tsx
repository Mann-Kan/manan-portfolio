import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Manan Kant Agarwal</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Aspiring Software Engineer passionate about creating innovative solutions 
              and building scalable systems.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Mann-Kan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/manan-kant-agarwal-867040249/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mkantagarwal@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              © {currentYear} Manan Kant Agarwal. Made with{' '}
              <Heart size={16} className="mx-1 text-red-500" />
              and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;