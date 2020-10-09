import React, { useState } from 'react';


const BookedEvents = (props) => {

    // eslint-disable-next-line no-unused-vars
    let [deleted, setDeleted] = useState({delete: false, display: ""});
    const { name, img, date, _id } = props.userEvent;

    // DELETE TASK
    const handleDelete = (id) => {

        fetch(`https://nameless-citadel-87579.herokuapp.com/delete/${id}`, 
    {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then((result => {
        if (result) {
          setDeleted({
            delete: true,
            display: "none",
          });
        }
      }
      ));
  }
  return (
    <div className="col-12 col-md-6 col-lg-6">
        <div className="img-card m-3 border shadow align-items-center">
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img src={img} className="card-img" alt="..." />
                </div>
                <div className="col-md-8 d-flex align-items-center justify-content-center">
                    <div className="img-card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text font-weight-bolder">{date}</p>
                        <button className="btn btn-danger" onClick={() => handleDelete(`${_id}`)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BookedEvents;