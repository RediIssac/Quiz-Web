package com.cse416.app.controllers;


import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cse416.app.models.User;
import com.cse416.app.repositories.UserRepository;

@RestController
public class userController {
	
	@Autowired
    UserRepository userRepository;
    	
    @RequestMapping(method=RequestMethod.POST, value="app/home")
    public User save(@RequestBody User user) {
        userRepository.save(user);
        return user;
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
    
    
    
	//show profile of the user
	@RequestMapping(method=RequestMethod.GET, value="app/profile_info/{id}")
	public HashMap<String,String> show(@PathVariable String id) {
			User user = userRepository.findById(id).get();
			HashMap<String,String> userInfoToBeDisplayed = new HashMap<String,String>();
			userInfoToBeDisplayed.put("name",user.getName());
			userInfoToBeDisplayed.put("familyname",user.getFamilyName());
			userInfoToBeDisplayed.put("email",user.getEmail());
			userInfoToBeDisplayed.put("pictureUrl",user.getPictureUrl());
			userInfoToBeDisplayed.put("totalNumQuizzesTaken", Integer.toString(user.getTotalNumQuizzesTaken()));
			userInfoToBeDisplayed.put("totalNumQuestionsTaken",Integer.toString(user.getTotalNumQuestionsTaken()));
			userInfoToBeDisplayed.put("totalNumCorrectAttemps",Integer.toString(user.getTotalNumCorrectAttemps()));
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
						userToBeupdated.setFamilyName(updatedInfo.getFamilyName());
					}
					if(updatedInfo.getEmail() != null) {
						userToBeupdated.setEmail(updatedInfo.getEmail());
					}
					if(updatedInfo.getPictureUrl() != null) {
						userToBeupdated.setPictureUrl(updatedInfo.getPictureUrl());
					}

					userRepository.save(userToBeupdated);
					return userToBeupdated;
					}


//update quiz performance
	@RequestMapping(method=RequestMethod.POST, value="app/profile/{id}")
	public void quizGraded(@PathVariable String id, @RequestBody HashMap<String,String> quizPerformance) {
				User userToBeupdated = userRepository.findById(id).get();
				if(quizPerformance.get("totalNumQuizzesTaken") != null) {
						userToBeupdated.setTotalNumQuizzesTaken(userToBeupdated.getTotalNumQuizzesTaken()+ 1);
					}
				if(quizPerformance.get("totalNumQuestionsTaken") != null) {
						userToBeupdated.setTotalNumQuestionsTaken(Integer.parseInt(quizPerformance.get("totalNumQuestionsTaken")) +
																				 userToBeupdated.getTotalNumQuestionsTaken());
				}
				if(quizPerformance.get("totalNumCorrectAttemps") != null) {
						userToBeupdated.setTotalNumCorrectAttemps(Integer.parseInt(quizPerformance.get("totalNumCorrectAttemps")) +
								                                                 userToBeupdated.getTotalNumCorrectAttemps());																	
				}
				userRepository.save(userToBeupdated);

				}
	
}
 
            

