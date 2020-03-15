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

@RestController
public class quizController {
	
	@Autowired
    QuizRepository quizRepository;
	
	@Autowired
    QuestionRepository questionsRepository;
	
	
	@GetMapping("/app/startquiz")
	public Map<String,ArrayList<String>>
	 index() {
		
	 	Iterable<Quiz> allQuizzes = quizRepository.findAll();
	 	
	 	Map<String,ArrayList<String>> quizzesWithTypes = new HashMap<String,ArrayList<String>>();
	 	
	 	List<Quiz> list = new ArrayList<>();
	 	
	 	allQuizzes.iterator().forEachRemaining(list::add);
	 	
	 	list.stream().forEach(quiz -> {
	 		
	 		if(!quizzesWithTypes.containsKey(quiz.getType())) {
				
				quizzesWithTypes.put(quiz.getType(),new ArrayList<String>());
			}

	 			quizzesWithTypes.get(quiz.getType()).add(quiz.getName());
	 		
	 	});
	 	 
		// model.addAttribute("quizzesWithTypes",quizzesWithTypes);
		

// ============test==============








		return quizzesWithTypes;
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/app/quizzes/{id}")
    public String questionsForSelectedQuiz(@PathVariable String id, ModelMap model) {
		
        if(quizRepository.findById(id).isPresent()) {
        	
        	Map<String,ArrayList<String>> questionsWithChoices = new HashMap<String,ArrayList<String>>();
        	
        	Iterable<Question> allQuestions = questionsRepository.findAll();
        	
        	List<Question> list = new ArrayList<>();
        	
        	allQuestions.iterator().forEachRemaining(list::add);
        	
        	list.stream().filter(question -> question.getQuizId().equals(id)).forEach(q -> {
        		
        		ArrayList<String> allPossibleAnswers = new ArrayList<String>();
        		
        		allPossibleAnswers.add(q.getPossibleAnswer1());
        		
        		allPossibleAnswers.add(q.getPossibleAnswer2());
        		
        		allPossibleAnswers.add(q.getPossibleAnswer3());
        		
        		allPossibleAnswers.add(q.getPossibleAnswer4());
        		
        		allPossibleAnswers.add(q.getCorrectAnswer());
        		
        		questionsWithChoices.put(q.getQuestion(),allPossibleAnswers);
        		     
        	    });
        	
        	model.addAttribute("quizWithQuestions", questionsWithChoices);
        	
			return "/selectedQuizPage";
        }
		
		return "/pagenotfound";
		
		
    } 
	
	@RequestMapping(method=RequestMethod.POST, value="/app/quizzes/add")
    public Map<String, String> save(@RequestBody Quiz quiz) {
    	
		quizRepository.save(quiz);                     //save quiz and return ID
		Map<String, String> token = new HashMap<String, String>();
		token.put("quizId", quiz.getId());
        return token;

    }	
	
	@RequestMapping(method=RequestMethod.POST, value="/app/question/add")
    public Map<String, String> save(@RequestBody Question question) {
    	
		questionsRepository.save(question);                     //save quiz and return ID
		Map<String, String> token = new HashMap<String, String>();
		token.put("questionId", question.getId());
        return token;

    }			
	

}
