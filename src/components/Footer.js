import React from 'react';
import Leaf from '../images/leaf.png';

const Footer = () => {
  return (
    <footer className="py-3 w-full flex flex-col justify-center items-center bg-gray-200 shadow">
        <p className="text-center mt-2 mx-4 text-indigo-600 text-sm font-semibold">NEWS Community - <span className="font-light text-sm text-black">A news constructive and inclusive social network for people's. With you every step of your journey.</span></p>
        <p className="mt-4 text-center text-sm">Made with <span className="text-indigo-600">love</span> and <span className="text-indigo-600">REACT</span>.</p>
        <img className="w-5 mt-2 mb-2" src={Leaf} alt="leaf" />
    </footer>
  )
}

export default Footer