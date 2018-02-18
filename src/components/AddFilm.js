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
                rating: this.refs.rate.value
            }},
            function() {
                this.props.addFilm(this.state.newFilm);
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
          <div>
            <h3>Add Project</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title</label><br />
                    <input type="text" ref="title" />
                </div>
                <div>
                    <label>Category</label><br />
                    <select ref="genre">
                        {genresOptions}
                    </select>
                    <select ref="rate">
                        {ratings}
                    </select>
                </div>
                <br />
                <input type="submit" value="Submit" />
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