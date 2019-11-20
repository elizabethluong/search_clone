# lyrebird search documentation

### Contributors
[Elizabeth Luong](https://github.com/elizabethluong/)\
[Mr T](https://github.com/tyhammer38)\
[Christopher King](https://github.com/seekingcode18)

## Contents
[Brief](#brief)\
[User Stories](#user-stories)\
[Methodologies and Processes](#methodologies-and-processes)\
[Reviewing the Process](#reviewing-the-process)\
[Reflections on the Project](#reflections-on-the-project)\

## Brief
Create a search engine with a home page and a results page

Create a version of Google with a home page, a logo, a search bar and 2 buttons. Try to make it as much like Google as possible. Pressing one button, an API call should be executed and be taken to a page with 10 results. For the other button, users should be taken to one of the results.

## User Stories
As a user, I'd like to be able to find information about a specific keyword
As a user, I'd like to see which search engine I'm using
As a user, I'd like to type in the keyword in a search bar
As a user, I'd like to press a button to take me to the results
As a user, I'd like to see the top 10 results of that specific keyword
As a user, I'd like to click a random button to load a random page about that subject

## Methodologies and Processes
Pair programming with 30 minute driver/navigator + 5 minute breaks
VS Code

### Technologies
* Node.js
* Express.js
* EJS
* HTML
* CSS
* JavasScript
* Git & Github

## Reviewing the Process
We started by setting up the server in app.js and the file structure, e.g. views and public folders. Then, we wrote all of the markup for both the hpme and results pages, and subsequently styled both pages. Next, we set up the API key from Google.

We appended the keywords to the URL in our fetch call. We then passed the data to the page and rendered it to the relevant elements.

Finally, we implemented the random button functionality and the second search form at the top of the results page.

## Reflections on the Project
We got off to a quick start with the front end but then we ran into a few problems in fetching and rendering the search data. Once we had made a successful API call and logged the results to the console, we tried to pass the data to the results page without using a templating engine. This was unsuccessful and led to 3+ hours of trial and error. On day 2, the decision was made to use EJS to transfer the data. This enabled us to transfer it but we still had trouble accessing it on the results page. Again, this took 2-3 hours to get working.

We tried to use an agile methodology and did brief 'stand-ups' at the start of each day.

Unfortunately, we have hard-coded all of the results into the results page, where we would've liked to loop through the array and dynamically create the elements. Once we solved this, it didn't take too long to implement the remaining functionality.

At the end of day 1, we did a code review with another group. While this was somewhat helpful, neither of us had done enough functional code to make it really useful.
