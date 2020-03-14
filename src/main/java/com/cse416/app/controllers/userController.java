package com.cse416.app.controllers;


import com.cse416.app.models.Question;
import com.cse416.app.models.Quiz;
import com.cse416.app.models.User;
import com.cse416.app.repositories.QuestionRepository;
import com.cse416.app.repositories.QuizRepository;
import com.cse416.app.repositories.UserRepository;


import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class userController {
	
	@Autowired
    UserRepository userRepository;
   
	@RequestMapping(method=RequestMethod.POST, value="/home")
    public User save(@RequestBody User user) {
        userRepository.save(user);
        return user;
    }
	
	
	
	
	
	
	
}
