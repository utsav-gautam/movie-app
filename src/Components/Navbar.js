import React, { Component } from 'react'
import './Navbar.css'
export class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='Navbar-container'>
                    <div className='Navbar-logo'>
                        <i class="fa-solid fa-tv"></i>
                    </div>
                    <h2 className='Navbar-child'>
                        MOVIE BUFFS
                    </h2>
                </div>
            </div>
        )
    }
}

export default Navbar