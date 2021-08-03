import React from 'react'
import {  Link } from 'react-router-dom'

const Navbar = (props) => {
    if (props.loggedIn){
        return (
            <div>
                <h1>Hello {props.user.username}</h1>
                <button className="logout-button" onClick={props.logoutUser}>Logout</button>
                <br/>
                <Link to="/listings/all">
                    <button className="submit-button">All listings</button>
                </Link>
                <br />
                <Link to="/listings">
                    <button className="submit-button">Your listings</button>
                </Link>
                <hr/>
            </div>
        )
    } else{
        return (
            <div>
                <br/>
                <Link to="/signup">
                    <button className="submit-button">Signup</button>
                </Link>
                <br/>
                <Link to="/login">
                    <button className="submit-button">Login</button>
                </Link>
            </div>
        )
    }
}

export default Navbar;