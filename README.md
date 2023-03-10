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
