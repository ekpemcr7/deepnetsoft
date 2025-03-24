import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pb-4 px-4 md:px-12 gap-4">
        <div className="border-2 border-gray-500 rounded-2xl p-6 text-center md:w-1/3 h-32 flex flex-col justify-center">
          <h3 className="text-blue-400 font-semibold">CONNECT WITH US</h3>
          <p className="mt-2">📞 +91 9567843340</p>
          <p>📧 info@deepnetsoft.com</p>
        </div>

        <div className="border-2 border-gray-500 rounded-2xl p-6 text-center md:w-1/3 h-32 flex flex-col justify-center">
          <h3 className="text-blue-400 font-semibold text-xl">DEEP NET SOFT</h3>
          <div className="flex justify-center gap-2 mt-2">
            <span>🌐</span> <span>📷</span> <span>🐦</span> <span>▶️</span>
          </div>
        </div>

        <div className="border-2 border-gray-500 rounded-2xl p-6 text-center md:w-1/3 h-32 flex flex-col justify-center">
          <h3 className="text-blue-400 font-semibold">FIND US</h3>
          <p className="mt-2">
            📍 First Floor, Geo Infopark, Infopark EXPY, Kakkanad
          </p>
        </div>
      </div>

      <div className="mt-1 border-t border-gray-700  flex justify-between pt-2 text-sm text-gray-400">
        <p className="pl-4">
          &copy; 2024 Deepnetsoft Solutions. All rights reserved.
        </p>
        <div className="flex gap-4 pr-4">
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
