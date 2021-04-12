import React, { useState } from 'react';
import styled from 'styled-components'


const Cell = props => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <CellBody className={props.id} isActive={isActive} onClick={() => setIsActive(!isActive)}></CellBody>
    </>
  );

};

Cell.propTypes = {
  id: Number,
};


const CellBody = styled.div`
  border: 1px solid;
  height: 20px;
  width: 20px;
  background-color: ${props => props.isActive ? 'grey' : 'white'};
`;

export default Cell;
