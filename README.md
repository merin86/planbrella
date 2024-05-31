# Planbrella (Project Portfolio 5, Code Instituute)

[The actual website](https://)

Text...

![Mockup]()

## Content Index

---

# Planing Stage

---

# Back-End

## Database

## Models

### Profile

### Tasks

## Testing

### Automated Testing

- Back-End, views (Tasks)...

The automated testing is not comprehensive, but it gives an indication of the developer's ability to create automated tests.

### Python Testing

To test that the Python code meets the PEP8 standard, [CI Python Linter](https://pep8ci.herokuapp.com/) was used.

Python files tested:

- admin
- models
- serializers
- urls
- views
- permissions
- settings
- tests

Only small errors were detected, such as "too few blank lines", "line too long" and "no newline at end of file". All these have now been rectified.

## Bugs

When I deployed to Heroku, there were errors in the code that caused only this text to appear when I opened the app via Heroku:

![deployment-heroku](documentation/images/deployment-heroku.jpg)

I tried various ways to fix this, but in the end had to take the help of a tutor. The error turned out to be in my root_route, api_view, which was missing permission_classes. This code solved the problem:

![deployment-heroku-fixed](documentation/images/deployment-heroku-fixed.jpg)

---

# Front-End

## User Experience (UX)

## Features

## Design

### Typography

The website uses font-family: 'Montserrat'. A trendy and elegant style with a distinct character.

-   The fonts used were imported from [Google Fonts](https://fonts.google.com/)

### Logo and Favicon

- [ChatGPT](https://chat.openai.com/) was used to create the logo for the webpage

- This page was used to create a favicon for the webpage: [Favicon](https://favicon.io/)

## Testing

## Bugs

---

# Overall

## Technologies Used

### Programming Languages

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [Python](https://www.python.org/)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries and Programs Used

-   [GitPod](https://www.gitpod.io/):
The IDE where the site was built.
-   [GitHub](https://github.com/):
To host and store the data for the site.
-   [Heroku](https://www.heroku.com/):
Used to deploy the project.
-   [ElephantSQL](https://customer.elephantsql.com/):
Used to store PostgreSQL database.
-   [Django REST Framework](https://www.django-rest-framework.org/):
Framework used to create the Back-End for the web page.
-   [React Bootstrap](https://react-bootstrap.github.io/):
CSS framework used as a tool to style the web page.

### Packages

Most important packages:

- django
- djangorestframework
- django-allauth
- dj-rest-auth
- psycopg2
- Gunicorn
- whitenoise
- 

<details>
<summary>All packages</summary>
<img src="">
</details>

## Agile

The project was developed following Agile principles, with the Project Board and Issues features on GitHub playing a central role in its organization.

- [My Project Board](https://github.com/users/merin86/projects/7)

This instruction video was used to help create the Kanban Board: [Agile Guide](https://www.youtube.com/watch?v=U_dMihBgUNY)

## Deployment

## Credits

### Code

#### Tutorials

- The two walkthroughs "Django REST Framework" and "Moments" from [Code Institute](https://codeinstitute.net/) has been used as pillars to create the structure. Some parts have been copied from these tutorials, such as the logic for "SignUp" and "SignIn".

- [Build a Todo app with Django and React](https://www.youtube.com/watch?v=sBjbty691eI&list=PLXuTq6OsqZjbCSfiLNb2f1FOs8viArjWy) has also been used as a support to create structure for various functions.

#### Websites

- These two websites have been used frequently to create the web page [Create React App](https://create-react-app.dev/) & [React](https://react.dev/)

- Various "Cheat Sheets", provided by CI, have been used in the creation of this web page.

- [Django REST framework](https://www.django-rest-framework.org/) has been used frequently to create the Back-End of the web page.

- [React Bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction) has been used to style the web page and apply the correct codes for this.

- This previous PP5 project has been used as a source of inspiration and also as a tool, using DevTools, for various codes: [ProPlanX](https://project-5-proplanx-536622b745e3.herokuapp.com/)

- The following web page has been used as a learning tool and source of inspiration to create own codes for the website: [W3Schools](https://www.w3schools.com/)

- This README.md has been used as a template to create this README: [pro5 - README.md](https://github.com/gStarhigh/pro5/blob/main/README.md)

- With the help of [MDN Web Docs](https://developer.mozilla.org/en-US/), the automated tests for the project were created.

- These two web pages were used when installing and configuring django-allauth and dj-rest-auth: [allauth](https://docs.allauth.org/en/latest/installation/quickstart.html) & [rest-auth](https://dj-rest-auth.readthedocs.io/en/latest/installation.html)

#### Other References

- This page was used to generate a secret code: [Djecrety](https://djecrety.ir/)

## Media

## Acknowledgment

- I want to thank the tutor (Roman) who helped me fix the "bug" that caused problems when I tried to open my APIView via Heroku.