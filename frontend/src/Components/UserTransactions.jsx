import React from "react";

const UserTransactions = () => {
  return (
    <div className="p-4">
      {/* User records */}
      <h3 className="text-3xl font-bold mb-4 text-white">Transactions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {[
          { title: "Balance", amount: "Ksh. 25,000", color: "text-green-500" },
          { title: "Contributions", amount: "Ksh. 8,500", color: "text-blue-500" },
          { title: "Withdrawals", amount: "Ksh. 12,000", color: "text-blue-500" },
          { title: "Pending", amount: "Ksh. 3,000", color: "text-red-500" }
        ].map((item, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg text-center">
            <h2 className="text-lg font-semibold text-gray-600">{item.title}</h2>
            <p className={`text-2xl font-bold ${item.color}`}>{item.amount}</p>
          </div>
        ))}
      </div>

      {/* Records history */}
      <div className="mt-6 p-4 bg-white shadow-md rounded-lg overflow-auto">
        <h2 className="text-lg font-bold text-gray-800">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full mt-2 min-w-[400px] text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-500 text-white">
                {['Date', 'Type', 'Amount', 'Method', 'Status'].map((header, i) => (
                  <th key={i} className="p-2 text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="font-semibold">
              {[
                { date: "March 10, 2025", type: "Contribution", amount: "Ksh. 5,000", method: "M-pesa", status: "Completed", statusColor: "text-green-600" },
                { date: "Feb 22, 2025", type: "Withdrawal", amount: "Ksh. 10,000", method: "Bank", status: "Completed", statusColor: "text-green-600" },
                { date: "Feb 10, 2025", type: "Membership Fee", amount: "Ksh. 1,000", method: "Cash", status: "Pending", statusColor: "text-yellow-600" },
                { date: "Jan 22, 2025", type: "Contribution", amount: "Ksh. 3,500", method: "Bank", status: "Failed", statusColor: "text-red-600" },
                { date: "Jan 08, 2025", type: "Withdrawal", amount: "Ksh. 2,000", method: "M-pesa", status: "Pending", statusColor: "text-yellow-600" }
              ].map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 text-gray-700">{transaction.date}</td>
                  <td className="p-2 text-gray-800 font-semibold">{transaction.type}</td>
                  <td className="p-2 text-primaryblue font-semibold">{transaction.amount}</td>
                  <td className="p-2 text-gray-700 font-semibold">{transaction.method}</td>
                  <td className={`p-2 ${transaction.statusColor}`}>{transaction.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTransactions;