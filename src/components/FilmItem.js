import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilmItem extends Component {
	deleteFilm(id){
		this.props.onDelete(id);
	}
	render() {
	    return (
	      <div className="film">
	        <div className='title'>{this.props.film.title}</div>
	        <div className='genre'>Genre: {this.props.film.genres}</div>
	        <div className='rate'>Rating: {this.props.film.rating}</div>
	        <div className='poster'><img src={this.props.film.poster} alt='POSTE' /></div>
	        <a href="#" onClick={this.deleteFilm.bind(this, this.props.film.id)}>Remove movie</a>
	      </div>
	    );
	}
}

FilmItem.propTypes = {
    onDelate: PropTypes.func,
    film: PropTypes.object
}

export default FilmItem;