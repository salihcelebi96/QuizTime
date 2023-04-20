import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Inroduce from "./pages/introduce/Introduce";
import Quiz from "./pages/quiz/quiz";





function App() {
 
  
      
    return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Inroduce/>}/>
          <Route path='/quiz/:difficulty/:amount' element={<Quiz/>}/>
          
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
