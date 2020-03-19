const qBank = [
  {
    question:
      "When did corona virus first occurred?   ",
    answers: [" November 2019", " December 2019", " January  2020", " December 2020"],
    correct: " December 2019",
    questionId: "099099"
  },
  {
    question:
      'Where did Corona first start?',
    answers: ["Wuhan, China", "Seoul, Korea", "Beijing , China", "Tokyo, Japan"],
    correct: "Wuhan, China",
    questionId: "183452"
  },
  {
    question:
      "Coronavirus incubation period?",
    answers: ["1~3", "1~7", "1~24", "1~14"],
    correct: "1~14",
    questionId: "267908"
  },
  {
    question: " When was the first death reported? ",
    answers: [
      "January 2, 2020",
      "January 7, 2020",
      "January 19, 2020",
      "January 10, 2020"
    ],
    correct: "January 10, 2020",
    questionId: "333247"
  },
  {
    question: "What animal is the starting point of the coronavirus?",
    answers: ["Dog", "Bat", "Mouse", "Chicken"],
    correct: "Bat",
    questionId: "496293"
  },
  {
    question:
      "Is it neccesary to wear a mask when we go out?",
    answers: [
      "yes",
      "Maybe",
      "No"
    ],
    correct: "yes",
    questionId: "588909"
  },
  {
    question:
      'How long we have to wash our hands?',
    answers: ["30 second ", "10 second ", "15 second ", "20 second "],
    correct: "20 second ",
    questionId: "648452"
  },
  {
    question: "What is NOT a good immune system?",
    answers: ["Coke", "carrot", "pumpkin", "kiwi"],
    correct: "Coke",
    questionId: "786649"
  },
  {
    question:
      "What is NOT a major symptom of infection?",
    answers: ["Fever 37.5", "cough", "parsley", "vomit"],
    correct: "vomit",
    questionId: "839754"
  },
  {
    question:
      "what number of mask will protect ous?",
    answers: [
      "Normal mask",
      "KF70",
      "KF60",
      "KF80"
    ],
    correct: "KF80",
    questionId: "98390"
  },
  {
    question: "When did the coronavirus first confirm in Korea?",
    answers: ["January 20th", "January 5th","January 10th","January 9th"],
    correct: "January 20th",
    questionId: "1071006"
  },
  {
    question: " What is the date of the first death in Korea because of the coronavirus?",
    answers: ["February 17th", "February 13th", "February 20th", "February 11th"],
    correct: "February 20th",
    questionId: "1174154"
  },
  {
    question: "Which place has the most confirmed virus now?",
    answers: ["IGC", "Seoul", "Songdo", "Daegu"],
    correct: "Daegu",
    questionId: "1226535"
  },
  {
    question: "About how many patients are infected with the virus in Korea?",
    answers: ["8000 people. ", " 9000 people. ", "10000 people. ", "7000 people. "],
    correct: "8000 people. ",
    questionId: "1310938"
  },
  {
    question: "There is a vaccine in Korea now?",
    answers: ["Yes", "No"],
    correct: "No",
    questionId: "1436873"
  },
 
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
