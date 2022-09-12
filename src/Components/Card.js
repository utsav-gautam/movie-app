import React, { Component, lazy } from 'react'
import './Card.css';
export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            hover: 0
        }
    }
    render() {
        return (
            <figure className='card' onMouseEnter={() => this.setState({ hover: this.props.id })} onMouseLeave={() => this.setState({ hover: 0 })}>
                <img src={`https://image.tmdb.org/t/p/w500${this.props.link}`} alt="image.jpg" width="500" loading="lazy" decoding="async" />
                <figcaption className='card-title'>{this.props.title}</figcaption>
                {this.state.hover === this.props.id && <a className='btn btn-secondary card-button'>Add To Faviourite</a>}
            </figure>
        )
    }
}
