import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // User has scrolled
      } else {
        setIsScrolled(false); // User is at the top
      }
    };

    // Add event listener to track scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar py-1 px-20 flex items-center justify-between ${
        isScrolled ? "bg-emerald-950" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <h2 className="text-3xl text-white">Mainly logo</h2>
      <div className="flex transp px-8 gap-8 items-center justify-center text-sm">
        <Link to="/" className="text-white text-lg">
          Home
        </Link>
        <Link to="/learning" className="text-white text-lg">
          Learning
        </Link>
        <Link to="/program" className="text-white text-lg">
          Program
        </Link>
        <Link to="/admissions" className="text-white text-lg">
          Admissions
        </Link>
        <Link to="/signup">
          <button className="chatwithus bg-emerald-950 rounded-none hover:bg-emerald-600 text-sm p-3 border-white text-white">
            CHAT WITH US
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
