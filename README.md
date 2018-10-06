# :fire: warsawjs-workshop-25-myskills :fire:

## Table of Contents :clipboard:

- [Features](#features)
- [What you can learn](#what-you-can-learn)
- [Setup](#setup)
- [Steps](#steps)
  - [Basic Components](#basic-components)
  - [Confirugation](#configuration)
  - [Authorization service](#authorization-service)
  - [Auth HOC](#auth-hoc)
  - [Loading state](#loading-state)
  - [Notifications](#notifications)
  - [Custom redux middleware](#custom-redux-middleware)
  - [List of questions](#list-of-questions)
  - [Display random questions](#display-random-questions)
  - [Answer question form](#answer-question-form)
  - [Filter questions](#filter-questions)

## Features :speedboat:
* :gem: Authorization service (register/login)
* :gem: Notifications service
* :gem: Custom redux middleware
* :gem: Display list of all questions fetched from api
* :gem: Allow to select level and category of questions
* :gem: Display form with random questions
* :gem: Store answers and connect with user account
* :gem: Allow to create new questions by dynamic form based on question type
* :gem: Display users answered questions on profile page


## What you can learn :mortar_board:
* :diamonds: Next.js
* :diamonds: State management with Redux
* :diamonds: Thunk middleware
* :diamonds: Your custom middleware
* :diamonds: Redux-form
* :diamonds: Reselect

## Setup :hammer:
* ```git clone https://github.com/Flixow/warsawjs-workshop-25-myskills.git```
* ```npm install``` or ```yarn install```
* ```npm run dev``` or ```yarn dev```

Then, you should see something like that:

![](static/screenshot.png)

## Steps
### Basic components
* ```yarn add filter-react-props classnames```

### Confirugation
* Set `API_BASE_URL` variable

### Authorization service
* Setup redux-form (reducer)
* Create signin and signup pages using redux-form
* Validate fields with ```yarn add redux-form-validators```
* Create api `register` and `login` functions
* Create file for `auth` actions with `register` and `login` actions
* Create `user` reducer and combine that
* Store `token` in cookies ```yarn add cookie-js```
* Manage cookies on the server side ```yarn add express cookie-parser```
* Create `Dashboard` page with auth and render `Dashboard` layout

### Auth HOC
* Move auth logic from `Dashboard` page to the HOC

### Loading State
* Create `pending` reducer with actions
* Create `LoaderIndicator` and `Loading` components
* Manage pending state in the auth actions
* Display `Loading` component for the entire application (_app.js)

### Notifications
* Create `notifications` reducer and actions
* Create `SystemNotifications` component
* Add root element to the _app.js file for inject Portal
* Render `SystemNotifications` component for `Dashboard` layout
* Add sample notifications for auth actions

### Custom redux middleware
* Create middleware with notifications and pending state support
* Apply middleware to the store
* Use new api for all already created async actions
* Connect `pending` reducer managed by middleware and remove old one

### List of questions
* Create reducer for questions
* Extend `withAuth` HOC to support custom `getInitialProps`
* Fetch and display list of questions at `Dashboard` layout

### Display random questions
* ```yarn add reselect```
* Create selector to get random `x` questions
* Use created selector on Dashboard layout

### Answer question form
* ```yarn add react-bootstrap```
* Create `QuestionsList` component
* Create `QuestionListItem` component
* Create `AnswerFields` component
* Create `Checkbox` variation for Input component
* Create `answer` action

### Filter questions
* Create selectors to filter questions by level and category
* Add buttons to filter questions on `Dashbaord` layout
