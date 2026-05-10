import React from 'react';
import { Github, Instagram, Youtube, MessageCircle, ArrowLeft, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface SocialProps {
  setActiveSection: (section: string) => void;
}

// Custom TikTok Icon Component
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Custom Facebook Icon Component
const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Social: React.FC<SocialProps> = ({ setActiveSection }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      username: '@HanafiAdaWong',
      description: 'Repository kode dan proyek open source',
      url: "https://github.com/HanafiAdaWong",
      icon: Github,
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:from-gray-700 hover:to-gray-900'
    },
    {
      name: 'Instagram',
      username: '@hanakaguu_',
      description: 'Sharing moments dan behind the scenes',
      url: "https://www.instagram.com/hanakaguu_/",
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      name: 'YouTube',
      username: '@halukagyuu',
      description: 'Junior Content Creator',
      url: "https://www.youtube.com/@halukagyuu",
      icon: Youtube,
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    },
    {
      name: 'TikTok',
      username: '@harukashii.shi',
      description: 'Uploading Savage Moment',
      url: "https://www.tiktok.com/@harukashii.shi",
      icon: TikTokIcon,
      color: 'from-black to-pink-600',
      hoverColor: 'hover:from-gray-900 hover:to-pink-700'
    },
    {
      name: 'Facebook',
      username: 'Muhammad Hanafi',
      description: 'Kenangan Terindah',
      url: "https://www.facebook.com/hanafi.ginting.5?mibextid=ZbWKwL",
      icon: FacebookIcon,
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-700 hover:to-blue-900'
    },
    {
      name: 'Discord',
      username: 'kaizo_ranshel (Haruka)',
      description: 'Community discussions dan real-time chat',
      url: "https://discordapp.com/users/kaizo_ranshel",
      icon: MessageCircle,
      color: 'from-indigo-500 to-purple-600',
      hoverColor: 'hover:from-indigo-600 hover:to-purple-700'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-purple-900/20">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
            Social Media
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mari terhubung dan berbagi pengalaman di berbagai platform digital
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-2xl transition-all duration-500 group hover:bg-white/10 cursor-pointer"
              onClick={() => handleSocialClick(social.url)}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg mb-4`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{social.name}</h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                
                <p className="text-gray-300 text-sm mb-3">{social.username}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{social.description}</p>
                
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1 text-xs text-gray-300 bg-white/10 px-2 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Aktif
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connect CTA */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Mari Terhubung!</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Saya selalu senang bertemu dan berdiskusi dengan fellow developers, mahasiswa, atau siapa saja yang tertarik dengan dunia teknologi. 
              Jangan ragu untuk menyapa di platform mana pun!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleSocialClick("https://github.com/HanafiAdaWong")}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Follow GitHub
              </button>
              <button
                onClick={() => handleSocialClick("https://www.instagram.com/hanakaguu_/")}
                className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30"
              >
                Follow Instagram
              </button>
              <button
                onClick={() => handleSocialClick("https://www.tiktok.com/@harukashii.shi")}
                className="px-6 py-3 bg-gradient-to-r from-black to-pink-600 text-white rounded-xl font-semibold hover:from-gray-900 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Follow TikTok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;