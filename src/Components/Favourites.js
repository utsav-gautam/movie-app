import React, { Component } from 'react'
import './Favourite.css'
export class Favourites extends Component {
    render() {
        return (
            <div className='main'>
                <div className='row'>
                    <div className='col-3 genre-selector'>
                        <ul class="list-group">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                    <div className='col-9 favourite-table'>
                        <div className='row'>
                            <input type='text' className='input-group-text' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Favourites