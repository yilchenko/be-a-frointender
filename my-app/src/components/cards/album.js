import React, { useState, useEffect } from 'react';
import axios from 'axios';


import SlDetails from '@shoelace-style/shoelace/dist/react/details';
import SlIcon from '@shoelace-style/shoelace/dist/react/icon';
import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel';
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item';




function Album({id, title}) {
    const [albumPhotos, setAlbumPhotos] = useState([]);


    const fetchUserPhotos = (albumId) => {
        axios
          .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
          .then((response) => {
            const photos = response.data;
            setAlbumPhotos(photos);
          })
          .catch((error) => {
            console.error('Error fetching user photos:', error);
          });
    };
    

    useEffect(() => {
        fetchUserPhotos(id);
    }, []);

    return (
        <div>
            <SlDetails summary={title}>
            {albumPhotos.length > 0 ? (
                <SlCarousel pagination mouse-dragging navigation>
                {albumPhotos.map((photo) => (
                    <SlCarouselItem key={photo.id}>
                    <img alt={photo.title} src={photo.url} />
                    </SlCarouselItem>
                ))}
                </SlCarousel>
            ) : (
                <SlCarouselItem>
                    <p>loading</p>
                </SlCarouselItem>
            )}
            </SlDetails>
        </div>
    );
}

export default Album;
  