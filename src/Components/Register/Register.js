import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {

    const { name } = useParams();
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email = loggedInUser.email;
  
    const [event, setEvent] = useState({ description: '', date: '' });
    const [users, setUsers] = useState([]);
  
  
    const handleBlur = (e) => {
        const newEvent = { ...event };
        newEvent[e.target.name] = e.target.value;
        setEvent(newEvent);
    }

    useEffect(()=> {
        fetch('https://nameless-citadel-87579.herokuapp.com/loadEvents' , 
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setUsers(data)})
    },[])
  
//   HANDLE SUBMIT 
    const handleSubmit = () =>{
        const user = users.find(user => user.name === name);
        const data = {...loggedInUser, ...user, ...event};
        // console.log(data);
        fetch('https://nameless-citadel-87579.herokuapp.com/addEvent',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    }
    
    return (
       <div>
            <div className="login-form">
                <div className="container">
                    <header className="d-flex align-items-center justify-content-center">
                       <Link to="/">
                       <img src={require('../../images/logos/Group 1329.png')} alt="" width="250" />
                       </Link>
                    </header>
                    <div className="login-form-content shadow rounded">
                        <form className="form required">
                            <div className="form-group">
                                <input type="text" name="displayName" id="" className="form-control"  defaultValue={loggedInUser.displayName} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control"  defaultValue={email} name="email" />
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" onBlur={handleBlur}  placeholder="Date" name="date"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" onBlur={handleBlur} placeholder="Description" name="description" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" defaultValue={`${name}`} name="name" required />
                            </div>
                            <Link to={`/userEvent/${email}`} onClick={handleSubmit}>
                                <button className="btn btn-primary w-100">Register</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;