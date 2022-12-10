import './index.css'

const ThumbnailItems = props => {
  const {details, getThumbnailId} = props
  const {id, thumbnailUrl} = details

  const callFunc = () => {
    getThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-btn">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-img"
          onClick={callFunc}
        />
      </button>
    </li>
  )
}

export default ThumbnailItems
