"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import alertBox from '../alertBox/alertBox'

const Login = () => {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState<any>(false)

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
        <Link href="../Page/CheckUser">CheckUser</Link>
    }
    const ckeckUser = () => {
        if (!user && !password) {
            alert("ข้อมูลไม่ครบถ้วน")
        } else {
            if (user !== "admin" && password !== "1234") {
                setShow(true)
            } else {
                () => { page() }
            }
        }
    }
    return (
        <div className='center'>
            <div className='Flex'>
                <br />
                <h2>Login</h2>
                <br />
            
                {show && (
                    <div>
                        <alertBoxs setShow={setShow} />

                    </div>
                )
                }


                <div>
                    <label htmlFor="">{"Username"}</label><br />
                    <input type="text" className='border' onChange={inputUser} />
                </div><br />
                <div>
                    <label htmlFor="">{"password"}</label><br />
                    <input type="password" className='border' onChange={inputPassword} />
                </div><br />
                <div>
                    <button className='border button' onClick={ckeckUser}>login</button>
                </div><br />
            </div>
        </div>
    )
}

export default Login