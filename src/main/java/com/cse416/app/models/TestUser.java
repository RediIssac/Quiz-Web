package com.cse416.app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "testUsers")
public class TestUser {
    @Id
    private String id;
    private String name;
    private int age;

    public TestUser() {
    }

    public TestUser(String name, int age) {
        this.name = name;
        this.age = age;
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
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    @Override
    public String toString() {
        return "TestUser{" +
                ", name='" + name + '\'' +
                ", Age=" + age +
                '}';
    }
}