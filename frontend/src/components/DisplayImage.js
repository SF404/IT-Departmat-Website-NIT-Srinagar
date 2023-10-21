import React from 'react';
const ImageDisplay = () => {
    const imageUrl = 'http://127.0.0.1:8000/frontend/src/assets/images/AroojMam.jpeg';

    return (
        <div>
            <img src={imageUrl} alt="Image" />
        </div>
    );
};

export default ImageDisplay;
