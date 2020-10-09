import React, { useState } from 'react';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';

const AddEvent = () => {
    const [event, setEvent] = useState({ name: '', description: '', date: '' , bgColor: "#FF7044" , img: '' });
    let history = useHistory();

    const handleSubmit = (e) => {
        fetch('https://nameless-citadel-87579.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                history.push('/');
            }
        })

        e.preventDefault();
    }
    const handleBlur = (e) => {
        const newEvent = { ...event };
        newEvent[e.target.name] = e.target.value;
        setEvent(newEvent);
    }

    return (
        <div className="bg">
        <Header></Header>
            <div style={{minHeight:"100vh"}}>
            <form className="form-bg mt-5 pt-5 container" onSubmit={handleSubmit}>
                <h1 className="font-weight-bolder ml-3">Add Event</h1>
                <div className="row m-2 p-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="font-weight-bolder">Event Title</label>
                            <input name="name" type="text" onBlur={handleBlur} className="form-control" placeholder="Event Title" required />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bolder">Description</label>
                            <textarea name="description" onBlur={handleBlur} className="form-control" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="font-weight-bolder">Event Date</label>
                            <input name="date" type="date" onBlur={handleBlur} className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bolder">Banner</label>
                            <input name="img" type="file" className="form-control" />
                            
                        </div>
                        <div className="text-right mt-5">
                            <button type="submit" className="btn btn-primary">Add Event</button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
};

export default AddEvent;