import React from 'react'
import { useState } from 'react';

import Collapse from 'react-bootstrap/Collapse';

function RestReview({selectedRestaurant}) {
   
    //console.log(selectedRestaurant[0].reviews.length);
    const [open, setOpen] = useState(false);
    //const reviews=selectedRestaurant[0].reviews.map((review))
  return (
    <>
    <button onClick={() => setOpen(!open)} className='btn btn-warning ms-3'>Click here to see reviews</button>
    <Collapse in={open}>
    <div className='my-2 '>
        <hr/>
        
            { (selectedRestaurant[0].reviews.length)>0?
           
       selectedRestaurant[0].reviews.map(review=>(
        <div  className='mt-3  text-danger'>
            <h6>Name:{review.name}  </h6>
            <h6>Date:{review.date}  </h6>
            <h6>Rating:{review.rating}</h6>
            <h6>Description:{review.comments}</h6>
            </div>
            )):<p>No reviews</p>
            
             
        
       }
       </div>
   
    </Collapse>
    </>
  )
}

export default RestReview