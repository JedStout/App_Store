import React, { Component } from 'react';
import { Container, Button, Form, Input, Label } from 'semantic-ui-react';

class FormNew extends React.Component {
    defaultValues = { name: '', price: '', description: '', category: '', version: ''}
    state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id)
      this.setState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let product = { ...this.state }
    this.props.submit(product)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value })
  }

  render() {
    let { name, price, description, category, version } = this.state;
    return (
        <Container>
      <Form onSubmit={this.handleSubmit}>
        <Label>New: </Label><Input
          id="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />        <br/>
        <Label>Descriptopn: </Label><Input
          id="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />        <br/>
        <Label>Category: </Label><Input
          id="Category"
          placeholder="Category"
          value={category}
          onChange={this.handleChange}
        />        <br/>
        <Label>Price: </Label> <Input
          id="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={this.handleChange}
        />        <br/>
        <Label>Version: </Label> <Input
          id="version"
          placeholder="Version"
          value={version}
          onChange={this.handleChange}
        />     <br/>
        <Button>Submit</Button>
      </Form>
      </Container>
    )
  }
}

export default FormNew;