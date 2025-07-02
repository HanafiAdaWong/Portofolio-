import React, { useState } from 'react';
import { Copy, Check, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const JsonDisplay: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const jsonData = {
    name: portfolioData.name,
    role: portfolioData.role,
    university: portfolioData.university,
    location: portfolioData.location,
    status: portfolioData.status,
    introduction: portfolioData.introduction,
    highlight_project: portfolioData.highlight_project,
    socials: portfolioData.socials,
    theme: portfolioData.theme
  };

  const jsonString = JSON.stringify(jsonData, null, 2);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const formatJsonWithSyntaxHighlight = (jsonStr: string) => {
    return jsonStr
      .replace(/(".*?"):/g, '<span class="text-blue-300">$1</span>:')
      .replace(/: (".*?")/g, ': <span class="text-green-300">$1</span>')
      .replace(/: (true|false|null)/g, ': <span class="text-purple-300">$1</span>')
      .replace(/: (\d+)/g, ': <span class="text-yellow-300">$1</span>')
      .replace(/([{}])/g, '<span class="text-gray-300">$1</span>')
      .replace(/(\[|\])/g, '<span class="text-gray-300">$1</span>');
  };

  return (
    <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <Code className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">portfolio.json</h3>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-200 text-sm"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      <div className="bg-black/50 rounded-xl p-4 border border-gray-800">
        <pre className="text-sm font-mono text-gray-200 overflow-x-auto">
          <code
            dangerouslySetInnerHTML={{
              __html: formatJsonWithSyntaxHighlight(jsonString)
            }}
          />
        </pre>
      </div>
      
      <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span>Live data from portfolio configuration</span>
      </div>
    </div>
  );
};

export default JsonDisplay;