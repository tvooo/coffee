import React from 'react';
import styled from 'styled-components';
import Paper from './Paper';

const Grid = styled.div`
  display: flex;
  margin: 2rem 0;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div`
  flex-basis: 300px;
  min-width: 0;
  flex-grow: 0;
  flex-shrink: 1;
  margin: 1rem;
`;

//
// const Card = styled(Paper)`
//   border-radius: 0.2rem;
//   overflow: hidden;
//   flex-basis: 300px;
//   min-width: 0;
//   flex-grow: 0;
//   flex-shrink: 1;
//   height: 100%;
//   background: white;
//   ${'' /* margin: 1.5rem; */} cursor: pointer;
//
//   box-sizing: border-box;
//
//   &:hover {
//     box-shadow: 0 0 10px 10px rgba(128, 128, 128, 0.1);
//   }
// `
//
// const CardImageContainer = styled.div`
//   height: 10rem;
// `
//
// const CardImageImg = styled.img`
//   object-fit: cover;
//   ${'' /* display: block; */} width: 100%;
//   height: 100%;
//   width: 100%;
// `
//
// const CardImage = props => (
//   <CardImageContainer>
//     <CardImageImg {...props} />
//   </CardImageContainer>
// )
//
// const CardBody = styled.div`
//   padding: 2em;
// `
//
// Card.Body = CardBody
// Card.Image = CardImage
//
// CardGrid.Card = Card

Grid.Item = Item;

export default Grid;
