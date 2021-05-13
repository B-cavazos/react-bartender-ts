import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand px-2">Drinksy</a>
                <div className="navbar-nav">
                    <Link to={'/'}><a className="nav-link active">Home</a></Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar