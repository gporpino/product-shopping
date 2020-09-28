import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const ConfirmButton = (props) => (
  <Button
    variant='danger'
    size={props.size}
    className={props.className}
    onClick={() => {
      if (window.confirm(props.message)) {
        props.onClick();
      }
    }}
  >
    {props.children}
  </Button>
);

export default ConfirmButton;

ConfirmButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
