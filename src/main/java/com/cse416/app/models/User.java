package com.cse416.app.models;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    @Id
    String id;
    String name;
    String address;
    String city;
    String email;
    int totalNumQuizzesTaken;
    int totalNumQuestionsTaken;
    int totalNumCorrectAttemps;
    String imageBase64; // A Base64 encoded string of the profile image that was encoded on the frontend.
    String imageString; // A Base64 encoded string of the profile image that was encoded on the backend.
    Binary image;       // A BsonBinary to store the profile image as binary data.

    public User(String name, String address, String city, String email, String imageBase64, String imageString, Binary image) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.totalNumQuizzesTaken = 0;
        this.totalNumQuestionsTaken = 0;
        this.totalNumCorrectAttemps = 0;
        this.email = email;
        this.imageBase64 = imageBase64;
        this.imageString = imageString;
        this.image = image;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImageBase64() {
        return imageBase64;
    }

    public void setImageBase64(String imageBase64) {
        this.imageBase64 = imageBase64;
    }

    public String getImageString() {
        return imageString;
    }

    public void setImageString(String imageString) {
        this.imageString = imageString;
    }

    public Binary getImage() {
        return image;
    }

    public void setImage(Binary image) {
        this.image = image;
    }

}
