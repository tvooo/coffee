import styled from "styled-components";
import colors from "../design/colors.json";
import fonts from "../design/fonts.json";

const Button = styled.button.attrs({
  type: "button"
})`
  font-family: ${fonts.default};
  border: 2px solid ${colors.black};
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${colors.black};
    color: white;
  }
`;

export default Button;
