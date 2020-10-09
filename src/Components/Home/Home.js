import React, { useEffect } from 'react';
import { useState } from 'react';
import '../../App.css';
import Header from '../Header/Header';
import Event from '../Events/Event';

const Home = () => {

    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        fetch('https://nameless-citadel-87579.herokuapp.com/loadEvents')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[]);
  
    return (
        <div>
            <div className="home">
            <Header></Header>
                <div className="home-content">
                    <div className="container">
                        <h1 className="text-center mt-5 font-weight-bolder home-title">We Grow By Helping People In Need.</h1>
                        <div className="input-group input-group-lg" style={{ width: "60%", margin: "10px auto" }}>
                            <input type="text" className="input-group-prepend form-control" placeholder="Search..." />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        {
                            events.map(event => <Event event={event} key={event._id} ></Event>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;