import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [quiz, setQuiz] = useState([]);
  let [index, setIndex] = useState(0);
  let [score, setScore] = useState(0);
  let [wrongScore, setWrongscore] = useState(0)
  let [bool, setBool] = useState(true)
  let [PassFail, setPassFail] = useState("");
  let [resultCheck, setResultCheck] = useState(false);


  function restEverything() {
    setIndex(0)
    setScore(0)
    setWrongscore(0)
    setBool(true)
    setResultCheck(false)

    
}

  useEffect(() => {
    getDataFromAPI();
  }, []);

  function getDataFromAPI() {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((data) => data.json())
      .then((value) => setQuiz(value))
      .catch((err) => console.log(err));
  }

  function shuffleArray(arr) {
    let array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  //   console.log(quiz);

  if (!quiz.length) {
    return;
  }
  let Correct = quiz[index].correctAnswer;
  let wrong = quiz[index].incorrectAnswers;

  let options = [Correct, ...wrong];
  //    arrayOfAns.push(...wrong, Correct)
  //    console.log(arrayOfAns);
  let mixOptions = shuffleArray(options);
  // console.log(mixOptions);

  // console.log("The mixed options",mixOptions);
// console.log(index);

// console.log(index);
let div ;
function checkResult() {
    if (score >= 6) {
        
  setPassFail("Pass");

} else {
    
  setPassFail("Failed");
  
}
  setResultCheck(true)


}

// console.log(div);


// if (index === 9) {
  
// }

  function OptionList() {
    console.log(quiz[index]);
    console.log(quiz[index].correctAnswer);
    console.log(quiz[index].incorrectAnswers);
    // console.log(quiz[index].correctAnswer);
    // console.log("correct answer is",quiz[indx].correctAnswer);
  }
  //   OptionList()
//   console.log(score);
  
  function checkAns(indx, value) {
    // console.log(index, value);
    // console.log(quiz[index].correctAnswer);
    // console.log(value);
    // console.log("correct answer is",quiz[indx].correctAnswer);
    // console.log(indx);
    // console.log(value);
    // console.log(quiz[index].correctAnswer);
    // console.log(indx);
    

    if (value === quiz[index].correctAnswer) {
    //   console.log("correct Answer");
    //   setScore(score += 1)
    setScore( score+1)
//   console.log(score);

    
    
      // console.log(value === quiz[indx].correctAnswer);
    } else {
        setWrongscore(wrongScore + 1)
    //   console.log(
    //     `Incorrect answer, Correct Answer is ${quiz[index].correctAnswer}`
    //   );

      // console.log(value, quiz[index].correctAnswer);
      // console.log(quiz[index].correctAnswer);
      // console.log(value === quiz[indx].correctAnswer);
    }
    
    
   
        nextQuestion()
        
    
  }

  const styles = {
  
    display: "inline-block",
    padding: "10px 18px",
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: "inherit",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#d83200ff",
    transition: "background 0.2s ease, transform 0.1s ease",
  }

  const styles1 = {
  
    display: "inline-block",
    padding: "10px 18px",
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: "inherit",
    color: "#000000ff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#2ecc71",
    transition: "background 0.2s ease, transform 0.1s ease",
    
  }

  const styles2 = {
  
    display: "inline-block",
    marginTop: "5px",
    padding: "10px 10px",
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: "inherit",
    color: "#000000ff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#2ecc71",
    transition: "background 0.2s ease, transform 0.1s ease",
  }

  function nextQuestion() {
    if (index < quiz.length - 1) {
      setIndex(index + 1);
      
    } else {
        setBool(false)

    //   setIndex(0);
    }

  }
  

// console.log(!bool);

// if (bool) {
//       if (score >= 6) {
        
//   setPassFail("Pass");
// } else {
    
//   setPassFail("Failed");
// }
// }


 

  return (
    
    <div className="quiz-container">
        <button onClick={restEverything}>Reset</button>
         <p className="next-btn">Correct: {score}</p>
         <p className="next-btn">Wrong: {wrongScore}</p>
         {index === 9 ? <button style={styles2} onClick={checkResult}>Check Results</button> : <button style={styles2} onClick={()=> alert("bolna na wait karo")}>wait</button>}
        {resultCheck ? (
  <div>
    {PassFail === "Pass" ? (
      <h1>Congratulation! Tum pass ho gaye!</h1>
    ) : (
      <h1>Lanat hai!! Ye test bhi fail kar diya</h1>
    )}
  </div>
) : null}
       
    <div>
        <h5 style={{color: "#00000086"}}>Correct answer is: {quiz[index].correctAnswer}</h5>
      {/* <h2 className="quiz-title">Quiz App</h2> */}
      {bool ? <h2 className="quiz-title">Quiz App</h2> : <h2 className="quiz-title">Quiz Ended</h2>}
      <hr />
      <br />

    </div>

      <div >
        <h2 className="quiz-question">{quiz[index].question.text}</h2>
      <ol className="quiz-options">
        {mixOptions.map((value, indx) => {
          return (
            <li className="quiz-option" key={indx}>
              {value}{" "}
              {/* <button onClick={() => checkAns(indx, value)}>Check</button> */}
              {bool? <button style={styles1} onClick={() => checkAns(indx, value)}>Select</button> : <button style={styles} >Quiz Ended</button> }
            </li>
          );
        })}
      </ol>
      </div>
     
{/* <button className="next-btn" onClick={nextQuestion}>Next</button> */}
      
    </div>
  );
}


export default App;
