import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import './animate.css';
import './App.css';
import './styles.css';
import State from './components/state/state';
// import Home from './components/home/home.component';
// import Navbar from './components/navbar/navbar.component';
// import BookDetails from './components/book/bookdetails.component';
// import Login from './components/login/login.component';

interface Props extends RouteComponentProps {

}

const App: React.FC = (props:any) => {
  return (
    <div className='App'>
      <State maxNum={12}/>
      <BrowserRouter>
        {/* <Navbar
          location={props.location}
          history={props.history}
          match={props.match}
        /> */}

        <Switch>
          {/* <Route path='/books/:id' component={BookDetails} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
