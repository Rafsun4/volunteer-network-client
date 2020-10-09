import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import AddedEvent from './AddedEvent';

const Admin = () => {
    const [addedEvent , setAddedEvent] = useState([]);
    useEffect(() => {
        fetch('https://nameless-citadel-87579.herokuapp.com/addEvent', 
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setAddedEvent(data)
        })
    },[])
    
    return (
        <div>
        <Header></Header>
            <div className="container" style={{minHeight: "100vh"}}>
                <h2 className="text-center mt-5 pt-5 font-weight-bolder">Hello Admin!</h2>
                <hr/>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        <div>
                            <br/>
                            <Link to="/admin">  <p> Volunteer Registerations list  </p> </Link> 
                            <Link to="/addEvent">  
                                <p>
                                    <img src={require('../../images/logos/plus 1.png')} alt="" width="16" height="16"/> 
                                    Add Event
                                </p>
                            </Link> 
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                        <div>
                            <table className="table shadow">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email ID</th>
                                        <th>Registration Date</th>
                                        <th>Volunteer list</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        addedEvent.map(event => <AddedEvent event={event} key={event._id} ></AddedEvent>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;