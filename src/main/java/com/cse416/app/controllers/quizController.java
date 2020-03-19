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
public class quizController {
	
	@Autowired
    QuizRepository quizRepository;
	
	@Autowired
    QuestionRepository questionsRepository;
	



	@RequestMapping(method=RequestMethod.GET, value="/app/startquiz")
	public List<Map<String,String>> index() {
		
	 	Iterable<Quiz> allQuizzes = quizRepository.findAll();
	 	
	 	List<Quiz> list = new ArrayList<>();
	 	
	 	allQuizzes.iterator().forEachRemaining(list::add);
	 	
	 	List<Map<String,String>> quizzes = new ArrayList<Map<String,String>>();
	 	
	 	list.stream().forEach(quiz -> {
	 		
	 		Map<String,String> q = new HashMap<String,String>();
	 		
	 		q.put("name", quiz.getName());
	 		q.put("type", quiz.getId());
	 		q.put("description", quiz.getDescription());
	 		q.put("id", quiz.getId());
	 		
	 		quizzes.add(q);
	 	});
	 	 
		return quizzes;
	}




	@RequestMapping(method=RequestMethod.GET, value="/app/quizzes/{id}")
    public List<Map<String,String>>  questionsForSelectedQuiz(@PathVariable String id) {
		String h = "$%7Bquiz.id%7D";
		System.out.println("This is id " + id);
		System.out.println(quizRepository.findAll());
        //if(quizRepository.findById(id).isPresent()) {
        	

        	List<Map<String,String>> questionsWithChoices = new ArrayList<Map<String,String>>();
        	
        	Iterable<Question> allQuestions = questionsRepository.findAll();
        	
        	List<Question> list = new ArrayList<>();
        	
        	allQuestions.iterator().forEachRemaining(list::add);
        	
        	list.stream().filter(question -> question.getQuizId().equals(h)).forEach(q -> {
        		questionsWithChoices.add(q.getFullQuestion());
        	});

        	System.out.println(questionsWithChoices);
        	return questionsWithChoices;
        	
        	//}
       //System.out.println("Not found"); 	
       //return null;
		
		
       } 
	
	@RequestMapping(method=RequestMethod.POST, value="/app/quizzes/add")
    public Map<String, String> save(@RequestBody Quiz quiz) {
    	
		quizRepository.save(quiz);                     //save quiz and return ID
		Map<String, String> token = new HashMap<String, String>();
		token.put("quizId", quiz.getId());
        return token;

    }	
	
	@RequestMapping(method=RequestMethod.POST, value="/app/question/add")
    public Question save(@RequestBody Question question) {
    	
		questionsRepository.save(question);                     //save quiz and return ID
		Map<String, String> token = new HashMap<String, String>();
		token.put("questionId", question.getId());
		return question;
        // return token;
    }			
}
