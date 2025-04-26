import React from 'react'
import '../styles/SectionStyle.css'

function Section({title,subTitle,children,customBackgroundColor}) {
  return (
   <div className='container-fluid my-5' style={{backgroundColor: customBackgroundColor}}>
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2 className='mainTitle' style={{marginTop: customBackgroundColor? "2.5rem" : '0'}}  >{title}</h2>
        <div className='subTitile ' style={{ color: customBackgroundColor ? 'white' : 'inherit' }}
        >
             <p >{subTitle}</p>
        </div> 
    </div>
  <div className='container' style={{maxWidth:'85%',padding: 0, paddingBottom: customBackgroundColor? '2.4rem':'0'}}>
  {children}   
  </div>
   </div>
  )
}

export default Section