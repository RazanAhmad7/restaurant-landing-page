import React from 'react'
import '../styles/OneSectionStyle.css'

function SecondSection({title,subTitle,children}) {
  return (
   <div className='container-fluid  ' style={{backgroundColor:"#ff8c8c"}}>
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2 className='mainTitle mt-5'>{title}</h2>
        <div className='subTitile' style={{color:"white"}} >
             <p >{subTitle}</p>
        </div> 
    </div>
  <div className='container-fluid pb-5' style={{maxWidth:'85%'}}>
  {children}   
  </div>
   </div>
  )
}

export default SecondSection