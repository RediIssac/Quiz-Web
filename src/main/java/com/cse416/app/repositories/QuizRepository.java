package com.cse416.app.repositories;

import com.cse416.app.models.Quiz;
import org.springframework.data.repository.CrudRepository;

public interface QuizRepository extends CrudRepository<Quiz, String> {
    @Override
    void delete(Quiz deleted);
}