import React from "react";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Register
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Welcome to the registration page!
        </p>
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Start Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
