import styled from 'styled-components';
import colors from '../design/colors.json';

const defaultBg = colors.gray[2];
const activeBg = colors.gray[0];

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const MenuListItem = styled.div`
  background: ${p => (p.active ? activeBg : defaultBg)};
  border-left: 5px solid transparent;
  border-color: ${p => (p.color ? p.color : 'transparent')};

  padding: 1.5em 2em;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: ${p => (p.active ? activeBg : colors.gray[1])};
  }
`;

MenuList.Item = MenuListItem;

export default MenuList;
