import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const TextMessages = (props) => {
  return props.messages !== undefined ? (
    <Form.Text className={'text-messages text-' + props.type}>
      {props.messages.join(', ')}
    </Form.Text>
  ) : null;
};

TextMessages.propTypes = {
  name: PropTypes.array,
};

export default TextMessages;
