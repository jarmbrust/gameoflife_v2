import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = (onClick) => {

  return (
    <Wrapper>
      <button className="get-selected" type="button" onClick={() => onClick()}>get selected</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #grey;
`;


export default Button;
