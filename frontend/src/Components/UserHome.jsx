import React from "react";
import { FaWallet } from "react-icons/fa6";
import { TbClockDollar, TbReportMoney } from "react-icons/tb";
import { FaMoneyCheckAlt, FaChartBar } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";

// Sample transaction data (replace with API later)
const transactions = [
  { date: "March 10, 2025", amount: "Ksh. 5,000", status: "Completed" },
  { date: "Feb 22, 2025", amount: "Ksh. 10,000", status: "Completed" },
  { date: "Feb 10, 2025", amount: "Ksh. 3,000", status: "Completed" },
  { date: "Jan 22, 2025", amount: "Ksh. 8,000", status: "Completed" },
  { date: "Jan 08, 2025", amount: "Ksh. 2,000", status: "Completed" },
];

const UserHome = ({ username = "John Doe" }) => {
  return (
    <div className="text-white p-6">
      {/* Welcome Message */}
      <h1 className="flex items-center gap-3 text-2xl font-bold text-gray-200">Welcome, {username} <MdOutlineWavingHand className="text-amber-500" /> </h1>

      {/* Stats Section */}
      {/* Startcard are reusable components and their codes are downwards towards the end of these codes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <StatCard icon={<FaWallet className="size-6 text-gray-500" />} title="Wallet Balance" value="Ksh. 25,000" color="text-green-500" />
        <StatCard icon={<TbClockDollar className="size-7 text-gray-500" />} title="Next Payment Due" value="March 25, 2025" color="text-red-500" />
        <StatCard icon={<TbReportMoney className="size-7 text-gray-500" />} title="Total Contributions" value="Ksh. 120,000" color="text-blue-500" />
      </div>

      {/* Recent Transactions */}
      <div className="mt-6 p-4 bg-white shadow-md rounded-lg overflow-auto">
        <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
        <table className="w-full mt-2 min-w-[400px] text-gray-700">
          <thead>
            <tr className="bg-gray-500 text-white">
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}>
                <td className="p-2">{tx.date}</td>
                <td className="p-2 text-green-500">{tx.amount}</td>
                <td className="p-2 text-green-600">{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Call to Action Buttons */}
      {/* The ActionButtons are also reusable components, codes are located below / downwards */}
      <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
        <ActionButton icon={<FaMoneyCheckAlt />} text="Make a Payment" bgColor="bg-blue-600" hoverColor="hover:bg-blue-700" />
        <ActionButton icon={<FaChartBar />} text="View Reports" bgColor="bg-gray-600" hoverColor="hover:bg-gray-700" />
      </div>

      {/* Power BI Section */}
      {/* This is to be uncommented when integrating Power BI */}
      {/* <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Financial Insights</h2>
        <iframe
          title="Power BI Report"
          width="100%"
          height="400"
          src="https://app.powerbi.com"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
};

//  Reusable StatCard Component
const StatCard = ({ icon, title, value, color }) => (
  <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-2">
    <h2 className="flex gap-3 items-center text-lg font-semibold text-gray-600">{icon} {title}</h2>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

//  Reusable Button Component
const ActionButton = ({ icon, text, bgColor, hoverColor }) => (
  <button className={`flex items-center gap-2 px-6 py-3 ${bgColor} text-white cursor-pointer rounded-lg shadow ${hoverColor} duration-300 transition-all ease-in-out`}>
    {icon} {text}
  </button>
);

export default UserHome;