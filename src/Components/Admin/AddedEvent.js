import React, { useEffect, useState } from 'react';

const AddedEvent = (props) => {
   
    let [deleted, setDeleted] = useState({
        delete: false ,
        display: "" ,
     });

    const {displayName , name , email  , bgColor , _id , date} = props.event;

   
    useEffect(() => {
        fetch('https://nameless-citadel-87579.herokuapp.com/addEvent')
            .then(res => res.json())
            .then(result => {
                setDeleted(false);
            })
    }, [])

    // DELETE TASK
    const handleDelete = (id) => {
        fetch(`https://nameless-citadel-87579.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then((result => {
            if (result) {
                setDeleted({
                   delete: true ,
                   display:"none" ,
                });
            }
        }
        ));
    }
    
    return (
        <tr className ="col-12 col-md-8 col-lg-9" style={{display : `${deleted.display}`}}>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td style={{color: `${bgColor}`}}>
                {name}
            </td>
            <td>
                <button className="btn btn-danger" onClick={()=> handleDelete(`${_id}`)}>Delete</button>
            </td>
        </tr>
    );
};

export default AddedEvent;