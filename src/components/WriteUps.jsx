import React from 'react';

const writeUpsData = [
  {
    id: 1,
    title: 'Simple CTF - TryHackMe',
    description: 'This challenge the basics of web exploitation in this CTF challenge.',
    link: 'https://medium.com/@harishkumarkannan2005/tryhackme-simplectf-1d05537449e8',
  },
  {
    id: 2,
    title: 'Basic Pentesting - TryHackMe',
    description: 'This room covers a Fundamentals pentesting ',
    link: 'https://medium.com/@harishkumarkannan2005/basic-pentesting-room-tryhackme-a8138d32f1ab',
  }
];

const WriteUps = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-4 px-2 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">Write-Ups</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {writeUpsData.map((writeUp) => (
          <div
            key={writeUp.id}
            onClick={() => window.open(writeUp.link, '_blank')}
            className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 space-y-2"
          >
            <h2 className="text-lg font-semibold text-gray-800">{writeUp.title}</h2>
            <p className="text-sm text-gray-600">{writeUp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WriteUps;
