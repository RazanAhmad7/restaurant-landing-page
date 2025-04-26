import React from 'react'
import '../styles/OneSectionStyle.css'

function OneSection({title,subTitle,children}) {
  return (
   <div className='container-fluid my-5 '>
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2 className='mainTitle'>{title}</h2>
        <div className='subTitile' >
             <p >{subTitle}</p>
        </div> 
    </div>
  <div className='container-fluid' style={{maxWidth:'85%'}}>
  {children}   
  </div>
   </div>
  )
}

export default OneSection