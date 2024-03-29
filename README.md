# Song Share

# Design
Music is a powerful form of expression that can lead to deep human connections. The Song Share app allows individuals to connect with friends and family on another level by sharing their favorite songs. When users find a new song to obsess over, they will be able to share it to their profile. The posted song will then appear on a public feed for their friends to view and interact with. Additionally, when users find themselves on the hunt for new music, they can use the song share app to see what their friends have been listening to. In this way, the song share app is a social media to bring people together. 

<img width="205" alt="Screen Shot 2023-01-25 at 4 23 38 PM" src="https://user-images.githubusercontent.com/97192252/214715683-f6a3f161-43b0-4702-b774-c096d2c492cc.png">
<img width="207" alt="Screen Shot 2023-01-25 at 4 23 50 PM" src="https://user-images.githubusercontent.com/97192252/214715715-905a3bf4-1be3-4af7-897b-a9ea515b1459.png">
<img width="207" alt="Screen Shot 2023-01-25 at 4 24 03 PM" src="https://user-images.githubusercontent.com/97192252/214715747-3a04137d-a1ad-4ae3-a889-6be50aeec4ff.png">


# Key Features
Secure login over HTTPS 

Ability to share songs to a public feed (Called the "Friends" page)

Ability to share songs to a personal profile

Ability for a user to edit and delete their song posts

Display of songs that your friends have shared

Ability to comment on friends' posts

Ability for a user to edit and delete their comments

# Notes:
From this assignment, I learned more about the process of commiting, pushing, and pulling versions of repositories from and to GitHub. I have used GitHub a little bit in other classses, but I never understood the process that well. Here is the process as I now understand it:

1. To get updates from pc to GH:

    a. make updates

    b. commit your updates

    c. push these to GitHub


2. To get updates from GH to pc:

    a. make updates

    b. commit updates

    c. pull updates to pc
    

3. Sometimes if the same line is altered from multiple locations, you make have to resolve the merge. This is very straight forward in VS. 




#Notes: This is the code to shell into my server from terminal: ssh -i ~/Desktop/CS260/AshlynDunn16.pem ubuntu@172.31.40.250 (elastic ip address)
#NEW:: ssh -i ~/Desktop/CS260/AshlynDunn16.pem ubuntu@260projectad.click

PUSHING changes to developent environment: ./deployWebsite.sh -k ~/Desktop/CS260/AshlynDunn16.pem -h 260projectad.click

SIMON NOTES 2-8-23

1. code to deploy to the simon subaddress: ./deployFiles.sh -k ~/Desktop/CS260/AshlynDunn16.pem -h 260projectad.click -s simon
2. I learned about permissions. If the deploy.sh file doesn't work, it is probably an issue with permissions. Here is a helpful exchange: https://stackoverflow.com/questions/14219092/bash-script-bin-bashm-bad-interpreter-no-such-file-or-directory
3. I learned more about how all of the elements I have learned interact, and how they look in an actual application.
4. I learned again how to commit and push and pull between my local machine and github. Specifically, click the three circles and lines icon, click the commit button, change the commit file, click check in the top right corner, and then click out on the blue rectange.
5. I understand input and embedded links a lot better.
Simon CSS Notes

1. I learned a lot more about using flex
2. I learned a lot more about classes and how they can be useful for design
3. I learned how to connect the html files to the CSS files as their style guide
see simon project in vs code for reference


HTML CSS Project notes:
1. I realized how important it is to use good containers
2. I learned that lists and unordered lists are really good for a lot of things
3. I had to use forms, and I got a lot more comfortable with that syntax


Start up deliverable - JavaScript Notes:
1. I learned how to user local storage to store information
2. I learned how to set up a login - like interaction
3. I learned how to display information pulled from local storage
4. I learned how to make html and js files interact. REMEMBER: if you need to access the html elements int he javascript, you have to put the reference to the javascript file at the BOTTOM of your main in html or else it would be able to find the elements because it will have run before the html. 


Simon Service Notes:
1. To deploy now that we have node.js and everything, use: ./deployService.sh -k ~/Desktop/CS260/AshlynDunn16.pem -h 260projectad.click -s simon
2. I learned about how to set the port, check the index.js file in the root to see
3. make sure to set the port on my startup to 4000 --use the same code in SimonV2 index.js to do this!!!
4. The steps to chenge it to hosted by a web server are in "Simon Service"
5. I got a better understanding of what is happeneding and how we are now hosting the site
6. I also learned about get and pull requests etc.

Simon DB Notes:
1. I learned where to put all the stuff connecting to the Mongo database
2. This project was basically just more exposure to and i more direct example of the short one before it
3. Deployment string: ./deployService.sh -k ~/Desktop/CS260/AshlynDunn16.pem -h 260projectad.click -s simon
4. I also learned how to store keys in my environment so that I can access them in my code without publishing them publicly
5. I learned after shelling in, you do :wq to get out
6. I learned more about the difference between zshell and bash. I am using zshell

Simon Login Notes:
1. I learned how to authenticate users
2. I learned that you need to connect to the Mongo database to store login information with usernames and passwords
3. I learned where to put the web apis and how to get them to function from the actual website as well as how to get the application to listen on a port so that I can make requests from my terminal
4. To make it listen from a port, I click the icon with the play symbole and the bug and then click run and debug (this is the same as typing f5)
5. Finally, I learned that if I try to make it listen from the port, it is more difficult to complete tasks for some reason, so I shouldn't do it that way

Simon Websocket Notes:
1. Websocket changes the client-server relationship to a peer-peer relationship
2. This allows the server and client to interact back and forth rather than only letting the client make requests to the server
3. I learned that to user websocket, you first have to run npm install ws to install it
4. I will user websocket to let users communicate by captioning their posts, and allowing other users to see these captions

Startup Service Notes:
1. I learned that if the script is unable to deploy, there may be an issue with the instance
2. I learned how to debug in the web browser using inspect and typing "debug" in the actual file
3. I learned a lot more about how to store things like a user's credentials
4. I learned that mac uses zshell by default and vs code uses bash by default, so this can make the environment variables confusing
5. To fix this, just put the environment variables in both environments

Simon React Notes:
1. I learned that when dependencies are already listed in teh package.json, then you just have to run npm install and it will install all necessary packages
2. I also learned that, because of this, you ened to run npm install in subfolders too sometimes
3. I learned a lot more about react in general
4. I learned that, in order to debug a react project, it is better to create a launch.json file
5. vs code will generate this for you if you click the link int he debug window
