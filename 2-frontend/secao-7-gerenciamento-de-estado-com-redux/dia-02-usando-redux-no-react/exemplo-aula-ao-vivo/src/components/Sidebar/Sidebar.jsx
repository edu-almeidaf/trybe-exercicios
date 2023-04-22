import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../../redux/actions';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const { categories, dispatch } = this.props;
    console.log(this.props);

    return (
      <aside className="sidebar">
        {
          categories.map((category) => (
            <div
              className="category-list"
              key={category.id}
            >
              <h3>{ category.name }</h3>
              <ul>
                {
                  category.movies.map((movie) => (
                    <li key={ movie.id }>
                      <button
                        onClick={ () => dispatch(selectMovie(movie, category)) }
                      >
                        { `${movie.title} (${movie.released})` }
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.movie.categories,
})

export default connect(mapStateToProps)(Sidebar);