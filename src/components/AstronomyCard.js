import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
max-width:600px;
width:100%;
margin: 40px 0px;
`;

const Title = styled.h1`
color:purple;
font-size: 37px;
`;

const Text = styled.p`
text-align:justify;
font-size:22px;
margin-bottom: 50px;
`;

const Span = styled.span`
font-weight: 900;
padding: 50px 0px;
`;

const AstronomyCard = props => {
    return (
        <div className="astronomy-card">
            <Title>{props.title}</Title>
            <Image src={props.hdurl}/>
            <Text>{props.explanation}</Text>
            <Span>{props.date}, {props.copyright}</Span>
        </div>

    )
}

export default AstronomyCard;