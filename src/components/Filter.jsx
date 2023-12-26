import { useState } from "react";

const Filter = ({ filterMovies }) => {
  const emptyInputs = {
    title: "",
    rating: "",
  };

  const [filterInputs, setFilterInputs] = useState(emptyInputs);

  const { title, rating } = filterInputs;

  const onChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFilterInputs({ ...filterInputs, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    filterMovies(title, rating);
  };

  return (
    <div className="">
      <h2 className="mb-3">Filter Movies</h2>

      <form
        onSubmit={onSubmitHandler}
        className="row row-cols-lg-auto g-3 align-items-center"
      >
        <div className="col-12">
          <label
            className="visually-hidden"
            htmlFor="inlineFormInputGroupUsername"
          >
            Username
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
          <label
            className="visually-hidden"
            htmlFor="inlineFormInputGroupUsername"
          >
            Username
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

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
