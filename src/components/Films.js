import React, { Component } from 'react';
import FilmItem from "./FilmItem";
import PropTypes from 'prop-types';

class Films extends Component {
	deleteFilm(id) {
		this.props.onDelete(id);
	}
	render() {
		let filmItems;
		if (this.props.films) {
			filmItems = this.props.films.map(film => {
			return(
				<FilmItem onDelete={this.deleteFilm.bind(this)} key={film.id} film={film} />
			)
		});
		}
	    return (
	      <div className="films">
	      	<h3>Your films</h3>
	        {filmItems}	        
	      </div>
	    );
	}
}

Films.propTypes = {
	films: PropTypes.array,
	onDelete: PropTypes.func
}

export default Films;