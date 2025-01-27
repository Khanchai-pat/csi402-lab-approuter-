"use client"

import Link from 'next/link'
import AlertBoxs from '../alertBox/alertBox'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState<boolean>(false)
    const router = useRouter()

    const inputUser = (e: any) => {
        let data = e.target.value
        setUser(data)
        console.log(data)
    }
    const inputPassword = (e: any) => {
        let data = e.target.value
        setPassword(data)
        console.log(data)
    }
    const page = () => {
        router.push("/Page/CheckUser");
    }

    const ckeckUser = () => {
        if (!user && !password) {
            alert("ข้อมูลไม่ครบถ้วน")
        } else {
            if (user !== "admin" && password !== "1234") {
                setShow(true)
            } else {
                page()
            }
        }
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100"'>
            <div className="bg-white p-8 rounded-md shadow-lg w-96">
                <br />
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <br />

                {show && (
                    <div className="mb-4">
                        <AlertBoxs />
                    </div>
                )
                }


                <div className="mb-4">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">{"Username"}</label><br />
                    <input type="text"
                        id="username"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={inputUser} />
                </div><br />
                <div className="mb-4">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">{"password"}</label><br />
                    <input type="password"
                        id="password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={inputPassword} />
                </div><br />
                <div className="mb-4">
                    <button className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={ckeckUser}>login</button>
                </div><br />
            </div>
        </div>
    )
}

export default Login