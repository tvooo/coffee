import colors from './design/colors.json';

export default {
  colors: {
    ...colors,
    primary: colors.cyan[7],
    text: colors.black,
  },
  fonts: {
    default:
      "-apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Arial', sans-serif",
    heading:
      "sweden_sansregular, Constantia, 'Lucida Bright', Lucidabright, 'Lucida Serif', Lucida, 'DejaVu Serif', 'Bitstream Vera Serif', 'Liberation Serif', Georgia, serif;",
  },
  variants: {
    link: {
      color: colors.black,
      borderColor: colors.cyan[7],
      textDecoration: 'none',
      borderBottom: `0.15em solid ${colors.cyan[7]}`,
      ':hover': {
        borderBottom: `0.15em solid ${colors.black}`,
      },
    },
    blank: {
      textDecoration: 'none',
      color: colors.black,
    },
  },
};
