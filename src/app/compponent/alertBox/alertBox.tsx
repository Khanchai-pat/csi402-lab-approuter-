"use client"
import React from 'react'
const alertBoxs = ({ setShow }: { setShow: any }): any => {
    return (
        <div>
            <div>
                ลงทะเบียนใหม่
            </div>
            <div>
                <button setShow={() => setShow(false)}
                ><link rel="stylesheet" href={"../Register/Register"}/>OK</button>
            </div>
        </div>
    )
}

export default alertBoxs