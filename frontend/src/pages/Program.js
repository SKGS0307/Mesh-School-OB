import React from 'react';
import '../stylesheets/Program.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import img from '../assets/Frame-706-1.png'
import vid from '../assets/vid.mp4'

import { useState } from "react";

const Program = () => {

        const navigate = useNavigate();
        const buycourse = async () => {
        try {

        const isAuthenticated = localStorage.getItem('token') !== null;
        if (!isAuthenticated) {
            // Use useNavigate hook to redirect to login page
            navigate('/login');
            return;
        }

        let response = await axios.post('http://localhost:8080/payment');

        if (response && response.status === 200) {
            console.log("Response Data:", response.data); // Check what you're receiving
            window.location.href = response.data.url; // Redirect to payment URL
        }
    } catch (error) {
        console.error("Error while redirecting:", error);
    }
};

   const [activeTerm, setActiveTerm] = useState(1);

  // Content for each term
  const termContent = {
    1: {
      inClass: [
        "Crafting Marketing Strategies",
        "Financial Statement Analysis and Benchmarking",
        "Data-Driven Decision Making",
        "Business Storytelling",
        "Market Mastery: Economics in Action",
        "Launching & Leading Startups: Ideation",
      ],
      outClass: ["Build Your Own Business (BYOB)", "Sales Challenge"],
      professional: [
        "LinkedIn & Personal Branding",
        "Elevator Pitch",
        "Guesstimates",
        "Technology for Management: Excel",
      ],
    },
    2: {
      inClass: [
        "Advanced Financial Modelling",
        "Strategic Brand Management",
        "Global Economics",
        "Design Thinking",
      ],
      outClass: ["Corporate Internship", "Case Study Challenge"],
      professional: ["Public Speaking", "Resume Workshops"],
    },
    3: {
      inClass: [
        "Operations Management",
        "Consumer Insights",
        "Business Ethics",
        "Entrepreneurship",
      ],
      outClass: ["Capstone Project"],
      professional: ["Mock Interviews", "Portfolio Building"],
    },

    4:{
      inClass: [
        "Crafting 44444444444444444",
        "Financial Statement Analysis and Benchmarking",
        "Data-Driven Decision Making",
        "Business Storytelling",
        "Market Mastery: Economics in Action",
        "Launching & Leading Startups: Ideation",
      ],
      outClass: ["Build Your Own Business (BYOB)", "Sales Challenge"],
      professional: [
        "LinkedIn & Personal Branding",
        "Elevator Pitch",
        "Guesstimates",
        "Technology for Management: Excel",
      ],

    },

    5:{
      inClass: [
        "Crafting 55555555555555555555",
        "Financial Statement Analysis and Benchmarking",
        "Data-Driven Decision Making",
        "Business Storytelling",
        "Market Mastery: Economics in Action",
        "Launching & Leading Startups: Ideation",
      ],
      outClass: ["Build Your Own Business (BYOB)", "Sales Challenge"],
      professional: [
        "LinkedIn & Personal Branding",
        "Elevator Pitch",
        "Guesstimates",
        "Technology for Management: Excel",
      ],

    },

    6:{
      inClass: [
        "Crafting6666666666666666666666",
        "Financial Statement Analysis and Benchmarking",
        "Data-Driven Decision Making",
        "Business Storytelling",
        "Market Mastery: Economics in Action",
        "Launching & Leading Startups: Ideation",
      ],
      outClass: ["Build Your Own Business (BYOB)", "Sales Challenge"],
      professional: [
        "LinkedIn & Personal Branding",
        "Elevator Pitch",
        "Guesstimates",
        "Technology for Management: Excel",
      ],

    },

    7:{
      inClass: [
        "Crafting 7777777777777777",
        "Financial Statement Analysis and Benchmarking",
        "Data-Driven Decision Making",
        "Business Storytelling",
        "Market Mastery: Economics in Action",
        "Launching & Leading Startups: Ideation",
      ],
      outClass: ["Build Your Own Business (BYOB)", "Sales Challenge"],
      professional: [
        "LinkedIn & Personal Branding",
        "Elevator Pitch",
        "Guesstimates",
        "Technology for Management: Excel",
      ],

    }
  }

  // Time Table starts here

  const events = [
  {
    day: "Monday",
    slots: [
      { time: "9:00 - 11:00", title: "Economics of B2B SaaS" },
      { time: "12:00 - 14:00", title: "Strategic Brand Management" },
      { time: "15:00 - 17:00", title: "Business Storytelling" },
      { time: "18:00 - 19:00", title: "1:1 with industry mentor" },
      { time: "19:00 - 21:00", title: "Group work on BYOB" },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { time: "9:00 - 12:00", title: "Selling yourself and your ideas" },
      { time: "13:00 - 15:00", title: "Generative AI in Business" },
      { time: "16:00 - 18:00", title: "Pricing Strategies" },
      { time: "19:00 - 21:00", title: "Start-up PM meet up" },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { time: "9:00 - 18:00", title: "Hands-on Bootcamp on Tableau and PowerBI" },
      { time: "19:00 - 21:00", title: "1:1 with Ankit Agarwal" },
    ],
  },
  {
    day: "Thursday",
    slots: [
      { time: "10:00 - 12:00", title: "Fireside Chat with Unicorn Founder" },
      { time: "13:00 - 15:00", title: "MasterClass on Electric Vehicles" },
      { time: "16:00 - 18:00", title: "Career-Prep Session on Elevator Pitch" },
      { time: "19:00 - 21:00", title: "Group work on BYOB" },
    ],
  },
  {
    day: "Friday",
    slots: [
      { time: "9:00 - 18:00", title: "Help a leading D2C brand enter a new market" },
      { time: "19:00 - 21:00", title: "Self Prep" },
    ],
  },
  {
    day: "Saturday",
    slots: [
      { time: "9:00 - 18:00", title: "Help a leading D2C brand enter a new market" },
      { time: "19:00 - 21:00", title: "Networking Dinner with a leading D2C team" },
    ],
  },
  {
    day: "Sunday",
    slots: [{ time: "8:00 - 12:00", title: "Football Match & Recreational activities" }],
  },
];

const [activeCategory, setActiveCategory] = useState("All");

  // Data for each category
  const facultyData = {
    All: [
      { name: "Gurudev Prasad", title: "Partner and Co-Founder", company: "BusyBee Brands", image: img },
      { name: "Faye D'souza", title: "Founder", company: "Beatroot News", image: img },
      { name: "Major Deepak", title: "Founder and CEO", company: "Mastery Inside", image: img },
      { name: "Namita Dalmia", title: "Co-founder & Partner", company: "Enzia", image: img },
      { name: "Namita Dalmia", title: "Co-founder & Partner", company: "Enzia", image: img },
      { name: "Namita Dalmia", title: "Co-founder & Partner", company: "Enzia", image: img },
      { name: "Namita Dalmia", title: "Co-founder & Partner", company: "Enzia", image: img },
      { name: "Namita Dalmia", title: "Co-founder & Partner", company: "Enzia", image: img },
      { name: "Namita Dalmia", title: "Co-founder & Partner", company: "Enzia", image: img },
      { name: "Namita Dalmia", title: "Co-founder & Partner", company: "Enzia", image: img },
      { name: "Namita Dalmia", title: "Co-founder & Partner", company: "Enzia", image: img },
      { name: "Namita Dalmia", title: "Co-founder & Partner", company: "Enzia", image: img },
      { name: "Namita Dalmia", title: "Co-founder & Partner", company: "Enzia", image: img },
    ],
    "Startup Leaders": [
      { name: "Salil Aggarwal", title: "VP", company: "Urban Company", image: img },
      { name: "Utkarsh Gupta", title: "Founder", company: "Comet", image: img },
      { name: "Utkarsh Gupta", title: "Founder", company: "Comet", image: img },
      { name: "Utkarsh Gupta", title: "Founder", company: "Comet", image: img },
      { name: "Utkarsh Gupta", title: "Founder", company: "Comet", image: img },
      { name: "Utkarsh Gupta", title: "Founder", company: "Comet", image: img },
      { name: "Utkarsh Gupta", title: "Founder", company: "Comet", image: img },
      { name: "Utkarsh Gupta", title: "Founder", company: "Comet", image: img },
      { name: "Utkarsh Gupta", title: "Founder", company: "Comet", image: img },
      { name: "Utkarsh Gupta", title: "Founder", company: "Comet", image: img },
      { name: "Utkarsh Gupta", title: "Founder", company: "Comet", image: img },
    ],
    Faculty: [
      { name: "Revant Bhate", title: "CEO", company: "Mosaic Wellness", image: img },
      { name: "Rajesh Yabaji", title: "Co-founder and CEO", company: "Blackbuck", image: img },
      { name: "Himesh Joshi", title: "Co-Founder", company: "AyuHealth", image: img },
      { name: "Himesh Joshi", title: "Co-Founder", company: "AyuHealth", image: img },
      { name: "Himesh Joshi", title: "Co-Founder", company: "AyuHealth", image: img },
      { name: "Himesh Joshi", title: "Co-Founder", company: "AyuHealth", image: img },
      { name: "Himesh Joshi", title: "Co-Founder", company: "AyuHealth", image: img },
      { name: "Himesh Joshi", title: "Co-Founder", company: "AyuHealth", image: img },
      { name: "Himesh Joshi", title: "Co-Founder", company: "AyuHealth", image: img },
      { name: "Himesh Joshi", title: "Co-Founder", company: "AyuHealth", image: img },
      { name: "Himesh Joshi", title: "Co-Founder", company: "AyuHealth", image: img },
    ],
  };


  const keys = [
  { name: "Leisure", color: "bg-green-200" },
  { name: "Networking", color: "bg-pink-300" },
  { name: "Class", color: "bg-yellow-300" },
  { name: "Bootcamp", color: "bg-red-300" },
  { name: "Workshop", color: "bg-orange-300" },
  { name: "Hackathon", color: "bg-blue-300" },
  { name: "Mentorship", color: "bg-teal-300" },
  { name: "Prep", color: "bg-purple-300" },
  { name: "Career Prep", color: "bg-gray-300" },
];


  return (

    <div>
      <div className='h-[74px] bg-emerald-900'></div>
    {/* // FIRST TABLE CONTENT // */}

       <div className="Toptablecontainer flex flex-col lg:flex-row bg-[#fefaf5] gap-4">
  {/* Left Section */}
  
  <div className=" bg-[#f8fbc7] p-6  flex flex-col justify-between lg:w-[35%]">
    <h2 className="text-4xl font-semibold text-[#2c482a] ml-[14%] mt-[6%] leading-snug">
      India’s first PGP  <br/>in <i className="italic text-[#517f48] font-serif">startup <br/> leadership</i>
    </h2>
    <div className="bg-[#e8f099] w-[70%] mb-[6%] p-4 mt-4 relative inline-block ml-[14%]">
      <p className="text-sm font-medium text-[#2c482a] ">
        Admissions for Cohort of <br/>2026 are open!
      </p>
      <button className="applynowbuuton absolute -right-4 top-1/2 transform -translate-y-[70%] translate-x-1/3  bg-[#10332b] text-white px-5 py-2 text-sm shadow-lg hover:bg-[#1d4238]">
        APPLY NOW →
      </button>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex flex-col gap-4 lg:w-[65%]">
    {/* Row 1 */}
    <div className="grid grid-cols-4 h-[50%]">
      <div className="bg-[#dddddd] p-4 w-[82%]">
        <h3 className="text-sm text-gray-600 mb-2">Duration</h3>
        <p className="text-xl font-medium text-gray-700">12 months</p>
      </div>
      <div className="bg-[#dddddd] p-4 w-[82%]">
        <h3 className="text-sm text-gray-600 mb-2">Work Ex</h3>
        <p className="text-xl font-medium text-gray-700">0-6 years</p>
      </div>

      <div className="bg-[#dddddd] p-4 w-[82%]">
        <h3 className="text-sm text-gray-600 mb-2">Starting Date</h3>
        <p className="text-xl font-medium text-gray-700">June 2025</p>
      </div>

      <div className="bg-[#dddddd] p-4 col-span-1 ">
        <h3 className="text-sm text-gray-600 mb-2">Admissions: Round 1 Deadline</h3>
        <p className="text-xl font-medium text-gray-700">29th December</p>
      </div>

      
    </div>


    {/* Row 2 */}
    <div className="grid grid-cols-2 gap-4 h-[50%]">
      <div className="bg-[#dddddd] p-4">
        <h3 className="text-sm text-gray-600 mb-2">Location</h3>
        <p className="text-xl font-medium text-gray-700">WeWork Campus, Bengaluru</p>
      </div>
      <div className="bg-[#dddddd] p-4">
        <h3 className="text-sm text-gray-600 mb-2">Format</h3>
        <p className="text-xl font-medium text-gray-700">Full Time, Residential</p>
      </div>
    </div>
  </div>
</div>

  {/* AN OVERVIEW WAALA SECTION */}

   <div className="bg-[#faf9f6] py-2">
      {/* Heading Section */}
      <h2 className="text-4xl font-bold text-gray-800 text-start mb-8 ml-[6%]">
        An <span className="italic font-serif text-orange-600">overview</span>
      </h2>
      

      {/* Table Section */}
      <div className="grid grid-cols-5 mx-auto w-[100%] h-[50%]">
        {/* Row 1 */}
        <div className="border p-6 text-center">
          <p className="text-4xl font-bold text-gray-800">7</p>
          <p className="text-gray-600">Terms</p>
          <p className="text-sm text-gray-500 ">7 weeks each</p>
        </div>

        <div className="border p-6 text-center">
          <p className="text-4xl font-bold text-gray-800">2000+</p>
          <p className="text-gray-600">Contact Hours</p>
        </div>

        <div className="border p-6 text-center">
          <p className="text-4xl font-bold text-gray-800">200+</p>
          <p className="text-gray-600">CXOs and Startup Leaders</p>
        </div>

        <div className="border p-6 text-center">
          <p className="text-4xl font-bold text-gray-800">25+</p>
          <p className="text-gray-600">Workshops/ Bootcamps</p>
        </div>

        <div className="border p-6 text-center">
          <p className="text-4xl font-bold text-gray-800">4</p>
          <p className="text-gray-600">Real Businesses Built</p>
        </div>

        </div>
        
        {/* Row 2 */}

        <div className="grid grid-cols-5 mx-auto  w-[100%] h-[50%]">



        <div className="border p-6  py-[11%] text-center">
          <p className="text-4xl font-bold text-gray-800">12</p>
          <p className="text-gray-600">Months</p>
        </div>

        <div className="border p-6 text-center">
          <p className="text-4xl font-bold text-gray-800">250+</p>
          <p className="text-gray-600">Hours of career prep</p>
        </div>

        <div className="border p-6 text-center">
          <p className="text-4xl font-bold text-gray-800">150+</p>
          <p className="text-gray-600">Case Studies</p>
        </div>

        
        <div className="border p-6 text-center">
          <p className="text-4xl font-bold text-gray-800">6</p>
          <p className="text-gray-600">Immersive Hackathons</p>
        </div>

        <div className="border p-6 text-center">
          <p className="text-4xl font-bold text-gray-800">4</p>
          <p className="text-gray-600">Distinct Specializations</p>
        </div>
      
        </div>
    </div>


{/* // TERM WALA SECTION STARTS FROM HERE */}

     <div className="bg-[#faf9f6] py-8">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 text-start mb-6 ml-[6%]">
        Here is what your year will look like -
        <br/>
        <span className="italic text-orange-600 font-serif"> inside the classroom & outside!</span>
      </h2>

      {/* Content Wrapper */}
      <div className="flex mx-auto w-[100%] pr-[8%]">
        {/* Left Sidebar (Terms) */}
        <div className="w-1/4 bg-[#f4f0e8]">
          {Array.from({ length: 7 }, (_, index) => (
            <div
              key={index + 1}
              onClick={() => setActiveTerm(index + 1)}
              className={`cursor-pointer p-4 text-lg font-medium ${
                activeTerm === index + 1
                  ? "text-green-600 bg-[#fefaf5] shadow-md"
                  : "text-gray-600"
              }`}
            >
              {activeTerm === index + 1 ? (
                <span className="font-bold italic">
                  <span className="text-green-600 ml-[22%]">✔</span> Term {index + 1}
                </span>
              ) : (
                <span className='ml-[22%]'>Term {index + 1}</span>
              )}
            </div>
          ))}
        </div>

        {/* Right Content (Cards) */}
        <div className="flex-1 grid grid-cols-3 gap-4 bg-[#fefaf5] pl-[2%] ">
          {/* In Class */}
          <div className="bg-[#ece8df] p-6  shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">In Class</h3>
            <ul className="list-disc list-inside text-gray-600">
              {termContent[activeTerm].inClass.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Out Class */}
          <div className="bg-[#ece8df] p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Out Class</h3>
            <ul className="list-disc list-inside text-gray-600">
              {termContent[activeTerm].outClass.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Professional Foundations */}
          <div className="bg-[#ece8df] p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Professional Foundations
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              {termContent[activeTerm].professional.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    {/* TIME TABLE WALA SECTION */}

    <div className="bg-[#fefaf5] py-4 flex gap-4 ">
      {/* The Mesa Program Heading */}
      <div className="w-1/4 bg-[#ffe8c7] flex items-center justify-center text-start p-4">
        <h1 className="text-4xl font-bold text-gray-800 ml-[23%]">
          The Mesa Program, <br />
          <span className="italic font-serif text-orange-600">summed up <br/>in a week</span>
        </h1>
      </div>

      {/* Days and Events */}
      <div className="w-4/6">
        <div className="grid grid-cols-8 gap-4">
          {/* Days */}
          <div className="col-span-1 text-center font-semibold text-gray-700">
            
            {events.map((event) => (
              <div
                key={event.day}
                className="h-20 flex items-center justify-center border-b border-gray-300"
              >
                {event.day}
              </div>
            ))}
          </div>

          {/* Events */}
          <div className="col-span-7 border-l border-gray-300">
            {events.map((event) => (
              <div
                key={event.day}
                className="h-20 grid grid-cols-12 gap-2 border-b border-gray-300"
              >
                {event.slots.map((slot, index) => (
                  <div
                    key={index}
                    className="col-span-3 bg-[#efe9e2] p-1 rounded-md shadow-md text-center text-sm hover:bg-blue-200 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <p className="font-semibold text-black">{slot.title}</p>
                    <p className="text-black text-xs">{slot.time}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Section */}
      <div className="w-1/10 bg-[#efe9e2] p-4 mr-[8%]">
        <h2 className="text-xl font-bold mb-2 text-gray-700">Key:</h2>
        <div className="flex flex-col gap-2 text-black">
          {keys.map((key, index) => (
            <div key={index} className="flex items-center gap-2 py-[6%] rounded-lg bg-green-300">
              <span className={`inline-block w-4 h-4 rounded  ${key.color}`}></span>
              <span className="text-sm font-medium p-1">{key.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>


    {/* // PHOTOS   WALA SECTION STARTS FROM HERE */}

    <div className="p-8 bg-[#fefaf5] ">
  {/* Heading */}
  <h1 className="text-4xl font-bold  text-gray-800 mb-6 ml-[4%]">
    Faculty at <span className="text-orange-500 font-serif italic">Mesa</span>
  </h1>
  </div>

  <div className='p-8 bg-[#f5f0ea] mr-[8%] flex '>


    {/* Left Section - Category Tabs */}
  <div className="pl-[4%] items-center flex w-1/4 gap-4">
    <div className="w-[100%]">
      <ul className="space-y-4">
        {Object.keys(facultyData).map((category) => (
          <li
            key={category}
            className={`cursor-pointer p-4 text-lg font-medium ${
              activeCategory === category
                ? "text-green-600  bg-[#fefaf5] shadow-md"
                : "text-gray-600"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  </div>

    {/* Right Section - Photo Grid */}
    <div className="w-3/4  overflow-y-auto h-[700px] bg-[#f5f0ea] p-4 shadow-md">
      <div className="grid grid-cols-4 gap-4">
        {facultyData[activeCategory].map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#f5f0ea] rounded-md shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-25 h-30 rounded-md object-cover mb-2"
            />
            <h2 className="text-sm font-semibold text-gray-800">{person.name}</h2>
            <p className="text-xs text-gray-600">{person.title}</p>
            <p className="text-[10px] text-gray-500">{person.company}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  {/* // PHOTOS WALA SECTION ENDS HERE */}


        {/* // VIDEO SECTION  */}

        <div className='container3rdl bg-[#f0f7b5]'>
                <div className='container3rd1 bg-[#f0f7b5] mt-12'>
        
                    <div className='ltextcontainer bg-[#f0f7b5] flex-1 flex flex-col items-start justify-center relative'>
            <h3 className='container3rdleft1 text-[#7d8729]'>
                What makes Mesa’s <i className='font-serif text-[#7d8729]'>pedagogy unique?</i>
            </h3>
            <p className='container3rdleft2 text-black text-md bg-[#d9e38a] relative'>
                A uniquely designed immersive learning <br /> experience
            </p>
            <button className='learnmorebtn absolute text-sm  text-white shadow-lg'>
                LEARN MORE
            </button>
        </div>
        
                    <div className='container3rdright bg-[#f0f7b5]'>
        
                        <div className=" relative w-full h-full flex items-center justify-center overflow-hidden mr-12">
                {/* Video Background */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-cover absolute inset-0"
                                        >
                                        <source src={vid} type="video/mp4" />
                            </video>
         
         
            {/* Optional Background Overlay */}
        
            <div className=" inset-0 bg-black opacity-50"></div>
            </div>
        
                    </div>
                </div>
                </div>

    
    {/* //COURSE BUYING SECTION // */}
    
    <div className="maintablecontainer">

        <div className="py-8 bg-[#fefaf5] ">
            {/* Heading */}
            <h1 className="text-4xl font-bold  text-gray-800 mb-6">
                Key <span className="text-orange-500 font-serif italic">dates and deadlines</span>
            </h1>
        </div>

      <table className="tablecontainer">
        <thead>
          <tr>
            <th>Rounds</th>
            <th>Deadline</th>
            <th>Interviews</th>
            <th>Application Fee</th>
            <th>Course Fee</th>
            <th>Apply Now</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Early Bird</td>
            <td>29th December</td>
            <td>January</td>
            <td>Rs 3,500/-</td>
            <td>Rs 20,35,000/-</td>
            <td>
              <button 
              onClick={buycourse}
              className='startapplicationbutton'>START APPLICATION</button>
            </td>
          </tr>

          <tr>
            <td>Round 1</td>
            <td>16th February</td>
            <td>Feb - March</td>
            <td>Rs 3,500/-</td>
            <td>Rs 21,35,000/-</td>
            <td>
              <button 
              onClick={buycourse}
              className='startapplicationbutton'>START APPLICATION</button>
            </td>
          </tr>

           <tr>
            <td>Round 2</td>
            <td>6th April</td>
            <td>April</td>
            <td>Rs 4,000/-</td>
            <td>Rs 21,35,000/-</td>
            <td>
              <button 
              onClick={buycourse}
              className='startapplicationbutton'>START APPLICATION</button>
            </td>
          </tr>

           <tr>
            <td>Round 3</td>
            <td>11th May</td>
            <td>May</td>
            <td>Rs 4,000/-</td>
            <td>Rs 21,35,000/-</td>
            <td>
              <button 
              onClick={buycourse}
              className='startapplicationbutton'>START APPLICATION</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

        {/* //  DOBARA COURSE WALA SECTION  */}
        

  <div className='p-8 mt-[10%] bg-[#f5f0ea] mr-[8%] flex '>


    {/* Left Section - Category Tabs */}
  <div className="items-center flex w-1/4 gap-4">
        <h1 className="text-4xl font-bold text-gray-800 ml-[18%]">
          The Mesa Program, <br />
          <span className="italic font-serif text-orange-600">summed up <br/>in a week</span>
        </h1>
  </div>

    {/* Right Section - Photo Grid */}
    <div className="w-3/4  overflow-y-auto h-[700px] bg-[#f5f0ea] p-4 shadow-md">
      <div className="grid grid-cols-4 gap-4">
        {facultyData[activeCategory].map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#f5f0ea] rounded-md shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-25 h-30 rounded-md object-cover mb-2"
            />
            <h2 className="text-sm font-semibold text-gray-800">{person.name}</h2>
            <p className="text-xs text-gray-600">{person.title}</p>
            <p className="text-[10px] text-gray-500">{person.company}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
    




    </div>
  );
};

export default Program;
