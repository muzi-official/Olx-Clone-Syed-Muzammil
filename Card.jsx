import React from 'react';
const Card = (props) => {



    return (
        <>
            <div id="mycard" className="col-md-3 col-12 mx-auto">
                <div className="card align-items-center">
                    <button id="heart" className="btn ml-auto">
                        <i className="far fa-heart" title="Favourite"></i></button>
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="price  font-weight-bold dark">{props.price}</h5>
                        <p className="title">{props.title}</p>
                        <p className="locatiion">{props.location}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;