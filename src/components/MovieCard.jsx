const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p>
          <span className="fw-semibold">Rating: </span>
          {rating}
        </p>
        <a href={posterURL} className="btn btn-primary">
          Poster URL
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
