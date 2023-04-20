import React, { useEffect, useState } from 'react'
import "./QuestionCard.css";


const QuestionCard = ({questionData,score,setScore,modal,setModal,count,setCount }) => {
    const [timer,setTimer] =useState(30)

    const approvedChoice = (e) => {
        console.log(e.currentTarget.value);
        const checkAnswer = e.currentTarget.value === questionData[count]?.correct_answer
        console.log(checkAnswer);

        if(checkAnswer){
            setScore(score + 100)
        }
        setCount(count + 1); 
        if(count === 9) setModal(true)
        setTimer(30)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
        if(timer > 0) {
            setTimer(timer - 1)}
        if(timer == 0 && count < 10) {
            setCount(count + 1)
            setTimer(30)
        }else if(count >= 10){
            setModal(true)
        }
            

        },1000)
        return () => {
            clearInterval(interval)
        }

    },[timer])
  return (
    
    <div className='questionCard'>
        <div className='question-timer'>
            {timer}
        </div>
        <div className='question_title'>
            {count +1}/10 - {questionData[count]?.question}
        </div>
        <div className='btndiv'>
             {
            questionData[count]?.answers?.map((answer,i)=>(
                <button className='button' onClick={approvedChoice} key={i} value={answer}>{answer}</button>
            ))
        }
        </div>
       
    </div>
  )
}

export default QuestionCard