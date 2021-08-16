## Making a plan
1) Make a drawing of your app. Simple "wireframes"
![](assets\wireframe.JPG)

2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
- `<header>` container
    - `<h1>` Page Title
    - `<p>` Sources
- `<main>` container
    - 3 x `<article>` container
        - `<h2>` article title
        - `<p>` article contents
- `<section>` container
    - `<img>` 
    - `<button>` user triggers event
    - `<div>` results
- `<footer>` container
    - 3 x `<p>` counter: fail, pass, test attempts

    
5) Is there some state we need to initialize?
    
    `let passCounter = 0`

    `let failCounter = 0`

    `let attemptCounter = 0`

6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
    - Ask the user's name. Their name should be used in subsequent prompts
Confirm that the user really wants to take the quiz. If not, return from your event listener function.
    - Three YES/NO questions (using prompt calls) about the subject. Use your countsAsAYes function to determine the user's response, then compare to the correct answer. Track number of correct responses.
    - Alert the user that the quiz is complete and their results will now be written to the webpage.
    - Write a response to the page with their name and number correct, for example: "Okay Bernice, you got 2/3 correct".
    - STRETCH goal(s):
        - Add a class to style the result differently based on good or bad score.
        - Add different text content ('Great work!' 'Needs improvement!', etc) based on user's results
        - Include a percentage, without decimal places.


7) Think about how to validate each of your steps.
    
    `console.log()` everything.

8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage? N/A

9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks. N/A



