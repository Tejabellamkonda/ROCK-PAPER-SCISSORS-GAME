import './index.css'

const Header = props => {
  const {score} = props

  return (
    <>
      <div className="headerContainer">
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
      </div>
    </>
  )
}

export default Header
