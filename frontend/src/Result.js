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

const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">You scored {score} / 5 correct answers!</div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>
);

export default Result;
