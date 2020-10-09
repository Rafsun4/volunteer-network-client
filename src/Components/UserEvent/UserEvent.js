import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import BookedEvents from './BookedEvents';

const UserEvent = () => {
  
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userEvents, setUserEvents] = useState([]);
    
     useEffect(() =>{
         fetch(`https://nameless-citadel-87579.herokuapp.com/addEvent/` + loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setUserEvents(data)
        },[])
    },)
    
    return (
        <div>
        <Header></Header>
            <div className="container mt-5 pt-5" style={{minHeight: "100vh"}}>
                <div className="row">
                {
                    userEvents.map(userEvent => <BookedEvents userEvent={userEvent} key={userEvent._id}></BookedEvents>)
                }
                </div>
            </div>
        </div>
    );
};

export default UserEvent;