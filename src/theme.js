import colors from './design/colors.json'

export default {
  colors: {
    ...colors,
    primary: colors.cyan[7],
    text: colors.black,
  },
  fonts: {
    sans:
      "sweden_sansregular, -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Arial', sans-serif",
    'sans-serif':
      "sweden_sansregular, -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Arial', sans-serif",
    serif:
      "sweden_sansregular, Constantia, 'Lucida Bright', Lucidabright, 'Lucida Serif', Lucida, 'DejaVu Serif', 'Bitstream Vera Serif', 'Liberation Serif', Georgia, serif;",
  },
}
