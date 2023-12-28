const MovieCard = ({ title, description, posterURL, rating, trailerLink }) => {
  return (
    <a
      href={trailerLink}
      target="_blank"
      className="card m-2 block text-decoration-none"
      style={{ width: "18rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p>
          <span className="fw-semibold">Rating: </span>
          {rating}
        </p>
        <a href={description} className="btn btn-primary inline-block m-2">
          Description
        </a>
        <a href={posterURL} className="btn btn-primary">
          Poster URL
        </a>
      </div>
    </a>
  );
};

export default MovieCard;
