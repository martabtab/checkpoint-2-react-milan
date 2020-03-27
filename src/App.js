import React, { Component } from "react";
import "./sass/styles.scss";
import MovieCard from "./components/MovieCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFavoritesOnly: false,
      movieList: [
        {
          movie: "Blade Runner",
          genre: "sci-fi",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
          isFavorite: false
        },
        {
          movie: "Gattaca",
          genre: "sci-fi",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887",
          isFavorite: false
        },
        {
          movie: "Akira",
          genre: "anime",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112",
          isFavorite: false
        },
        {
          movie: "Tokyo Godfathers",
          genre: "anime",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
          isFavorite: false
        },
        {
          movie:
            "You're turning me into a criminal when all I want to be is a petty thug.",
          genre: "Bart Simpson",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
          isFavorite: false
        },
        {
          movie: "But my mom says I'm cool.",
          genre: "Milhouse Van Houten",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
          isFavorite: false
        },
        {
          movie:
            'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
          genre: "Homer Simpson",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
          isFavorite: false
        },
        {
          movie: "Nothing you say can upset us. We're the MTV generation.",
          genre: "Bart Simpson",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
          isFavorite: false
        },
        {
          movie: "Oh, so they have Internet on computers now!",
          genre: "Homer Simpson",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
          isFavorite: false
        },
        {
          movie: "Ahh! Sweet liquor eases the pain.",
          genre: "Troy McClure",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112",
          isFavorite: false
        }
      ]
    };
  }

  handleShowFavoritesOnlyClick = () => {
    this.setState({ showFavoritesOnly: !this.state.showFavoritesOnly });
  };

  // changeFavoriteStatus = () => {
  //   this.movie.state isFavorite MovieCard
  // }

  render() {
    return (
      <div>
        <button onClick={this.handleShowFavoritesOnlyClick}>
          Show only Favorites movies:{" "}
          {this.state.showFavoritesOnly ? "ON" : "OFF"}
        </button>
        {this.state.movieList
          .filter(
            movie =>
              !this.state.showFavoritesOnly ||
              // movie.character.includes("Simpson")
              movie.favorite === true
          )
          .map((movie, index) => (
            <MovieCard {...movie} />
          ))}
        <p>
          <MovieCard isFavorite={isFavorite} />
        </p>
      </div>
    );
  }
}

export default App;
