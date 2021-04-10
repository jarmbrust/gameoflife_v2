import React, { useState } from 'react';
import styled from 'styled-components'


const Cell = props => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <CellBody className={props.id} isActive={isActive} onClick={() => setActive(true)}></CellBody>
    </>
  );

};

Cell.propTypes = {
  id: String,
};


const CellBody = styled.div`
  border: 1px solid;
  height: 20px;
  width: 20px;
  background-color: ${props => props.isActive ? 'black' : 'white'};
`;

export default Cell;
