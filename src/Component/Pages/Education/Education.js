import React from 'react'
import Input from './Input'
import Show from './Show'
import '../../Style/Education.css'

export default function Education() {
  return (
    <div className='content'>
        <div className='content-child'>
            <div className='input'><Input/></div>
            <div className='show'><Show/></div>
        </div>
    </div>
  )
}
