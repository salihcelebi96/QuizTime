import React, { useEffect, useState } from 'react'
import "./quiz.css"
import { useParams } from 'react-router-dom'
import * as api from "../../api/api"
import QuestionCard from "../../component/questionCard/questionCard"
import Modal from "../../component/modal/modal"


function Quiz() {
  const { difficulty, amount } = useParams();
  const [questionData, setQuestionData] = useState([])
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)


  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount)
      setQuestionData(data)

    }
    getData()
  }, [])

  console.log(questionData)

  return (
    <div className='quiz'>
      {
        modal ? <Modal score={score} /> :
          <QuestionCard
            questionData={questionData}
            score={score}
            setScore={setScore}
            count={count}
            setCount={setCount}
            modal={modal}
            setModal={setModal}



          />
      }
    </div>
  )
}

export default Quiz