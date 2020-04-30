import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <article className="card">
          <header className="title-header">
            <h3>{movie.Title}</h3>
          </header>
          <div className="card-block">
            <div className="img-card">
              <img src="//placehold.it/300x250" alt="Movie" className="w-100" />
            </div>
            <p className="tagline card-text text-xs-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <a href="#" className="btn btn-primary btn-block">
              <i className="fa fa-eye"></i> Watch Now
            </a>
          </div>
        </article>
      </div>
    );
  }
}
