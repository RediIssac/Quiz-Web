package com.cse416.app.repositories;

import com.cse416.app.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
    @Override
    void delete(User deleted);
}