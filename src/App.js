import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import Films from './components/Films';
import AddFilm from './components/AddFilm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    }
  }

  componentWillMount(){
    this.setState({films:[
       {
        id: uuid.v4(),
        title: 'Saving Private Ryan',
        genres: 'War',
        rating: '9',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,679,1000_AL_.jpg'
        },
        {
        id: uuid.v4(),
        title: 'The Shawshank Redemption',
        genres: 'Drama',
        rating: '9',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
        },
        {
        id: uuid.v4(),
        title: 'The Intouchables',
        genres: 'Comedy',
        rating: "9",
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        },
        {
        id: uuid.v4(),
        title: 'The Room',
        genres: 'Drama',
        rating: "1",
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4MTU1MzgwOV5BMl5BanBnXkFtZTcwNjM1MTAwMQ@@._V1_.jpg'
        }
    ]});
  }

  handleAddFilm(film) {
    let films = this.state.films;
    films.push(film);
    this.setState({films: films});
  }

  handelDeleteFilm(id) {
    let films = this.state.films;
    let index = films.findIndex(x => x.id === id);
    films.splice(index, 1);
    this.setState({films: films});
  }

  render() {
    return (
      <div className="app">
          <h1>Film rating section</h1>
          <AddFilm addFilm={this.handleAddFilm.bind(this)}/>
          <Films films={this.state.films} onDelete={this.handelDeleteFilm.bind(this)}/>
      </div>
    );
  }
}

export default App;
