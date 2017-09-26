import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import FormNew from './FormNew';
import Flash from './Flash';
import ProtectedRoute from './ProtectedRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import AppsCards from './AppsCards';
import SingleApp from './SingleApp';

class App extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <Flash />
          <FetchUser>
          <Switch>
            <ProtectedRoute exact path='/' component={AppsCards} />
            <ProtectedRoute exact path="/App/:id" component={SingleApp} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/FormNew' component={FormNew} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </Container>
    );
  }
}

export default App;
