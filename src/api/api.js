const shuffleArray = (array) =>{
    return [...array].sort(()=> Math.random()-0.5)
}

export const fetchQuizData =async (difficulty,amount) =>{
    const url = `https://opentdb.com/api.php?amount=${amount}&category=22&difficulty=${difficulty}` ;
    const res = await fetch(url);
    const data =await res.json();
    
    return data.results.map((dt)=>({
       ...dt, 
       answers: shuffleArray([...dt.incorrect_answers,dt.correct_answer]) 
    }))
    


    

}