package com.cse416.app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "questions")

public class Question {
    @Id
    String id;
    String quizId;
    String question;
    String possibleAnswer1;
    String possibleAnswer2;
    String possibleAnswer3;
    String possibleAnswer4;
    String correctAnswer;
    String description;

    public Question(String quizId, String question, String possibleAnswer1, String possibleAnswer2, 
        String possibleAnswer3, String possibleAnswer4, String description, String correctAnswer) {
        
        this.quizId = quizId; //keep tract of the quiz that owns the questions
        this.question = question;
        this.possibleAnswer1 = possibleAnswer1;
        this.possibleAnswer2 = possibleAnswer2;
        this.possibleAnswer3 = possibleAnswer3;
        this.possibleAnswer4 = possibleAnswer4;
        this.description = description; // description of the question
        this.correctAnswer = correctAnswer;

    }
    
    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getQuizId() {
        return quizId;
    }

    public void setQuizId(String quizId) {
        this.quizId = quizId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPossibleAnswer1() {
        return possibleAnswer1;
    }

    public void setPossibleAnswer1(String possibleAnswer1) {
        this.possibleAnswer1 = possibleAnswer1;
    }
    public String getPossibleAnswer2() {
        return possibleAnswer2;
    }

    public void setPossibleAnswer2(String possibleAnswer2) {
        this.possibleAnswer2 = possibleAnswer2;
    }    
    
    public String getPossibleAnswer3() {
        return possibleAnswer3;
    }

    public void setPossibleAnswer3(String possibleAnswer3) {
        this.possibleAnswer3 = possibleAnswer3;
    }    
    
    public String getPossibleAnswer4() {
        return possibleAnswer4;
    }

    public void setPossibleAnswer4(String possibleAnswer4) {
        this.possibleAnswer4 = possibleAnswer4;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
