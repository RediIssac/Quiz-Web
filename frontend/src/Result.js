// import React from 'react';

// import './App.css';

// const Result = ({score, playAgain}) => (
//   <div className="score-board">
//     <div className="score">You scored {score} / 5 correct answers!</div>
//     <button className="playBtn" onClick={playAgain}>
//       Play again!
//     </button>
//   </div>
// );

// // function Result() {
// //   return (
// //     <div className="Result">
// //       <h1>Result web</h1>
// //     </div>
// //   );
// // }

// export default Result;
import React from "react";


const scoreSummary = () =>{
  if(this.score == 5){
    return <div>Great job :)))</div>
  }
  else{
    return <div>You can always do better next time :)))</div>
  };
};


const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">You scored {score} / 5 correct answers! </div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
    {/* <div> Here is your summary{scoreSummary}</div> */}
  </div>
  
);


export default Result;
