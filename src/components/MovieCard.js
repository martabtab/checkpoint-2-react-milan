import React from "react";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: this.props.movie.isFavorite
    };
  }
  render() {
    const { title, image, genre, isFavorite } = this.props.movie;

    return (
      <div className="Movie">
        <img className="image" src={image} alt="" />
        <div>
          <h4 className="title">{title}</h4>
          <h2 className="genre">{genre}</h2>
          <span
            className="status"
            onClick={event => {
              // const goesOnline = !this.state.online;
              this.setState({ isFavorite: !this.state.isFavorite });
            }}
          >
            {this.state.isFavorite ? "Liked" : "like"}
          </span>
        </div>
      </div>
    );
  }
}

export default MovieCard;
