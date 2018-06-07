import styled from "styled-components";
import colors from "../design/colors.json";

const Button = styled.button.attrs({
  type: "button"
})`
  border: 4px solid ${colors.lime[6]};
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${colors.lime[6]};
  }
`;

export default Button;
