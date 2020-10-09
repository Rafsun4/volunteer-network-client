import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/logos/7.png';

const NoMatch = () => {
    const mystyle = {
        height: "500px",
    };
    return (
        <div className="container row align-items-center">
            <div>
                <img style={mystyle} className="img-fluid d-block align-items-center" src={notFound} alt="404" />
            </div>
            <div>
                <Link to="/">
                    <button className="btn btn-primary">Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NoMatch;