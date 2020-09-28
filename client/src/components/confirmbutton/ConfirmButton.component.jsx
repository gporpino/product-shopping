import React from 'react';

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
