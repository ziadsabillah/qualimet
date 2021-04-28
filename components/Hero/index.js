
import Slider from 'react-animated-slider';
import { useEffect, useRef } from 'react'
import { TweenLite, Power3 } from 'gsap';




export default function Hero() {

    const slides = [
        {
            title: "We're professionals for building constructions",
            description: 'this is a description',
            imgPath: '/slider/image-4.jpeg'
        },
        {
            title: 'Again',
            description: 'this is a description',
            imgPath: '/slider/image-5.jpeg'
        }
    ]



    return (
        <>
            <Slider>
                {
                    slides.map((slide, index) =>
                        <div key={index}
                            className="slider-content"
                            style={{
                            background: `url('${slide.imgPath}')`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            // width: '100%',
                            // height: '100%',
                            // zIndex: '99',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'flex-end',
                            paddingRight: '15vw',
                            justifyContent: 'center',
                            color: "#fff",
                            flexFlow: 'column'
                        }}>
                            <div className="inner" style={{ width: '40%' }}>
                                <h1 style={{
                                    fontSize: '40px',
                                }}>{slide.title}</h1>
                                <p  style={{
                                    fontSize: '20px'
                                }}>{slide.description}</p>
                            </div>
                        </div>
                    )
                }
            </Slider>
        </>
    )
}