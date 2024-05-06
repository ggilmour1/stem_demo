# What a Quality Engineer does.
## A dummy website to show some examples of how and what to test

### Description
The site is an example of a website that has the ability to siign up new users or login existing ones.

As it is a demo site to show the principles of testing to a group not familiar with how to test, it may 
contain some bugs, either intentionally or by accident.  Basically, if it doesnt work all the time, it 
shows that bugs exist, and can cause issues.  

The pages were built using ChatGPT to create the code, but some modifications have been made to make the 
images available from an assets folder, and the css for all pages be generated from a central folder.  This 
helps to ensure consistency in the design, and means any changes can be applied across the application 
quickly.     

### Useful Information

Only on user has been created that will pass login.  Validation of the username and password fields has been
added so that if the correct user is not entered, you will get an error. The username and password are:

- username: john@test.com
- password: Password@123

For sign up, any valid email address will be accepted, but password must contain at least one of uppercase, 
lowercase, number and special character.  

### Running the service

You can create a local http simple server using Python 3.  Clone the code from this repo, then open a command
window and navigate to the folder where the code is downloaded to.  Run the command

``` python3 -m http.server -d /Users/ggilmour1/Projects/STEMdemo ```

This will start a simpleHTTP server running on port 8000.  To access the page in a browser on a Mac, go to 

```  http://0.0.0.0:8000/index.html? ```

If you are on Windows, it prefers the localhost, so either 
``` http://localhost:8000/index.html ``` 
or 
``` http://127.0.0.1:8000/index.html ``` 
will work. 
   
Follow the onscreen options to navigate through the pages.  

Enjoy!

Graham

G Gilmour (c) 2024
