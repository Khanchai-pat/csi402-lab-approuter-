import React from 'react'

const Register = () => {
    return (
        <div className='center'>
            <div className='Flex'>
                <br />
                <h2>Register</h2>
                <br />
                <div>
                    <label htmlFor="">{"Username"}</label><br />
                    <input type="text" className='border' />
                </div><br />
                <div>
                    <label htmlFor="">{"password"}</label><br />
                    <input type="text" className='border' />
                </div><br />
                <div>
                    <button className='border button'>login</button>
                </div><br />
            </div>
        </div>
    )
}

export default Register