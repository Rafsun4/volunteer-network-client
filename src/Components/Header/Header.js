/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/Group 1329.png';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div>
            <nav className="container navbar navbar-expand-lg mb-5 fixed-top">
                <Link className="navbar-brand nav-link" to="/">
                    <img height="60px" src={logo} alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto font-weight-bolder">
                        <li className="nav-item active">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-2 text-dark" to="/donation">Donation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-2 text-dark" to="/events">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-2 text-dark" to="/blogs">Blog</Link>
                        </li>   
                        <li className="nav-item d-flex align-items-center">
                            {
                                loggedInUser.email ?
                                      <Link className="nav-link" to={`/userEvent/${loggedInUser.email}`}>
                                        <button className="btn btn-primary">{loggedInUser.displayName}</button> 
                                      </Link> 
                                    :
                                      <Link className="nav-link" to="/login">
                                        <button className="nav-item btn btn-primary m-2 my-md-0 text-white shadow">
                                            Signin
                                        </button>
                                      </Link>
                            }
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">
                                <button className="btn btn-dark">Admin</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;