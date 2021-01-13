# Recruiter-Candidate-Management-Web-Application
Developed a reactjs web application that helps a recruiter manage candidate applications

The first thing that I did was to import react-bootstrap using npm install react-bootstrap bootstrap
Then I went ahead coded App.js
 Here I wanted to create a BrowserRouter for my user. Which are the home page and the candidate page. I achieved this by creating paths :
     <Route path='/' component={Home} exact/>
      <Route path='/' component={Candidates}/>
and also {BrowserRouter, Route, Switch} which were made possible by the  'react-router-dom' i imported.

 I went ahead and created a Navigation Links for my route which will enable the user to navigate the home page and the candidate page
 
 For the home page I used an image
 I used bootstrap table for Candidate.js page .
 Here I passed some hard-coded data table values. 
 Upon Clicking the Button , It displays a modal that has the resume of the user and  a text-box that a recruiter should enter comment and save.
