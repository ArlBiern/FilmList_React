import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilmItem extends Component {
	deleteFilm(id){
		this.props.onDelete(id);
	}
	render() {
	    return (
	      <li className="film">
	        <strong>{this.props.film.title}</strong>: {this.props.film.category} <a href="#" onClick={this.deleteFilm.bind(this, this.props.film.id)}>X</a>
	      </li>
	    );
	}
}

FilmItem.propTypes = {
    onDelate: PropTypes.func,
    film: PropTypes.object
}

export default FilmItem;