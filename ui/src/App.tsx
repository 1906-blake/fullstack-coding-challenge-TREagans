import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import GroceryList from './components/GroceryList';
import './animate.css';
import './App.css';
import './styles.css';
import List from './components/List';

interface Props extends RouteComponentProps {

}

const App: React.FC = (props:any) => {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navbar
          location={props.location}
          history={props.history}
          match={props.match}
        /> */}

        <Switch>
          <Route path='/grocery-lists/:id' component={List} />
          {/* <Route path='/login' component={Login} /> */} 
          <Route path='/' component={GroceryList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
