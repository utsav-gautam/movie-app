import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Banner from './Components/Banner'
import MovieList from './Components/MovieList'
import Favourites from './Components/Favourites'
export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <MovieList />
      </>
    )
  }
}

export default App