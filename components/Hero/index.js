
import Slider from 'react-animated-slider';
import { useEffect, useRef } from 'react'
import { TweenLite, Power3 } from 'gsap';
import HeroBanner from './HeroBanner';
import styled from 'styled-components'


const Button = styled.a`
    margin-top: 5px;
    line-height: 24px;
    color: #252525;
    font-size: 16px;
    font-weight: 500;
    background: #F7BD00;
    display: inline-block;
    padding: 12px 40px;
    border-radius: 50px;
    border: 2px solid #F7BD00;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    --webkit-transition: all 0.3s ease;

    &:hover {
        color: #ffff;
        border-color: #fff;
        background: none;
        cursor: pointer;
    }
`;


export default function Hero() {

    const slides = [
        {
            title: "IMAGINER ENSEMBLE LES VILLES DE DEMAIN ET LES CONSTRUIRE",
  
            button: 'NOS PROJETS',
            imgPath: '/img/city2.jpg'
        },
        {
            title: 'Again',
            description: 'this is a description',
            imgPath: '/slider/image-5.jpeg'
        }
    ]



    return (
        <>
            <Slider autoplay={1000} infinite={true}>
                {
                    slides.map((slide, index) =>
                        <div key={index}
                            className="slider-content"
                            style={{
                            background: `url('${slide.imgPath}')`,
                            backgroundPosition: 'center bottom',
                            backgroundAttachment: 'fixed',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",
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
                                {slide.button && <Button>{slide.button}</Button>}
                            </div>
                        </div>
                    )
                }
            </Slider>
            <HeroBanner />
        </>
    )
}