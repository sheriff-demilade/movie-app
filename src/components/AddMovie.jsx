import { useState } from "react";

const AddMovie = ({ addNewMovie }) => {
  const emptyMovieInputs = {
    title: "",
    rating: "",
    description: "",
    posterURL: "",
  };

  const [movieInputs, setMovieInputs] = useState(emptyMovieInputs);

  const { title, rating, description, posterURL } = movieInputs;

  const onChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setMovieInputs({ ...movieInputs, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addNewMovie(movieInputs);
  };

  return (
    <form onSubmit={onSubmitHandler} className="pr-5">
      <h2 className="mb-3">Add New Movie</h2>
      <div className="row row-cols-lg-auto g-3 align-items-center">
        <div className="col-12">
          <label className="visually-hidden" htmlFor="title">
            Title
          </label>
          <div className="input-group">
            <input
              onChange={onChangeHandler}
              value={title}
              name="title"
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Title"
            />
          </div>
        </div>
        <div className="col-12">
          <label className="visually-hidden" htmlFor="rating">
            Rating
          </label>
          <div className="input-group">
            <input
              onChange={onChangeHandler}
              value={rating}
              name="rating"
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Rating"
            />
          </div>
        </div>
      </div>

      <div className="row row-cols-lg-auto g-3 align-items-center">
        <div className="col-12">
          <label className="visually-hidden" htmlFor="description">
            Description
          </label>
          <div className="input-group">
            <textarea
              rows="4"
              onChange={onChangeHandler}
              value={description}
              name="description"
              type="text"
              className="form-control"
              id="description"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <div className="col-12">
          <label
            className="visually-hidden"
            htmlFor="inlineFormInputGroupUsername"
          >
            Poster URL
          </label>
          <div className="input-group">
            <input
              onChange={onChangeHandler}
              value={posterURL}
              name="posterURL"
              type="text"
              className="form-control w-full"
              id="inlineFormInputGroupUsername"
              placeholder="posterURL"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Movie
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddMovie;
