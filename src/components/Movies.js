import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
  const { movies } = props;
  return (
    <div>
      <main className="container">
        <section className="movies" id="movies">
          <h2>Featured Movies</h2>
          <div className="row">
            {movies.map((movie, i) => (
              <Movie key={i} movie={movie} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export default Movies;
