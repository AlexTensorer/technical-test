# Technical test

## Introduction

Fabien just came back from a meeting with an incubator and told them we have a platform “up and running” to monitor people's activities and control the budget for their startups !

All others developers are busy and we need you to deliver the app for tomorrow.
Some bugs are left and we need you to fix those. Don't spend to much time on it.

We need you to follow these steps to understand the app and to fix the bug : 
 - Sign up to the app
 - Create at least 2 others users on people page ( not with signup ) 
 - Edit these profiles and add aditional information 
 - Create a project
 - Input some information about the project
 - Input some activities to track your work in the good project
  
Then, see what happens in the app and fix the bug you found doing that.

## Then
Time to be creative, and efficient. Do what you think would be the best for your product under a short period.

### The goal is to fix at least 3 bugs and implement 1 quick win feature than could help us sell the platform

## Setup api

- cd api
- Run `npm i`
- Run `npm run dev`

## Setup app

- cd app
- Run `npm i`
- Run `npm run dev`

## Finally

Send us the project and answer to those simple questions : 
- What bugs did you find ? How did you solve these and why ?\
  &rarr; toString() removed in app/src/scences/project/view.js. This fix allowed project creation.\
  &rarr; findOne added in api/src/controllers/project.js. MongoDB's find method will an array and an empty one if nothing exists. findOne is more precise and allowed edit of project via id instead of returning /project/edit/undefined in the URL.\
  &rarr; Added projetName in activites for the message "What did you deliver on *projectName*".\
  &rarr; onChange changed to onClick to allow submission of the edit project form.\
  &rarr; Username was disabled, enabled it so we can see Usernames on people component.\
  &rarr; Fixed redirect when editing a user in people component.\
  &rarr; Fixed redirect when editing a account details.
  
- Which feature did you develop and why ?\
  In terms of quick win features, I quickly added a section on the home page allowing the users/product owner, to list features to be completed by the end of the week (or day or sprint, depending on the need).
  This allows users to quickly see what had been completed and what is left as soon as they logon to the 'portal'.
  
- Do you have any feedback about the code / architecture of the project and what was the difficulty you encountered while doing it ?\
  &rarr; The structure of the api file is clean enough, although I would usually use a script type set to module for import statement and not require. I generally have a seperate router file, in which I import my controllers and pass my methods through with the appropriate validating middle (ie. JOI or JWT middleware).\
  &rarr; No comments in particular when it comes to the app file. Could be cleaned up, but otherwise relatively easy to navigate. 
  

