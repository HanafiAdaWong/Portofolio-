import React from 'react';
import { GraduationCap, Code, Users, Heart, ArrowLeft, BookOpen, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface AboutProps {
  setActiveSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ setActiveSection }) => {
  const skills = [
    { name: 'Web Development', level: 75, color: 'from-blue-500 to-cyan-500' },
    { name: 'React & TypeScript', level: 70, color: 'from-purple-500 to-pink-500' },
    { name: 'Backend Development', level: 60, color: 'from-green-500 to-blue-500' },
    { name: 'Community Management', level: 85, color: 'from-orange-500 to-red-500' },
  ];

  const interests = [
    { icon: Code, title: 'Web Development', description: 'Pengembangan aplikasi web modern dengan teknologi terkini' },
    { icon: Users, title: 'Community Building', description: 'Membangun dan mengelola komunitas digital yang aktif' },
    { icon: BookOpen, title: 'Continuous Learning', description: 'Selalu belajar teknologi baru dan best practices' },
    { icon: Target, title: 'Backend Systems', description: 'Merancang sistem backend yang scalable dan efisien' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            Tentang Saya
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mengenal lebih dalam tentang perjalanan dan minat saya dalam dunia teknologi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Personal Info */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Profil Akademik</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Universitas</span>
                <span className="text-white font-semibold">{portfolioData.university}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Jurusan</span>
                <span className="text-white font-semibold">Teknik Informatika</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Lokasi</span>
                <span className="text-white font-semibold">{portfolioData.location}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Status</span>
                <span className="text-green-300 font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Aktif
                </span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Keahlian</h3>
            </div>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-white font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Minat & Fokus</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:bg-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <interest.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{interest.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{interest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <blockquote className="text-xl text-gray-200 italic mb-4 leading-relaxed">
              "Setiap baris kode yang saya tulis adalah langkah menuju pemahaman yang lebih dalam tentang teknologi dan cara membangun solusi yang bermanfaat untuk komunitas."
            </blockquote>
            
            <p className="text-purple-300 font-semibold">— {portfolioData.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;