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
        rating: '9'
        },
        {
        id: uuid.v4(),
        title: 'The Shawshank Redemption',
        genres: 'Drama',
        rating: '9'
        },
        {
        id: uuid.v4(),
        title: 'Fight Club',
        genres: 'Drama',
        rating: "8"
        },
        {
        id: uuid.v4(),
        title: 'The Intouchables',
        genres: 'Comedy',
        rating: "9"
        },
        {
        id: uuid.v4(),
        title: 'The Room',
        genres: 'Drama',
        rating: "1"
        }
    ]});
  }

  handleAddFilm(film) {
    let films = this.state.films;
    films.push(film);
    this.setState({films: films});
  }

  handelDelateFilm(id) {
    let films = this.state.films;
    let index = films.findIndex(x => x.id === id);
    films.splice(index, 1);
    this.setState({films: films});
  }

  render() {
    return (
      <div className="app">
          <AddFilm addFilm={this.handleAddFilm.bind(this)}/>
          <Films films={this.state.films} onDelete={this.handelDelateFilm.bind(this)}/>
      </div>
    );
  }
}

export default App;
