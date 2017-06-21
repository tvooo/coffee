import withPlayerState from './PlayerContainer.js';

const Step = ({
  step,
  current,
}) => (
  <li className={`Step ${current ? 'Step--current' : ''}`}>
    { step.type }
    <style jsx>{`
      .Step {

      }

      .Step--current {
        font-weight: bold;
      }
    `}</style>
  </li>
)

const Player = ({
  time,
  weight,
  recipe,
  step,
  Image,
  ...rest,
}) => (
  <div className="Player">
    <div className="Player__status">
      <div className="Player__status-time">{ time }</div>
      <div className="Player__status-time">{ weight }g</div>
    </div>
    <div className="Player__viewer">
      <Image />
      <ol className="Player__steps">
        { recipe &&
          recipe.instructions.map((i, index) => <Step step={i} current={index === step} />)
        }
      </ol>
    </div>
    <style jsx>{`
      .Player {
        padding: 2rem 4rem;
        align-self: stretch;
        flex-grow: 1;
      }
      .Player__status {
        margin-bottom: 2rem;
        font-size: 4rem;
        display: flex;
        justify-content: space-between;
      }

      .Player__steps {
        font-size: 2rem;
      }

      .Player__viewer {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }

      ol {
        margin-left: 2rem;
        font-size: 2rem;
      }
    `}</style>
  </div>
);

export default withPlayerState(Player);
