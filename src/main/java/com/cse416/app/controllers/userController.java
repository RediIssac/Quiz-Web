package com.cse416.app.controllers;


import com.cse416.app.models.Question;
import com.cse416.app.models.Quiz;
import com.cse416.app.models.User;
import com.cse416.app.models.TokenId;

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

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class userController {

	@Autowired
    UserRepository userRepository;

    @RequestMapping(method=RequestMethod.POST, value="app/home")
    public User save(@RequestBody User user) {
        userRepository.save(user);
        return user;
    }

		@RequestMapping(method=RequestMethod.PUT, value="/profile/{id}")
	    public User update(@PathVariable String id, @RequestBody User updatedInfo) {
			User userToBeupdated = userRepository.findById(id).get();
			if(updatedInfo.getName() != null) {
				userToBeupdated.setName(updatedInfo.getName());
			}
			if(updatedInfo.getAddress() != null) {
				userToBeupdated.setAddress(updatedInfo.getAddress());
			}
			if(updatedInfo.getCity() != null) {
				userToBeupdated.setCity(updatedInfo.getCity());
			}
			if(updatedInfo.getEmail() != null) {
				userToBeupdated.setEmail(updatedInfo.getEmail());
			}

	        userRepository.save(userToBeupdated);
	        return userToBeupdated;
	    }

		@RequestMapping(method=RequestMethod.POST, value="/profile/{id}")
		public User quizGraded(@PathVariable String id, @RequestBody HashMap<String,String> quizPerformance) {
			User userToBeupdated = userRepository.findById(id).get();
		    if(quizPerformance.get("totalNumQuizzesTaken") != null) {
					userToBeupdated.updateTotalNumQuizzesTaken();
				}
			if(quizPerformance.get("totalNumQuestionsTaken") != null) {
			    userToBeupdated.updateTotalNumQuestionsTaken(Integer.parseInt(quizPerformance.get("totalNumQuestionsTaken")));
			}
			if(quizPerformance.get("totalNumCorrectAttemps") != null) {
			    userToBeupdated.updateTotalNumCorrectAttemps(Integer.parseInt(quizPerformance.get("totalNumCorrectAttemps")));
			}
			userRepository.save(userToBeupdated);
	        return userToBeupdated;
			}
		}

    @RequestMapping(method=RequestMethod.POST, value="app/signup")
    public User signup(@RequestBody User user){

        if(userRepository.existsByEmail(user.getEmail())){
            User userD = userRepository.findByEmail(user.getEmail());
            return userD;
        }
            userRepository.save(user);
            return user;


    }


}
