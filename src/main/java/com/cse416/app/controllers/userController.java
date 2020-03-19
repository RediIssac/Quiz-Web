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

    //save user
    @RequestMapping(method=RequestMethod.POST, value="app/save")
    public User save(@RequestBody User user) {
        userRepository.save(user);
        return user;
    }

    //show profile of the user
		@RequestMapping(method=RequestMethod.GET, value="app/profile_info/{id}")
    public HashMap<String,String> show(@PathVariable String id) {
			  User user = userRepository.findById(id).get();
        HashMap<String,String> userInfoToBeDisplayed = new HashMap<String,String>();
				userInfoToBeDisplayed.put("name",user.getName());
				userInfoToBeDisplayed.put("familyname",user.getFamilyName());
				userInfoToBeDisplayed.put("email",user.getEmail());
				userInfoToBeDisplayed.put("pictureUrl",user.getPictureUrl());
				userInfoToBeDisplayed.put("totalNumQuizzesTaken",user.getTotalNumQuizzesTaken());
				userInfoToBeDisplayed.put("totalNumQuestionsTaken",user.getTotalNumQuestionsTaken());
				userInfoToBeDisplayed.put("totalNumCorrectAttemps",user.getTotalNumCorrectAttemps());
				return userInfoToBeDisplayed;
    }

	 //update profile information of the user
		@RequestMapping(method=RequestMethod.PUT, value="app/profile/{id}")
	    public User update(@PathVariable String id, @RequestBody User updatedInfo) {
						User userToBeupdated = userRepository.findById(id).get();
						if(updatedInfo.getName() != null) {
							userToBeupdated.setName(updatedInfo.getName());
						}
						if(updatedInfo.getFamilyName() != null) {
							userToBeupdated.setAddress(updatedInfo.getFamilyName());
						}
						if(updatedInfo.getEmail() != null) {
							userToBeupdated.setEmail(updatedInfo.getEmail());
						}
						if(updatedInfo.getpictureUrl() != null) {
							userToBeupdated.setpictureUrl(updatedInfo.getpictureUrl());
						}

				    userRepository.save(userToBeupdated);
				    return userToBeupdated;
				    }

     //update quiz performance
		@RequestMapping(method=RequestMethod.POST, value="app/profile/{id}")
		public void quizGraded(@PathVariable String id, @RequestBody HashMap<String,String> quizPerformance) {
					User userToBeupdated = userRepository.findById(id).get();
				  if(quizPerformance.get("totalNumQuizzesTaken") != null) {
							userToBeupdated.setTotalNumQuizzesTaken(userToBeupdated.get("totalNumQuizzesTaken") + 1);
						}
					if(quizPerformance.get("totalNumQuestionsTaken") != null) {
					    userToBeupdated.setTotalNumQuestionsTaken(Integer.parseInt(quizPerformance.get("totalNumQuestionsTaken")) +
							                             userToBeupdated.getTotalNumQuestionsTaken()));
					}
					if(quizPerformance.get("totalNumCorrectAttemps") != null) {
					    userToBeupdated.updateTotalNumCorrectAttemps(Integer.parseInt(quizPerformance.get("totalNumCorrectAttemps")) +
							                                                                 userToBeupdated.getTotalNumCorrectAttemps()));
					}
					userRepository.save(userToBeupdated);
			    
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

