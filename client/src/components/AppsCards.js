import React from 'react';
import { Card, Image, Grid, Divider, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../actions/headers';
import { Switch, Route, Link } from 'react-router-dom';


class AppsCards extends React.Component {
    state = { Apps: [] }
  
    componentDidMount() {
      axios.get('/api/apps')
        .then( ({ data, headers }) => {
          this.setState({ Apps: data })
          this.props.dispatch(setHeaders(headers))
        });
    }
  
    render() {
      let { Apps } = this.state;
      return (
        <Container center={true} >
            <Link to='/FormNew'>New App</Link><br/>
          <Card.Group itemsPerRow={4}>
            { Apps.map( app =>
              <Card key={app.id}>
                <Link to={`/App/${app.id}`}>
                  <Card.Content>
                    <Image src={app.logo} height={80} />
                    <Divider />
                    <Card.Header>
                      {app.name}
                    </Card.Header>
                  </Card.Content>
                  </Link>
                </Card>
              )
            }
          </Card.Group>
        </Container>
      )
    }
  }
  
  export default connect()(AppsCards)