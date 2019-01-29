import styled from 'styled-components';

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

Grid.Item = Item;

export default Grid;
