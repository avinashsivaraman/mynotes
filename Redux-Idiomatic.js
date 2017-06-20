//
// Redux - Initial State
// You can pass the persistedState for the Redux.


const persistedState = loadState();
const store = createStore( todoApp, persistedState);


// Redux: Persisting the state to the Local Storage

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    //Ignore write error
  }
}


// Use throttle from lodash to persist the state in localStorage

store.subscribe(throttle(()=> {
  setState({
    todos: store.getState().todos
  });
}, 1000))

// node-uuid for creating the unique id v4()


//React-Router

import { Router, Route, browserHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
)

//Adding filters

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/(:filters)' component={App} />
    </Router>
  </Provider>
)

// Use params for get the url

const app = ({ params }) => {
  <visibilityFilter filter={params.filter} />
}


//Use withRouter params to inject into the connected Components

import { withRouter } from 'react-router';

const mapStateToProps = (state, { params }) => {
  todos: getVisibileTodos(
    state.todos,
    params.filter || 'all'
  )
}

const visibleTodoList = withRouter(connect(mapStateToProps, mapDispatchToProps)(visibleList))

// mapDispatchToProps shorthand Notations


cosnt visibleTodoList = (withRouter(connect(mapStateToProps, { onTodoClick: toggleTodo })))
