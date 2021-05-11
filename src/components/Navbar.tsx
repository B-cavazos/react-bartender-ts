import React from 'react';

const Navbar = () =>{
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Drinksy</a>
                <div className="navbar-nav">
                    <a className="nav-link active" href="#">Home</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar