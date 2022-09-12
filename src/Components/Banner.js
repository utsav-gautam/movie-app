import React, { Component } from 'react'
import './Banner.css'

export class Banner extends Component {
    render() {
        return (
            <div className='banner-container'>
                <img src='https://image.tmdb.org/t/p/original/pUc51UUQb1lMLVVkDCaZVsCo37U.jpg' alt='img.jpg' />
                <div className='banner-info'>
                    <h3>Don't Breathe 2</h3>
                    <p>The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire...</p>
                </div>
            </div>
        )
    }
}

export default Banner