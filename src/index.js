import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

// BrowserRouter interacts with the History 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import PostIndex from './components/post_index';
import PostsNew from './components/posts_new'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={ PostsNew } />
          <Route path="/" component={ PostIndex } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
