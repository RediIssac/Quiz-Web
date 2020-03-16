import React, {useState} from "react";

const QuestionBox = ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;


//import './App.css';
// // const QuestionBox = ({question, options, selected}) => {
// //   const [answer, setAnswer] = useState(options);
// //   return (
// //     <div className="questionBox">
// //       <div className="question">{question}</div>
// //       {answer.map((text, index) => (
// //         <button
// //           key={index}
// //           className="answerBtn"
// //           onClick={() => {
// //             setAnswer([text]);
// //             selected(text);
// //           }}
// //         >
// //           {text}
// //         </button>
// //       ))}
// //     </div>
// //   );
// // };
// function Question() {
//   return (
//     <div className="Question">
//       <h1>Question web</h1>
//     </div>
//   );
// }

// export default Question;
// import React from 'react';
// import PropTypes from 'prop-types';

// function Question(props) {
//   return (
//     <h2 className="question">{props.content}</h2>
//   );
// }

// Question.propTypes = {
//   content: PropTypes.string.isRequired
// };

// export default Question;