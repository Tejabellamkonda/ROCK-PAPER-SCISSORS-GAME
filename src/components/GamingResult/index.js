import Popup from 'reactjs-popup'

import './index.css'

const GamingResult = props => {
  const {choicesList, index, back, btnValue} = props
  const onClickPlayAgain = () => {
    back()
  }

  const user = parseInt(btnValue)
  const yourChoice = choicesList[user]
  const random = choicesList[index]

  let myVal

  if (index === user) {
    myVal = 'IT IS DRAW'
  } else if (
    (user === 0 && index === 1) ||
    (user === 1 && index === 2) ||
    (user === 2 && index === 0)
  ) {
    myVal = 'YOU WON'
  } else myVal = 'YOU LOSE'

  /* if (myVal === 'YOU WON') {
    console.log(1)
  } else if (myVal === 'YOU LOSE') {
    console.log(2)
  } */

  return (
    <>
      <div className="bgCont">
        <div className="btnContainer imgContainer">
          <div className="result-container">
            <h1>YOU</h1>
            <img
              src={yourChoice.imageUrl}
              className="image"
              alt="your choice"
            />
          </div>
          <div className="result-container">
            <h1>OPPONENT</h1>
            <img
              src={random.imageUrl}
              className="image"
              alt="opponent choice"
            />
          </div>
        </div>
        <div>
          <h1 className="won-loss">{myVal}</h1>
          <button
            type="button"
            className="playAgain"
            onClick={onClickPlayAgain}
          >
            PLAY AGAIN
          </button>
        </div>

        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="rulesButton">
                Rules
              </button>
            }
          >
            {close => (
              <>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="popUpImage"
                  />
                </div>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  Close
                </button>
              </>
            )}
          </Popup>
        </div>
      </div>
    </>
  )
}

export default GamingResult
