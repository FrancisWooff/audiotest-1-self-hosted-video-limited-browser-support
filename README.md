# audiotest
Template for University of Salford MSc Audio Production students to adapt to host comparative audio tests online

11/08/2020 12:20
To use this template the following additional actions are required as a minimum:
1. A video file with multiple audio tracks to switch between should accompany the 4 other files (1 each html, css, js and php) in the directory. The video file referenced in index.html currently is “output2.mov” - this reference will need to be edited to match the video file you are using.
2. The php file (and any additional php files you create) need to be hosted on a machine running PHP (e.g. a web server) to perform its function. You could test and develop the function of the html, css & js files hosting these locally, but the functionality that follows pressing “Submit” on the index page will not work. See University Service Portal Knowledge article for information on University provided hosting accounts.
3. When the php file is performing its function it e-mails test results to an address “hard written” into the code of the file. Currently place holder address you@edu.salford.ac.uk is used, this will need to be edited to the test owner's e-mail address.
4. At the time at head of this information the js (JavaScript) file successfully switches audio tracks. This is however browser dependent, currently tested on Safari. Does not work in Chrome without specific developer flags enabled.
5. Consideration should be given to GDPR regulation, despite the very small amount of data being collected (name of subject) in running the test.
