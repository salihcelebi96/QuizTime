import React, { useState } from 'react'
import "./introduce.css"
import  Dropdown from "../../component/dropdown/dropdown"
import { useNavigate } from 'react-router-dom';


function Introduce() {

  const  difficulty =
  [ "easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("");
  const navigate = useNavigate();
  const Total_Questions =10;

  const startQuiz =()=>{
    if(difficultyChange){
      navigate(`/quiz/${difficultyChange}/${Total_Questions}`)
    }
  }

  console.log(difficultyChange)
  return (

    <div className='introduce'>
      <div className='introduce-container'>
         <div>
         
         <img className='img' src="https://www.windowstechno.com/wp-content/uploads/2019/03/quiz_time.jpg" alt=""/>
         </div>
         <Dropdown data={difficulty}  setDifficultyChange={setDifficultyChange} />
         <div className='introduce-btn' onClick={startQuiz}>
          Quize Başla
         </div>
      </div>

    </div>
  )
}

export default Introduce