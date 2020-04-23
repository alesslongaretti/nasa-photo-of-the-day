import React, { useEffect, useState} from 'react';
import AstronomyCard from "./AstronomyCard";
import axios from 'axios';

export default function AstronomyContainer () {

const [picture, setPicture] = useState ([]);

useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=0WcSjjzGI6aBdqQxnfD85sVTyKGfUeQP1EX0Jh6J")
    .then(response => {
        setPicture(response.data);
        console.log(response);
    })

    .catch (error => {console.log(error);
    });
}, []);




return (
    <div className="">
        <AstronomyCard 
        title= {picture.title}
        hdurl = {picture.hdurl}
        explanation = {picture.explanation}
        date = {picture.date}
        copyright = {picture.copyright}

        />
      
    </div>
   

);

}

