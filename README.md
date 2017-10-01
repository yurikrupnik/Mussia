# Mussia Docs

Minimal Universal App Boilerplate - express, mongod, react, redux, react-router, babel and webpack  

# DB Structure and data fetching: 

Collections: 
 - Users: contains id (not mongo _id) to save by user id in results collection
 - Quizzes: contains label and answers array, each answer has label
 - Results: contains user id, the selected answer_id and quiz_id

Api:
 - Users: Not interesting 
 - Quizzes: open for teachers and principles. Used to retrive quiz list or by quiz_id. To be added full crud.
 - Results: used to retrieve the count of answer_id's - currently post method
    
Redux State:
 - user: Not interesting 
 - quizzes: {data: array, active: boolean, selected: object}
 - results: {data: array, active: boolean}
    
Containers: react components that connected to redux and retrieve the state needed for the route. Inner components are pure dumb components that render by props

- ResultsContainer: connected to quizzes state, on mount gets quiz by id if quizzes.selected is empty. if not empty uses cache from quizzes.selected. renders all children with current props. 

- QuizzesContainer: connected to quizzes and results states. on mount getQuizzes and getResults by answers ids for the first quiz and set quizzes.selected. 2 extra methods: handleChange called upon dropdown change or any other change system to work on current quiz, gets answers ids and asks for results and setting quizzes.selected to current quiz. handleClick currently redirects to '/:quiz_id'.

Routes:
- '/' > ResultsContainer
- '/:quiz_id' > QuizzesContainer

API Folder explanation by file nane
-----------------------------------
 - actions: async actions used in the client side for api operations - can be used in server pre render state with host prefix for server to call it self method.
 - config: config object with url for api, selected used by the container (not using it currently) and mongoose model string for the collection
 - container: react component connected to redux
 - controller: server api callbacks
 - index: express api crud methods
 - model: mongoose collection model
 - reducer: reducer to handle current api and data
 - selectors: mapToProps and actions folder's actions and data 

Folders worth watching: api/quizzes, api/results and components folder 

All components in components folder are dumb (simple functions) - using props, not connected to anything.

The logic is done by redux and containers, containers pass data to inner components.

