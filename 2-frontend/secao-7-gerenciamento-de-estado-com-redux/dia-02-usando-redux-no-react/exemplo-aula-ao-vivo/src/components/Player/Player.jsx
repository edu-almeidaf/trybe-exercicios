import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Player.css';

class Player extends Component {
  render() {
    const { movie = {}, category = {} } = this.props; 

    return (
      <div className="player">
        {
          movie && (
            <>
              <div className="video-container">
                <iframe
                  src={ `https://www.youtube.com/embed/${movie.embedId}` }
                  title='Youtube video player'
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="movie-details">
                <div className="movie-infos">
                  <h2>{ movie.title }</h2>
                  <p>{ `Released in ${movie.released}` }</p>
                  <p className="category">{ category.name }</p>
                </div>
              </div>
            </>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie.selectedMovie,
  category: state.movie.selectedCategory,
});

export default connect(mapStateToProps)(Player);