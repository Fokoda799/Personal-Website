import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Email', icon: Mail, href: 'mailto:alex@example.com' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Alex Chen</h3>
            <p className="text-secondary-300 mb-4">
              Entrepreneur and innovator passionate about creating solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/journey" className="text-secondary-300 hover:text-white transition-colors">My Journey</a></li>
              <li><a href="/solution" className="text-secondary-300 hover:text-white transition-colors">The Solution</a></li>
              <li><a href="/prototype" className="text-secondary-300 hover:text-white transition-colors">Prototype</a></li>
              <li><a href="/reflection" className="text-secondary-300 hover:text-white transition-colors">Reflections</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-secondary-300 mb-2">alex@example.com</p>
            <p className="text-secondary-300 mb-4">San Francisco, CA</p>
            <p className="text-secondary-300 text-sm">
              Open to collaboration and new opportunities
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8 text-center">
          <p className="text-secondary-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Alex Chen © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;