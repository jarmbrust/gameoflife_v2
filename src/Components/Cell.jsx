import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cell = ({ id, isActive }) => {
  const [active, setActive] = useState(false);

  const toggleCell = () => {
    setActive(!active)
    return active;
  }

  return (
    <>
      <CellBody 
        className={id}
        active={active}
        onClick={() => isActive(toggleCell())}
      ></CellBody>
    </>
  );
};

Cell.propTypes = {
  id: PropTypes.string,
  isActive: PropTypes.func,
  active: PropTypes.bool,
};


const CellBody = styled.div`
  border: 1px solid;
  height: 20px;
  width: 20px;
  background-color: ${props => props.active ? 'grey' : 'white'};
`;

export default Cell;
