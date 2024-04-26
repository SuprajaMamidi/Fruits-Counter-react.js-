// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }
  getManogoesCount = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }
  getBananasCount = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }
  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="count">{mangoesCount}</span> mangoes
            <span className="count">{bananasCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruits">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.getManogoesCount}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.getBananasCount}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
