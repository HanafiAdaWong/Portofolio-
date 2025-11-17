import React from 'react';
import { MapPin, GraduationCap, ArrowRight, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import JsonDisplay from './JsonDisplay';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Card */}
          <div className="text-center lg:text-left">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
              {/* Profile Section */}
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden shadow-lg border-2 border-purple-400/50">
                  <img 
                    src="https://ik.imagekit.io/uch3hpxqn/h.jpg?updatedAt=1762874709108"
                    alt="Hanakagu Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {portfolioData.name}
                </h1>
                <p className="text-xl text-purple-300 mb-4">{portfolioData.role}</p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>{portfolioData.university}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{portfolioData.location}</span>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-200 leading-relaxed">
                  {portfolioData.introduction}
                </p>
              </div>

              {/* Status Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  {portfolioData.status}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setActiveSection('projects')}
                  className="group px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Lihat Proyek
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setActiveSection('about')}
                  className="px-8 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30"
                >
                  Tentang Saya
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - JSON Display */}
          <div className="flex flex-col gap-6">
            <div className="text-center lg:text-left mb-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-2">
                <Database className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Data Configuration</h2>
              </div>
              <p className="text-gray-300">
                Portfolio data dalam format JSON untuk integrasi dan konfigurasi
              </p>
            </div>
            
            <JsonDisplay />
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Live Data</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>JSON Format</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Copy to Clipboard</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Syntax Highlight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;