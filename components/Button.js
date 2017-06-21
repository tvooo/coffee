import colors from '../design/colors.json';

const Button = ({
  children,
  ...rest
}) => (
  <button type="button" className="Button" {...rest}>
    <style jsx>{`
      .Button {
        background: ${colors.lime[4]};
        font-size: 2rem;
        color: black;
        border-bottom: 4px solid ${colors.lime[6]};
        border-width: 0 0 4px 0;
        border: none;
        border-radius: 4px;

        margin-bottom: 2rem;
        cursor: pointer;
        padding: .4em 2em;
        box-sizing: border-box;
        font-weight: bold;
        transform: translateZ(0);
        transition: box-shadow 100ms, transform 100ms;
        appearance: none;
        box-shadow: 0 4px 0 0 ${colors.lime[6]};
      }

      .Button:hover {
        box-shadow: 0 0 10px 10px rgba(128, 128, 128, 0.1);
        transform: translateY(-2px) translateZ(0);
        box-shadow: 0 6px 0 0 ${colors.lime[6]};
      }

      .Button:active {
        transform: translateY(4px) translateZ(0);
        box-shadow: 0 0 0 0 ${colors.lime[6]};
      }
    `}</style>
    { children }
  </button>
);

export default Button;
