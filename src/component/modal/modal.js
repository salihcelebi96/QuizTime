import React from 'react'
import "./modal.css";

const modal = ({ score }) => {
    return (
        <div className='modalcss'>
            <div>
                <button onClick={()=> window.location = "/"}  className='yeniden'  type="">Yeniden Başla</button>
            </div>
            <div className='topScore'>
            TOPLANAN SCORE 
        </div>
      <div className='score'>
            {score}
        </div>  
        
        </div >
  )
}

export default modal