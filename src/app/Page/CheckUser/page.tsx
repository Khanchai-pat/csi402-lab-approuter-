import React from 'react';

const checkUsers = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-4">
          Check Users
        </h1>
        <p className="text-gray-600 text-center mb-4">
          ตรวจสอบข้อมูลผู้ใช้งานที่มีอยู่ในระบบ
        </p>
        <div className="flex justify-center mt-4">
          <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
            ดูข้อมูลผู้ใช้งาน
          </button>
        </div>
      </div>
    </div>
  );
};

export default checkUsers;
