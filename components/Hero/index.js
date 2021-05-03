
import Slider from 'react-animated-slider';
import HeroBanner from './HeroBanner';
import styled from 'styled-components'


const Button = styled.a`
    margin-top: 5px;
    line-height: 24px;
    color: #252525;
    font-size: 1em;
    font-weight: 500;
    background: #F7BD00;
    display: inline-block;
    padding: 12px 40px;
    border-radius: 50px;
    border: 2px solid #F7BD00;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    --webkit-transition: all 0.3s ease;
    cursor: pointer;

    @media only screen and (max-width: 400px) {
        font-size: 0.6em;
        padding: 6px 20px;
    }
`;


export default function Hero() {

    const slides = [
        {
            title: "IMAGINER ENSEMBLE LES VILLES DE DEMAIN ET LES CONSTRUIRE",
            titleColor: '#ffffff',
            button: 'NOS PROJETS',
            href: '/projects',
            imgPath: '/img/city2.jpg',

        },
        {
            title: 'GARE CGV',
            city: 'Rabat',
            titleColor: '#ffffff',
            button: 'Lire Plus',
            href: '/projects/i',
            imgPath: '/slider/gare.jpg'
        }
    ]



    return (
        <>
            <Slider touchDisabled={true} autoplay={2000} className="slider-wrapper">
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
                                alignItems: 'flex-end',
                                paddingRight: '15vw',
                                justifyContent: 'center',
                                color: `${slide.titleColor}`,
                                flexFlow: 'column'
                            }}>
                            <div className="inner" style={{ width: '40%' }}>
                                <h1 style={{
                                    fontSize: '1.2em',
                                }}>{slide.title}</h1>
                                {slide.city && <h2>{slide.city}</h2>}
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