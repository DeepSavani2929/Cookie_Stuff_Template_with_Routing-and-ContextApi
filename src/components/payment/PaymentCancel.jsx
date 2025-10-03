import React from "react";

const PaymentCancel = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-200 via-red-300 to-red-400 font-sans">
      <div className="bg-white !p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-5xl !mb-4 text-red-600 animate-shake">❌ Payment Canceled</h1>
        <p className="text-gray-700 !mb-6 text-lg">
          You canceled the payment. Please try again.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white !px-6 !py-3 rounded-lg font-semibold transition-all duration-300">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default PaymentCancel;
