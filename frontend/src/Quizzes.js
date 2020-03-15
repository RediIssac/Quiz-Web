import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class Quizzes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quizzes: []
        };
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/')
            .then(res => {
              this.setState({quizzes: res.data});
              console.log(Object.values(this.state.quizzes.results[0].name));
              {Object.values(this.state.quizzes.results[0].name)}
            });
    }

    render() {
        return (
          <div className="Quizzes">
            <h1>Quizzes</h1>
            {/* {this.state.quizzes.results} */}
            <ul>
            <li><Link to = {'/Quiz'}>Math</Link></li>
            {/* {Object.values(this.state.quizzes.results[0].name)} */}
            {/* <ul>
              { this.state.quizzes.results[0].name.map(obj => <li>{Object.values(obj)}</li>)}
            </ul> */}
            {/* <li>{this.state.quizzes.results}</li> */}
              {/* <li>Biology</li>
              <li>General Knowledage</li> */}
             
                    
            </ul>
          </div>
        );
    }
}

export default Quizzes;


// import React, {useState, useEffect} from 'react';

// import './App.css';

// function Quizzes() {
  
//   useEffect() =>{

//   }

//   const fetchItems = async () =>{
//     const data = await fetch(http://localhost/3000/test.htm')
//   }


//// {this.state.quizzes.results[0].map(quiz =>
//<li key={quiz.id}>
//{/* <li><Link to={`/Quiz/${quiz.id}`}>{quiz.name[0]}</Link></li> */}
//</li>
//)}
//   return (
//     <div className="Quizzes">
//       <h1>Quizzes</h1>

//     </div>
//   );
// }

// export default Quizzes;
