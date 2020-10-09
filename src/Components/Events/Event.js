import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Event = (props) => {

    const {name , img , bgColor} = props.event;
    const history = useHistory();

    const handleTask = () => {
        history.push(`/register/${name}`)
        fetch('https://nameless-citadel-87579.herokuapp.com/addEvent', 
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify()
        });
    };
  
    return (
        <div className="col-sm-6 col-md-4 col-xl-3 my-3 text-center">
            <Link to={`/register/${name}`} onClick={() => handleTask}>
                <div className="card" style={{ background: `${bgColor}` }}>
                    <img src={img} className="card-img-top img-fluid w-100" height="150" alt={name} />
                    <div className="card-body" style={{ background: `${bgColor}` }}>
                        <h5 className="card-title text-light">{name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Event;