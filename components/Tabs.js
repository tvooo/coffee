import styled from "styled-components";
import colors from "../design/colors.json";

const defaultBg = colors.gray[2];
const activeBg = colors.gray[0];

const Tabs = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const TabsItem = styled.div`
  background: ${p => (p.active ? activeBg : defaultBg)};
  border-top: 5px solid transparent;
  padding: calc(1.5em - 5px) 2em 1.5em 2em;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background: ${p => (p.active ? activeBg : colors.gray[1])};
  }
`;

Tabs.Item = TabsItem;

export default Tabs;
