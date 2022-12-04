# just-tech-news

## Info

## MySQL DB instructions

| step                   | code                   | explanation                                                   |
| ---------------------- | ---------------------- | ------------------------------------------------------------- |
| set up schema in MySQL | `source db/schema.sql` | creates `just_tech_news_db`                                   |
| seed                   | `npm run seed`         | uses `/seeds/index.js` Sequelize methods to seed the database |

## Packages

| library                   | explanation                                                                     |
| ------------------------- | ------------------------------------------------------------------------------- |
| express-session           | allows us to connect to the back end.                                           |
| connect-session-sequelize | automatically stores the sessions created by express-session into our database. |

## To Do Items

-   ### mock data: What are industry-standard ways of generating large mock data sets?
    -   mockaroo-generated data has duplicates with large data set.
        -   Starting with that data, I could use js function to clean/change data, then Node to write it to a new file?
-   ###
