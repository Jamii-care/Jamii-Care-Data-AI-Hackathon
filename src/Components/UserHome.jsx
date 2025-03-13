import React from "react";

const UserHome = () => {
  return (
    <div className="text-white">
      {/* Welcoming section and stats */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-200">
          Welcome, John Doe 👋
        </h1>
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 space-y-4 mt-4">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold text-gray-600">
              Wallet Balance
            </h2>
            <p className="text-2xl font-bold text-green-500">Ksh. 25,000</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold text-gray-600">
              Next Payment Due
            </h2>
            <p className="text-2xl font-bold text-red-500">March 25, 2025</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold text-gray-600">
              Total Contributions
            </h2>
            <p className="text-2xl font-bold text-blue-500">Ksh. 120,000</p>
          </div>
        </div>
      </div>

      {/* Recent transactions section */}
      <div className="mt-6 mx-8 p-4 bg-white shadow-md rounded-lg overflow-auto">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Transactions
        </h2>
        <table className="w-full mt-2 min-w-[400px]">
          <thead>
            <tr className="bg-gray-500">
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 text-secondaryblue">March 10, 2025</td>
              <td className="p-2 text-green-500">Ksh. 5,000</td>
              <td className="p-2 text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="p-2 text-secondaryblue">Feb 22, 2025</td>
              <td className="p-2 text-green-500">Ksh. 10,000</td>
              <td className="p-2 text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="p-2 text-secondaryblue">Feb 10, 2025</td>
              <td className="p-2 text-green-500">Ksh. 3,000</td>
              <td className="p-2 text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="p-2 text-secondaryblue">Jan 22, 2025</td>
              <td className="p-2 text-green-500">Ksh. 8,000</td>
              <td className="p-2 text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="p-2 text-secondaryblue">Jan 08, 2025</td>
              <td className="p-2 text-green-500">Ksh. 2,000</td>
              <td className="p-2 text-green-600">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Call to action section */}
      <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center ">
        <button className="px-6 py-3 bg-blue-600 text-white cursor-pointer rounded-lg shadow hover:bg-blue-700 duration-300 transition-all ease-in-out">
          Make a Payment
        </button>
        <button className="px-6 py-3 bg-gray-600 text-white cursor-pointer rounded-lg shadow hover:bg-gray-700 duration-300 transition-all ease-in-out">
          View Reports
        </button>
      </div>

      {/* Power BI section */}
      {/* <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Financial Insights
        </h2>
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

export default UserHome;