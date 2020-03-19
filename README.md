# Quiz-Website

To run this project
* First run the database 
     * Go to the bin folder of Mongodb directory in your terminal and type "mongod" which runs the database
 # >mongod
     
* Then run the backend spring boot
     *In windows - go to git bash terminal and type "./mvnw spring-boot:run"
     *In Linux the above command works in a normal terminal
# >./mvnw spring-boot:run
     
* Run the frontend
    Go to frontend folder directory in the Quiz-web repository you clonned in your terminal and type "npm start"
   # >npm start
   

#What the web-app does?

It lets u take a quiz and gives you the result.
You can also create account and safe your user information.

#Modified Requirements

We did google authentication and hence we don't require the user to enter their username and password, rather we directly connect them
to google sign up. This means we don't have access to let them edit their password, therefore we have modified the profile
edit page where the user can only edit their email and user name but not password.









