Steps to Run the Application

1.Go to src folder in Command prompt
2.Type npm install and hit enter
4.go to Respository folder under shared folder in another terminal
5.Type json-server --watch db.json --port 4201 then hit enter
6. Go to the first terminal again, Type npm start then hit enter
7.Go to  http://localhost:4200 in browser to see the application running

Technologies used

This application is sample one generated for a cinema company…in which latest movies will be displayed in the home page. 
The Gallery page is visible only for private users
Technologies used
1.Frontend built in Angular with SCSS
2.Created a mock backend using Json Server


Concepts used
1. Reactive forms have been used in the application for login form
2. Pipes are used to filter latest movies from movies list
3. Lazyloading (preloading strategy) have been used for the performance improvement
4. Behvavioural subjects have been used for state management along with local storage
5. Errors have been caught  by httpinterceptor class 
6. CanActivate auth-guard service have been used to block unauthenticated users

ToDo
There are a lot improvement could be done in this application..It is not yet completed due to insufficient time







