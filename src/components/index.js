import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    this.setState(prev => {
      if (prev.speed === 200) return 0
      return {speed: prev.speed + 10}
    })
  }

  decreaseSpeed = () => {
    this.setState(prev => {
      if (prev.speed === 0) return 0
      return {speed: prev.speed - 10}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <>
        <div className="container">
          <h1>SPEEDOMETER</h1>
          <div className="btn-container">
            <h1>speed is {speed}mph</h1>
            <p>Min limit is 0mph, Max limit is 200mph </p>
            <div className="btns">
              <button
                className="accelerate"
                type="button"
                onClick={this.increaseSpeed}
              >
                Accelerate
              </button>
              <button
                className="brake"
                type="button"
                onClick={this.decreaseSpeed}
              >
                Apply Brake
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Speedometer
