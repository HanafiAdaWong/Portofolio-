import React from 'react';
import { ExternalLink, Code, Globe, ArrowLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface ProjectsProps {
  setActiveSection: (section: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setActiveSection }) => {
  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <button
            onClick={() => setActiveSection('home')}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Home
          </button>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Proyek Saya
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Berikut adalah proyek-proyek yang telah saya kerjakan dalam perjalanan belajar pengembangan web
          </p>
        </div>

        {/* Highlight Project */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proyek Unggulan</h3>
          
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">{portfolioData.highlight_project.title}</h4>
                    <span className="text-cyan-300 text-sm">Community Website</span>
                  </div>
                </div>
                
                <p className="text-gray-200 leading-relaxed mb-6">
                  {portfolioData.highlight_project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Discord API', 'Community Management', 'Web Design'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => handleProjectClick(portfolioData.highlight_project.url)}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Kunjungi Website
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="relative group/img overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <img 
                    src={portfolioData.highlight_project.image} 
                    alt="Kaze Serenity Preview"
                    className="w-full h-auto object-cover transform group-hover/img:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                          <span className="text-white text-sm font-medium">Live & Active</span>
                        </div>
                        <span className="text-cyan-300 text-xs">Official Community Website</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {portfolioData.projects?.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-purple-500/10 transition-all duration-500 group flex flex-col h-full"
            >
              {/* Project Image Preview */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-xs border border-purple-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 pb-6 mt-auto">
                <button
                  onClick={() => handleProjectClick(project.url)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors border border-white/10 group-hover:border-purple-500/30"
                >
                  Lihat Proyek
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Projects Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Proyek Mendatang</h3>
          
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4">Dalam Pengembangan</h4>
              <p className="text-gray-300 mb-6">
                Saya sedang mengerjakan beberapa proyek menarik yang akan segera diluncurkan. 
                Stay tuned untuk update terbaru dari perjalanan coding saya!
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;