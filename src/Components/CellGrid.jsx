import React, { useState } from 'react';
import styled from 'styled-components'
import Cell from './Cell';
import Button from './Button';

const CellGrid = () => {

const [allActive, setAllActive] = useState([]);

  const createCell = cells => {
    let gridArray = [];
    for (let i = 0; i < cells * cells; i++) {
      gridArray.push(<Cell key={i} className={`sq${i}`} id={`sq${i}`} isActive={e => getIsActive(e, i)}></Cell>)
    }
    console.log(gridArray);
    console.log('allActive', allActive)
    return gridArray;
  };

  const getIsActive = (active, cellNum) => {
    if (!active) {
      addToCellArray(cellNum);
    } else {
      removeFromCellArray(cellNum);
    }
    return !active;
  };

  const addToCellArray = cellNum => {
    setAllActive(oldGrid => [...oldGrid, cellNum]);
    
  }

  const removeFromCellArray = cellNum => {
    setAllActive(prevCells => (
      prevCells.filter((value) => value !== cellNum)
    ));
  }

  const getAllActive = test => {
    console.log('allActive', allActive, test)
  };

  return (
    <>
      <Wrapper>
        hi
        <GridWrapper>
          <Grid cellNum={30}>
            {createCell(30)}
          </Grid>
        </GridWrapper>
        <Button onClick={getAllActive}></Button>
      </Wrapper>
    </>
  );
};

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
