import React, { Component } from 'react'
import Card from './Card';
import './MovieList.css';
import axios from 'axios'

export default class MovieList extends Component {

    constructor() {
        super();
        this.state = {
            movieArray: [],
            page: 1
        }
    }

    async componentDidMount() {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eec67a52b1e4510e6e3ea5f847ee8b3f&language=en-US&page=${this.state.page}`)
        const movies = res.data.results;
        this.setState({ movieArray: [...movies] })
    }

    async changeMovies() {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eec67a52b1e4510e6e3ea5f847ee8b3f&language=en-US&page=${this.state.page}`)
        const movies = res.data.results;
        this.setState({ movieArray: [...movies] })
    }
    nextPage = (id) => {
        this.handleScroll(id);
        let val = this.state.page;
        setTimeout(() => { this.setState({ page: val + 1 }, this.changeMovies) }, 700);
    }

    prevPage = (id) => {
        this.handleScroll(id);
        let val = this.state.page;
        if (val > 1) {
            setTimeout(() => { this.setState({ page: val - 1 }, this.changeMovies) }, 700);

        }
    }

    handleScroll = (id) => {
        const item = document.getElementById(id);
        item.scrollIntoView();
    }
    render() {
        const movieArr = this.state.movieArray;
        return (
            <div className='movieList'>
                <span id='top'></span>
                <h1 className='movieListHeader'> Trending</h1>
                <div className='movieContainer'>{
                    movieArr.map((movieElement) => (<Card title={movieElement.title} link={movieElement.backdrop_path} id={movieElement.id} />))}
                </div>
                <div className='page-label-container'>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item" onClick={() => { this.prevPage('top') }}><a className="page-link"  >Prev</a></li>
                            <li className="page-item"><a className="page-link" >1</a></li>
                            <li className="page-item"><a className="page-link" >2</a></li>
                            <li className="page-item"><a className="page-link" >3</a></li>
                            <li className="page-item" onClick={() => { this.nextPage('top') }}><a className="page-link" >Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
