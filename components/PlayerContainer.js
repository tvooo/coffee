import { Component } from 'react';

const withPlayerState = (Player) => {
  class PlayerContainer extends Component {
    constructor(props) {
      super(props);

      const timeToNextStep = props.recipe.instructions[0].length;

      this.state = {
        time: 0,
        weight: 0,
        step: 0,
        timeToNextStep,
      };

      this.tick = this.tick.bind(this);
    }

    componentDidMount() {
      setTimeout(this.tick, 1000);
    }

    tick() {
      const { time, timeToNextStep, step } = this.state;
      const instructions = this.props.recipe.instructions;

      const nextState = {};

      if (timeToNextStep <= 1) {
        if (step >= instructions.length - 1) {
          return;
        }

        nextState.step = step + 1;
        nextState.timeToNextStep = instructions[step + 1].length;
      }

      this.setState((state) => ({
        timeToNextStep: state.timeToNextStep - 1,
        time: state.time + 1,
        ...nextState,
      }), () => setTimeout(this.tick, 1000));
    }

    tare() {
      this.setState({ weight: 0 });
    }

    render() {
      const { time, weight, step } = this.state;

      const minutes = Math.floor(time / 60);
      // var divisor_for_seconds = time % 60;
      const seconds = Math.ceil(time % 60);
      return (
        <Player
          time={`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
          weight={weight}
          step={step}
          {...this.props}
        />
      );
    }
  }

  return PlayerContainer;
}

export default withPlayerState;
