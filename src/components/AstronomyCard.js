import React from 'react';

const AstronomyCard = props => {
    return (
        <div className="astronomy-card">
            <h1>{props.title}</h1>
            <img src={props.hdurl}/>
            <p>{props.explanation}</p>
            <span>{props.date}, {props.copyright}</span>
        </div>

    )
}

export default AstronomyCard;