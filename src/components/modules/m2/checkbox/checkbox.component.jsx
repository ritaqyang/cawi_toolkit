import React from 'react';
import styled from 'styled-components';


//todo: fix scrolling issue - the dots stays when scrolling up 

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #e0e0e0;
  position: relative;
  transition: background-color 0.3s;

  &:checked {
    background-color: #ff4081;
  }

  &:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #fff;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }

  &:checked:after {
    opacity: 1;
  }
`;


const ListItemContainer = styled.li`
  list-style-type: none;
`;

const ListItem = ({item}) => {
    return (
        <div>
            
            <ListItemContainer>
                <Container>
                    <CheckboxInput />
                    {item}
                </Container>
            </ListItemContainer>
            
        </div>
    );

}
export default ListItem;
