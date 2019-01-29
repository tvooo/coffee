import styled from 'styled-components';
import React from 'react';
import T from 'prop-types';

import colors from '../design/colors.json';
import fonts from '../design/fonts.json';

const buttonColors = [
  colors.black,
  colors.cyan[7],
  colors.blue[6],
  colors.indigo[6],
  colors.violet[6],
  colors.fuchsia[6],
];

const InlineList = styled.ul`
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  li {
    display: inline-block;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
  }
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  font-size: 1rem;
  font-family: ${fonts.default};
  border: 0.2em solid ${props => props.color};
  color: ${props => props.color};
  font-weight: 700;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background: transparent;

  &:hover {
    background: ${props => props.color};
    color: white;
  }

  &[aria-pressed='true'] {
    background: ${props => props.color};
    color: white;
  }
`;

const ToggleButton = ({ pressed, children, label, ...rest }) => (
  <Button aria-pressed={pressed} aria-label={label(children)} {...rest}>
    {children}
  </Button>
);

ToggleButton.propTypes = {
  children: T.node,
  pressed: T.bool,
  label: T.func,
};

const Filter = ({ options, selected, select, title, label, color = true }) => (
  <div>
    {title && title}
    <InlineList>
      {Object.keys(options).map((option, i) => (
        <li key={option}>
          <ToggleButton
            color={color ? buttonColors[i] : colors.black}
            pressed={selected === option}
            onClick={() => select(option)}
            label={label}
          >
            {options[option]}
          </ToggleButton>
        </li>
      ))}
    </InlineList>
  </div>
);

Filter.propTypes = {
  options: T.arrayOf(T.string),
  selected: T.string,
  select: T.func,
  title: T.string,
  label: T.string,
  color: T.bool,
};

export default Filter;
