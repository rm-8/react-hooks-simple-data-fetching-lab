import React, { useState, useEffect } from "react";

const API_URL = "https://dog.ceo/api/breeds/image/random";

function DogImage() {
    const [dogImage, setDogImage] = useState("");

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then((data) => setDogImage(data.message));
    }, []); 

    if (!dogImage) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <img src={dogImage} alt="A Random Dog" />
        </>
    );
}

export default DogImage;