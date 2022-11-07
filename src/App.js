import {Component} from 'react'

import './App.css'

import Header from './components/Header'
import PlayingView from './components/PlayingView'
import GameResult from './components/GamingResult'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    isClick: true,

    indexVal: '',

    btnValue: '',
  }

  handleChange = (index, eventVal) => {
    const {isClick} = this.state
    this.setState({isClick: !isClick, indexVal: index, btnValue: eventVal})
  }

  back = () => {
    const {isClick} = this.state
    this.setState({isClick: !isClick})
  }

  render() {
    const {isClick, indexVal, btnValue} = this.state

    return (
      <div className="appContainer">
        <Header />
        {isClick ? (
          <PlayingView
            choicesList={choicesList}
            handleChange={this.handleChange}
          />
        ) : (
          <GameResult
            choicesList={choicesList}
            index={indexVal}
            back={this.back}
            btnValue={btnValue}
            increaseScore={this.increaseScore}
            decreaseScore={this.decreaseScore}
          />
        )}
      </div>
    )
  }
}

export default App
