
import Slider from 'react-animated-slider';
import HeroBanner from './HeroBanner';
import styled from 'styled-components'


const Button = styled.a`
    margin-top: 5px;
    line-height: 20px;
    color: #FFF;
    font-size: 1em;
    font-weight: 500;
    background: transparent;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 4px;
    border: 2px solid #F68C33;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    --webkit-transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;

    @media only screen and (max-width: 400px) {
        font-size: 0.6em;
        padding: 6px 20px;
    }
`;


export default function Hero() {

    const slides = [
        {
            title: `La métrologie, c'est notre metier
            `,
            titleColor: '#FFF',
            button: 'Contact',
            href: '/contact',
            imgPath: '/slider/labo-1.jpg',
            id: 1
        },
        {
            id: 4,
            title: `QualiMet Maroc`,
            titleColor: '#FFF',
            button: 'A propos',
            href:"/about",
            imgPath: '/slider/measure.jpg'
        },
        {
            title: `Nos Accréditations et reconnaissances`,
            titleColor: '#ffffff',
            button: 'Accréditations',
            href: '/contact',
            imgPath: '/slider/slidernew-1.jpg',
            id: 2,
        }
    ]



    return (
        <>
            <Slider autoplay={2500} className="slider-wrapper">
                {
                    slides.map((slide, index) =>
                        <div key={index}
                            className="slider-content"
                            style={{
                                background: `url('${slide.imgPath}') black`,
                                minHeight: '100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: "cover",
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                // paddingRight: '15vw',
                                justifyContent: 'center',
                                color: `${slide.titleColor}`,
                                flexFlow: 'column'
                            }}>
                            <div className="inner" style={{ width: '80%' }}>
                                <h1 style={{
                                    fontSize: '2em',
                                }}>{slide.title.toUpperCase()}</h1>
                                {slide.city && <h2>{slide.city.toUpperCase()}</h2>}
                                <p style={{
                                    fontSize: '20px'
                                }}>{slide.description}</p>
                                {slide.button && <Button href={slide.href}>{slide.button}</Button>}
                            </div>
                        </div>
                    )
                }
            </Slider>
            <HeroBanner />
        </>
    )
}