import React from 'react'
import Input from './Input'
import Show from './Show'
import '../../Style/Summary.css'

export default function Summary() {
  return (
    <div className='content'>
        <div className="content-child">

        <div className="input"><Input/></div>
        <div className='show'><Show/></div>
        </div>
    </div>
  )
}
