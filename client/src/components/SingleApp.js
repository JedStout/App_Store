import React from 'react';
import { Card, Image, Grid, Divider, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../actions/headers';
import { Switch, Route, Link } from 'react-router-dom';
import FormEdit from './FormEdit';

class SingleApp extends React.Component {
    state = { app: {}, edit: false }
  
    componentDidMount() {
      axios.get(`/api/apps/${this.props.match.params.id}`)
        .then( res => this.setState({ app: res.data }) )
    }
  
    toggleEdit = () => {
      this.setState( state => {
        return { edit: !this.state.edit }
      });
    }
  
    submit = (app) => {
      axios.put(`/api/apps/${this.props.match.params.id}`, { app })
        .then( res => this.setState({ app: res.data, edit: false }) );
    }

    DeleteApp = (id) => {
        axios.delete(`/api/apps/${id}`)
          .then( () => {
            this.props.history.push('/');
      })
    }

    show() {
      const { name, description, category, price, version, logo } = this.state.app;
      return (
        <Container centered={true}>
            <Card centered={true}>
                <Image src={logo} />
                <h1>{name}</h1>
                <h3>{description}</h3>
                <h4>{category}</h4>
                <h4>{price}</h4>
                <h4>{version}</h4>
            </Card>
        </Container>
      )
    }
  
    edit() {
      return <FormEdit {...this.state.app} submit={this.submit} />
    }
  
    render() {
        let { edit } = this.state;
        return (
          <Container centered={true}>
            { edit ? this.edit() : this.show() }
            <Button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</Button>
            <Button onClick={ () => this.DeleteApp(this.state)}>Delete</Button>
          </Container>
        )
    }
}
  
  export default SingleApp;