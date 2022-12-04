# just-tech-news

## Info

## MySQL DB instructions

| step                   | code                   | explanation                                                   |
| ---------------------- | ---------------------- | ------------------------------------------------------------- |
| set up schema in MySQL | `source db/schema.sql` | creates `just_tech_news_db`                                   |
| seed                   | `npm run seed`         | uses `/seeds/index.js` Sequelize methods to seed the database |

## Steps

| task        |     | step                                    | explanation                                                                                                                                                                                              |
| ----------- | --- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| login       | 1   | Create a login page.                    | Both login and sign-up sections will display at once.                                                                                                                                                    |
| login       | 2   | Add front-end logic to forms.           | <ul><li>We will add fetch requests to post to the server when a user logs in. <li>create the logic that will post to the server when a user logs in before we create that user’s session.</li></li></ul> |
| login       | 3   | Create a session on the back end.       | We will keep track of users' sessions so that we can associate them with posts.                                                                                                                          |
| login       | 4   | Add logic to destroy the session.       | The user will also be redirected upon logout.                                                                                                                                                            |
| create post | 1   | Create a single post template.          | create a new Handlebars.js template to render a single post and all of its corresponding data.                                                                                                           |
| create post | 2   | Add upvote functionality.               | connect front-end and back-end logic to create a working upvote button.                                                                                                                                  |
| create post | 3   | Add comment functionality.              | connect front-end and back-end logic to create a working comment form.                                                                                                                                   |
| create post | 4   | Conditionally render the form elements. | use Handlebars.js helpers to hide the form elements to users who aren’t logged in.                                                                                                                       |
| create post | 5   | Conditionally render the login links.   | use Handlebars.js helpers to change the navigation links that a user sees based on their logged-in status.                                                                                               |

                                                                                                                                                            |

## To Do Items

-   ### mock data: What are industry-standard ways of generating large mock data sets?
    -   mockaroo-generated data has duplicates with large data set.
        -   Starting with that data, I could use js function to clean/change data, then Node to write it to a new file?
-   ###
