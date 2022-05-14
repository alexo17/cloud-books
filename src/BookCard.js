import React from 'react';

const BookCard = (props) => {
    return (
         <div className="card-container" >
            <img src={props.image} alt='' />
            <div className='desc'>
                <h2>{props.title}</h2>
                <h3>Author: {props.authors}</h3>
                <p>Published Year: {props.publishedDate === '0000' ? 'Not available' : props.publishedDate.substring(0,4)}</p>
            </div>
        </div>
    )
}

export default BookCard;