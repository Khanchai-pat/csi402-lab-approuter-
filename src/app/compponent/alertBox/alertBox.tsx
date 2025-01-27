"use client"
import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
const AlertBoxs = () => {
    const router = useRouter()
    const goToRegister = () => {
        router.push("/Page/Register")
    }
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-red-100 rounded-md shadow-md max-w-sm mx-auto">
            <h3 className="text-lg font-bold text-red-700">ไม่พบผู้ใช้งาน</h3>
            <p className="text-sm text-gray-700 mt-2 mb-4">กรุณาลงทะเบียนใหม่</p>
            <button
                onClick={goToRegister}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
                ลงทะเบียน
            </button>
        </div>
    );
};

export default AlertBoxs;