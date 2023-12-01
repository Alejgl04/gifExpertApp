
export const GifItem = ({ title, url }) => {

  return (
    <div className="col-md-3">

    <div className="card">
      <img src={url} className="card-img-top custom__height" alt={title}/>
      <div className="card-body">
      <h6 className="card-title">{title}</h6>
      </div>
    </div>
    </div>
  )
}
