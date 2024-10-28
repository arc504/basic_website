// components/Prizes.js

import React from "react";
import Link from "next/link";

const Prizes = () => {
  const prizeCategories = [
    {
      title: "Hackathon",
      prizes: [
        { position: "1st Place", amount: "₹15,000" },
        { position: "2nd Place", amount: "₹7,000" },
      ],
    },
    {
      title: "Designathon",
      prizes: [
        { position: "1st Place", amount: "₹10,000" },
        { position: "2nd Place", amount: "₹5,000" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 flex flex-col items-center justify-center">
      <div className="w-full py-16 px-6 lg:px-12 animate-fade-in">
        <h1 className="text-center text-5xl font-extrabold text-purple-800 mb-8 tracking-tight animate-slide-down">
          Prizes
        </h1>
        <p className="text-center text-xl mb-12 text-gray-700 max-w-2xl mx-auto animate-fade-in-delay">
          Showcase your creativity and skills in Hackathon, Ideathon, and
          Designathon to win amazing cash prizes!
        </p>
        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {prizeCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white shadow-lg hover:shadow-2xl rounded-xl p-8 text-center transform hover:scale-105"
            >
              <h2 className="text-3xl font-semibold text-purple-700 mb-6 animate-slide-up">
                {category.title}
              </h2>
              <ul className="space-y-4">
                {category.prizes.map((prize, index) => (
                  <li
                    key={index}
                    className="text-lg flex justify-between items-center border-b-2 pb-2 border-gray-200 animate-fade-in-delay"
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  >
                    <span className="font-semibold">{prize.position}</span>
                    <span className="text-purple-600 font-bold">
                      {prize.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Go Back Home Button */}
        <div className="mt-16 text-center">
          <Link href="/">
            <button className="px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-500 transition-colors duration-300 transform hover:scale-105 animate-bounce-slow">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
