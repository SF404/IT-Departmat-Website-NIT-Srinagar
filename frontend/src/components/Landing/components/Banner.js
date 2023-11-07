import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Carousel from 'react-grid-carousel'
import image1 from './../../../assets/images/image.webp'
import image2 from './../../../assets/images/scholarimage.jpg'



function Banner() {

    const [images, setImages] = useState([
        {
            image: image2,
            heading: "NIT SRINAGAR",
        },
        {
            image: image1,
            heading: "NIT SRINAGAR",
        }
    ])
    return (
        <>
        <div className="carousel-container">
            <Carousel cols={1} rows={1} gap={16} loop autoplay={2000} hideArrow={true}>
                {
                    images.map((item, index) => (
                        <Carousel.Item key={index}>
                            <Box className="banner" bg={`${item.image} no-repeat center center/cover;`}>
                                <div className='bannerContent'>
                                    <h1>Information Technology</h1>
                                    <h2>National Institute of Technology, Srinagar</h2>
                                </div>
                            </Box>
                        </Carousel.Item>
                    ))

                }


                {/* ... */}
            </Carousel>
            </div>

        </>
    )
}

export default Banner