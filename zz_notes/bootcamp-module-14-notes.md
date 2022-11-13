## 14 intro

### Goals

-   Render dynamic HTML using the Handlebars.js template engine.
-   Explain and implement MVC modularization in a full-stack web application.
-   Configure Heroku for deployment of an application using MySQL.
-   Explain the interaction between the Model, View, and Controller.
-   Explain separation of concerns and its benefits.
-   Implement user authentication.

## 14.1

1.  Set up the project. You’ll build off of the previous project by creating new GitHub issues and adding a style sheet.
1.  Set up the template engine. You’ll install Handlebars and configure Express to use it as its template engine.
1.  Create the homepage template. You’ll create a Handlebars template for the homepage, populated with dummy data.
1.  Populate the template with Sequelize data. You’ll use a previously defined Sequelize query to populate the homepage with real data.

### GitHub Issues

Title: Create a homepage

User Stories:

-   As a user, I can view all news articles in a list.

-   As a user, I can see how many upvotes and comments each article has.

-   As a user, I can click on the comment count to route to a different page.

Title: Create a login and signup page

User Stories:

-   As a user, I can visit a login page to create a new account or log into an existing account.

-   As a user, I want to stay logged in even if I refresh the page or close the browser tab.

-   As a user, I can click a "logout" button for the app to forget me.

Title: Create a single post page

User Stories:

-   As a user, I can view an article's details on a separate page.

-   As a logged-in user, I can add a comment to an article.

-   As a logged-in user, I can upvote an article.

Title: Create a dashboard for logged-in users

User Stories:

-   As a logged-in user, I can view all of my posted articles on a separate dashboard page.

-   As a logged-in user, I can create new article posts via the dashboard.

-   As a logged-in user, I can edit or delete my existing articles via the dashboard.

## 14.1.3

1. Create the Homepage File
2. Add a Style Sheet
    - use `path` in `server.js` to make stylesheet available to client. `express.static()` method = Express.js middleware that takes contents of a folder and serves them as static assets.

## 14.1.4 Set up the Template Engine

-   using Fetch API to load front-end code
    -   bad for SEO
    -   causes extra network requests on servers

### MVC Paradigm

-   Models: the core data of your app1
-   Views: the UI components, such as your HTML layouts
-   Controllers: the link between your models and views

<strong>TO DO: review how all the files connect with each other.</strong>
