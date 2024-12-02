import React from 'react';

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900/50">
    <div className="relative">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-8 w-8 rounded-full bg-blue-500/20"></div>
      </div>
    </div>
  </div>
);

export default Loading;