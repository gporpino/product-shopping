import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';
import TextMessages from '../textmessages/TextMessages.component';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);

    this.onSave = this.onSave.bind(this);

    this.state = {
      id: null,
      name: '',
      price: '',
      errorMessages: {},

      submitted: false,
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onSave() {
    var data = {
      name: this.state.name,
      price: this.state.price,
    };
    this.props.onSave(data);
  }

  setErrorMessages(messages) {
    this.setState({ errorMessages: messages });
  }

  setId(id) {
    this.setState({ id: id });
  }

  setName(name) {
    this.setState({ name: name });
  }

  setPrice(price) {
    this.setState({ price: price });
  }

  render() {
    return (
      <div className='submit-form'>
        <Form.Group controlId='productName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            className='productName'
            placeholder='Name'
            required
            value={this.state.name}
            onChange={this.onChangeName}
          />

          <TextMessages
            messages={this.state.errorMessages.name}
            type='danger'
          ></TextMessages>
        </Form.Group>

        <Form.Group controlId='productPrice'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            className='productPrice'
            placeholder='Price'
            required
            value={this.state.price}
            onChange={this.onChangePrice}
          />

          <TextMessages
            messages={this.state.errorMessages.price}
            type='danger'
          ></TextMessages>
        </Form.Group>

        <Button href='/products' variant='secondary' className='mr-2'>
          Back to list
        </Button>
        <Button
          className='submit'
          variant='primary'
          type='submit'
          onClick={this.onSave}
        >
          Submit
        </Button>
      </div>
    );
  }
}
export default ProductForm;
