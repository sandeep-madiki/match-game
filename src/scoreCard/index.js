import './index.css'

const ScoreCard = props => {
  const {score, resetGame} = props

  const callReset = () => {
    resetGame()
  }

  return (
    <div className="score-bg-img">
      <img
        className="trophy-img"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="your-score-txt">Your Score</p>
      <p className="score-num-count">{score}</p>
      <button type="button" className="play-again-btn" onClick={callReset}>
        <img
          className="reset-icon"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p>Play Again</p>
      </button>
    </div>
  )
}

export default ScoreCard
