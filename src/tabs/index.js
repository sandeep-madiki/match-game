import './index.css'

const TabItems = props => {
  const {details, displayFunc, isActive} = props
  const {tabId, displayText} = details

  const activeCSS = isActive ? 'active' : ''

  const callFunc = () => {
    displayFunc(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tabs-btn ${activeCSS}`}
        onClick={callFunc}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
