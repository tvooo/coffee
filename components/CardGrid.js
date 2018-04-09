import styled from "styled-components";
import Paper from "./Paper";

const CardGrid = styled.div`
  display: flex;
  margin: 2rem 0;
  align-items: stretch;
  flex-wrap: wrap;
`;

const Card = styled(Paper)`
  flex-basis: 200px;
  background: white;
  margin: 1rem;
  cursor: pointer;
  padding: 2em;
  box-sizing: border-box;
  text-align: center;

  &:hover {
    box-shadow: 0 0 10px 10px rgba(128, 128, 128, 0.1);
  }
`;

CardGrid.Card = Card;

export default CardGrid;
