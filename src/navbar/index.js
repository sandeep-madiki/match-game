import './index.css'

const Navbar = props => {
  const {score, time, clearTimer} = props

  if (time === 0) {
    clearTimer()
  }

  return (
    <nav className="nav-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo-img"
      />
      <div className="score-time-container">
        <p className="score-txt">
          Score: <span className="score-count">{score}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="time-txt score-count">{time} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
