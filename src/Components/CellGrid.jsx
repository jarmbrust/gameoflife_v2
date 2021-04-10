import React, { useState } from 'react';
import styled from 'styled-components'

const CellGrid = () => {

  const [gridBoxes, setGridBoxes] = useState('');

  const createCell = cells => {
    let gridArray = [];
    for (let i = 0; i < cells * cells; i++) {
      gridArray.push(<Cell key={i} className="square"></Cell>)
    }
    return gridArray;
  }

  return (
    <>
      <Wrapper>
        hi
        <GridWrapper>
          <Grid cellNum={4}>
            {createCell(4)}
          </Grid>
        </GridWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100%;
  background-color: #ccc;
`;

const GridWrapper = styled.div`
  max-width: 86px;
  margin: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props=> props.cellNum}, 1fr); 
  grid-template-rows: repeat(${props=> props.cellNum}, 1fr);
  background-color: white;
  grid-gap: 0;
`;

const Cell = styled.div`
  border: 1px solid;
  height: 20px;
  width: 20px;
`;


export default CellGrid;
