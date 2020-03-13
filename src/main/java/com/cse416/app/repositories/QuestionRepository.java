package com.cse416.app.repositories;

import com.cse416.app.models.Question;
import org.springframework.data.repository.CrudRepository;

public interface QuestionRepository extends CrudRepository<Question, String> {
    @Override
    void delete(Question deleted);
}