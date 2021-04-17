import React, { useState } from 'react';
import styled from 'styled-components'
import Cell from './Cell';

const CellGrid = () => {

  // const [gridBoxes, setGridBoxes] = useState(Array(900).fill(null));
  // const [active, setActive] = useState(false);

  const createCell = cells => {
    let gridArray = [];
    for (let i = 0; i < cells * cells; i++) {
      gridArray.push(<Cell key={i} className={`sq${i}`} id={`sq${i}`} isActive={getIsActive}></Cell>)
    }
    console.log(gridArray);
    return gridArray;
  }

  const getIsActive = (test) => {
    console.log('test', test)
    return !test;
  }

  return (
    <>
      <Wrapper>
        hi
        <GridWrapper>
          <Grid cellNum={30}>
            {createCell(30)}
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
  max-width: 627px;
  margin: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props=> props.cellNum}, 1fr); 
  grid-template-rows: repeat(${props=> props.cellNum}, 1fr);
  grid-gap: 0;
`;

export default CellGrid;
