import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddFilm extends Component {
    constructor() {
        super();
        this.state = {
            newFilm: {}
        }
    }

    static defaultProps = {
        genres: ['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Horror', 'Musical', 'Sci-fi', 'Thriller', 'War', 'Western'],
        rating: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }

    handleSubmit(e) {
        if (this.refs.title.value === "") {
            alert('Title is required');
        } else {
            this.setState({newFilm: {
                id: uuid.v4(),
                title:this.refs.title.value,
                genres: this.refs.genre.value,
                rating: this.refs.rate.value,
                poster: this.refs.poster.value
            }},
            function() {
                this.props.addFilm(this.state.newFilm);
                this.refs.title.value = "";
                this.refs.poster.value = "";
            }
            );
        }
        e.preventDefault();
    }


    render() {
        let genresOptions = this.props.genres.map(genre => {
            return <option key={genre} value={genre}>{genre}</option>
        })
        let ratings = this.props.rating.map(rate => {
            return <option key={rate} value={rate}>{rate}</option>
        })
        
        return (
          <div className="add-section">
            <h2>Add Film</h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="wide">
                    <label>Title</label>
                    <input type="text" ref="title"/>
                </div>
                <div className="wide">
                    <label>Genre</label>
                    <select ref="genre">
                        {genresOptions}
                    </select>
                </div>
                <div className="wide">
                    <label>Poster</label>
                    <input type="text" ref="poster" />
                </div>
                <div className="wide">
                    <label>Rating</label>
                    <select ref="rate">
                        {ratings}
                    </select>
                </div>
                <input type="submit" value="Add your film!" />
            </form>        
          </div>
        );
    }
}

AddFilm.propTypes = {
    addFilm: PropTypes.func,
    genres: PropTypes.array,
    rating: PropTypes.array
}

export default AddFilm;