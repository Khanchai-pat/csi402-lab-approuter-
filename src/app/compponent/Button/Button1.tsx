import React from 'react'
import Link from 'next/link'

const Button = () => {
  const checkClick = () => {
    // if (!data) {
    //   setShow(true)
    // } else {
    //   setShow(false)
    // }
  }
  return (
    <button onClick={checkClick}><Link  href="" />OK</button>
  )
}

export default Button