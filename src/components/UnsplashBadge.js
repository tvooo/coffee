import React from 'react';
import PropTypes from 'prop-types';

const linkStyle = {
  backgroundColor: 'black',
  color: 'white',
  textDecoration: 'none',
  padding: '4px 6px',
  fontFamily: `-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif`,
  fontSize: '12px',
  fontWeight: 'bold',
  lineHeight: 1.2,
  display: 'inline-block',
  borderRadius: '3px',
  // font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px'
};

const spanStyle = { display: 'inline-block', padding: '2px 3px' };

const svgStyle = {
  height: '12px',
  width: 'auto',
  position: 'relative',
  verticalAlign: 'middle',
  top: '-2px',
  fill: 'white',
};

const Badge = ({ handle, name }) => (
  <a
    style={linkStyle}
    href={`https://unsplash.com/@${handle.replace(
      '@',
      ''
    )}?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge`}
    target="_blank"
    rel="noopener noreferrer"
    title={`Download free do whatever you want high-resolution photos from ${name}`}
  >
    <span style={spanStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={svgStyle}
        viewBox="0 0 32 32"
      >
        <title>unsplash-logo</title>
        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
      </svg>
    </span>
    <span style={spanStyle}>{name}</span>
  </a>
);

Badge.propTypes = {
  handle: PropTypes.string,
  name: PropTypes.string,
};

export default Badge;
