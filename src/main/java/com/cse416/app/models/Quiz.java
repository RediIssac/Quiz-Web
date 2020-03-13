package com.cse416.app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "quizzes")

public class Quiz {
    @Id
    String id; // id of the created quiz
    String name;
    String type; // eq science, general knowledge 
    String description; // includes summary or any materials

    public Quiz(String name, String type, String description) {
        
        this.name = name;
        this.type = type;
        this.description = description;
        
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
