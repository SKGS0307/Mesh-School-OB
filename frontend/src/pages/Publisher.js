import React from "react";

const publisher = () => {
  const data = [
    { flag: "🇨🇦", country: "Canada", earnings: "$15.0000" },
    { flag: "🇺🇸", country: "United States", earnings: "$15.0000" },
    { flag: "🇮🇳", country: "India", earnings: "$8.0000" },
    { flag: "🇦🇪", country: "United Arab Emirates", earnings: "$8.0000" },
    { flag: "🇩🇪", country: "Germany", earnings: "$8.0000" },
    { flag: "🇬🇧", country: "United Kingdom", earnings: "$8.0000" },
    { flag: "🇬🇱", country: "Greenland", earnings: "$8.0000" },
    { flag: "🇵🇰", country: "Pakistan", earnings: "$8.0000" },
    { flag: "🇧🇩", country: "Bangladesh", earnings: "$8.0000" },
    { flag: "🇳🇵", country: "Nepal", earnings: "$5.0000" },
    { flag: "🇧🇷", country: "Brazil", earnings: "$5.0000" },
    {
      flag: "🌐",
      country: "Worldwide Deal (All Countries)",
      earnings: "$5.0000",
    },
    { flag: "🇮🇩", country: "Indonesia", earnings: "$5.0000" },
    { flag: "🇨🇭", country: "Switzerland", earnings: "$5.0000" },
    { flag: "🇪🇸", country: "Spain", earnings: "$5.0000" },
    { flag: "🇲🇾", country: "Malaysia", earnings: "$5.0000" },
    { flag: "🇸🇬", country: "Singapore", earnings: "$5.0000" },
    { flag: "🇻🇳", country: "Vietnam", earnings: "$5.0000" },
    { flag: "🇫🇷", country: "France", earnings: "$5.0000" },
    { flag: "🇦🇱", country: "Albania", earnings: "$5.0000" },
    { flag: "🇩🇿", country: "Algeria", earnings: "$5.0000" },
    { flag: "🇦🇷", country: "Argentina", earnings: "$5.0000" },
    { flag: "🇲🇽", country: "Mexico", earnings: "$5.0000" },
    { flag: "🇺🇦", country: "Ukraine", earnings: "$1.0000" },
    { flag: "🇷🇺", country: "Russian Federation", earnings: "$1.0000" },
  ];

  return (
    <div>
      <div className="w-[100%] h-[40vh] bg-[#013bc3]">
        <h1 className="text-5xl text-white font-bold pt-[10%]  flex items-center  justify-center">
          PUBLISHER RATES
        </h1>
      </div>

      <div className="my-5">
        <h1 className="text-xl font-bold text-center">
          Indian No.1 Trusted ( Link Shortener )
        </h1>
        <h1 className="text-md text-[#2b00fe] font-bold text-center my-[1%]">
          Faucet, Adult, Movie Traffic Allowed
        </h1>

        <h1 className="text-lg font-bold text-center">
          All Countries - 8$ CPM
        </h1>
        <h1 className="text-lg font-bold text-center ">
          Daily Payments - 24 Hours
        </h1>
        <h1 className="text-lg font-bold text-center">Minimum Withdraw - 1$</h1>
        <h1 className="text-sm text-[#2b00fe] font-bold text-center">
          ( Trusted Shortener )
        </h1>
      </div>

      <div className="max-w-4xl mb-[4%] mx-auto p-6">
        <h2 className="text-xl font-bold mb-[6%] text-center ">
          ( paytm, upi, paypal, payeer, crypto, bank, bkash, airtm, easypaisa )
        </h2>
        <table className="table-auto w-full items-center text-center border border-gray-300">
          <thead className="bg-gray-100 items-center text-center">
            <tr>
              <th className="border px-4 py-2 text-center">Country</th>
              <th className="border px-4 py-2 text-center">
                Earnings per 1000 Views
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 text-center items-center"
              >
                <td className="border px-4 py-2 flex justify-center text-center items-center">
                  <span className="mr-2 items-center justify-center text-center">
                    {item.flag}
                  </span>
                  {item.country}
                </td>
                <td className="border px-4 py-2">{item.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default publisher;
