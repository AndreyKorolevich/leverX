import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Main from './_Diploma/Main';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Switch>
        <Route path='/request/:id'>
        </Route>
        <Route path='/request/:id/edit'>
        </Route>
        <Route path='/'>
          <Main/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
