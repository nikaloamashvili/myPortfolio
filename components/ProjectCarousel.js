import React, { Component } from 'react';
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { nanoid } from 'nanoid'

class ProjectCarousel extends Component {


    render() {
        const images = this.props.images;

        return (
            <Carousel showThumbs={false} >

                {
                  images.map((image,index) => {
                                return (
                                <div key={index}>
                                <Image 
                                    key={index}
                                    className="card-img-top1 carousel-image"
                                    src={image}
                                    alt="X" /></div>)

                            })}
                        
            </Carousel>
        );
    }
}

export default ProjectCarousel;

