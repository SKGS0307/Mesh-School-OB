import React from 'react';
import '../stylesheets/Program.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

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

 






  return (
    <div>
      <div className="w-[100%] h-[40vh] bg-[#013bc3]">
        <h1 className="text-5xl text-white font-bold pt-[10%]  flex items-center  justify-center">
          PUBLISHER RATES
        </h1>
      </div>

      <div className="text-center my-5">
        <h1 className="font-bold text-lg">
          Pocolink | India No.1 ( TRUSTED Shortener )
        </h1>
        <h1 className="mt-3 text-lg">
          All Type Traffic <strong className="text-[#013bc3]">Allowed</strong>{" "}
        </h1>
        <h1 className="text-lg">
          Movies, Telegram, Adult, Faucet{" "}
          <strong className="text-[#013bc3]">Allowed</strong>
        </h1>
        <h1 className="text-lg">
          <strong className="text-[#013bc3]">Daily Payments</strong> with 8$ CPM
        </h1>
        <h1 className="text-lg mb-[5%]">
          Minimum Withdraw <strong className="text-[#013bc3]">1$</strong>
        </h1>
      </div>
    </div>
  );
};

export default Program;
