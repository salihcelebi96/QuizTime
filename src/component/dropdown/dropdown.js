import React from 'react'
import "./dropdown.css"

function dropdown({ setDifficultyChange, data }) {
    return (
        <div className='dropdown'>
            <select onClick={e => setDifficultyChange(e.target.value)  }>
                {
                data.map( (dt, i )=>(
                <option key={i} value={dt}>
                    {dt}

                </option>
            ))
        }
            </select>
        </div>
    )
}

export default dropdown