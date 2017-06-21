import typography from '../design/type.json';
import colors from '../design/colors.json';

export default ({ children }) => (
  <h1>
    { children }
    <style jsx>{`
      h1 {
        font-weight: normal;
        font-size: ${typography.sizes[2]};
      }

      h1::after {
        display: block;
        border-bottom: 4px ${colors.lime[4]} solid;
        width: 2em;
        content: "";
      }
    `}</style>
  </h1>
)
