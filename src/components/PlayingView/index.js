import Popup from 'reactjs-popup'

import './index.css'

const PlayingView = props => {
  const {choicesList, handleChange} = props
  const Rock = choicesList[0]
  const Scissor = choicesList[1]
  const Paper = choicesList[2]

  const onClickBtn = e => {
    const eventVal = e.currentTarget.value
    const index = Math.floor(Math.random() * 3)

    handleChange(index, eventVal)
  }

  return (
    <>
      <div className="bgContainer">
        <div className="btnContainer">
          <button
            type="button"
            className="button"
            value="0"
            id="Rock"
            onClick={onClickBtn}
            data-testid="rockButton"
          >
            <img src={Rock.imageUrl} className="image" alt={Rock.id} />
          </button>

          <button
            type="button"
            className="button"
            id="SCISSOR"
            value="1"
            onClick={onClickBtn}
            data-testid="scissorsButton"
          >
            <img src={Scissor.imageUrl} className="image" alt={Scissor.id} />
          </button>
        </div>
        <div className="btnContainer">
          <button
            type="button"
            className="button"
            value="2"
            id="PAPER"
            onClick={onClickBtn}
            data-testid="paperButton"
          >
            <img src={Paper.imageUrl} className="image" alt={Paper.id} />
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

export default PlayingView
