
import Slider from 'react-animated-slider';
import HeroBanner from './HeroBanner';
import styled from 'styled-components'


const Button = styled.a`
    margin-top: 5px;
    line-height: 24px;
    color: #FFF;
    font-size: 1em;
    font-weight: 500;
    background: transparent;
    display: inline-block;
    padding: 12px 40px;
    border-radius: 50px;
    border: 2px solid #375F9C;
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
            title: `Nous opérons sur tout le territoire Marocain.
                N'hésitez pas à nous contacter pour plus d'informations
            `,
            titleColor: '#FFF',
            button: 'Contact',
            href: '/contact',
            imgPath: '/slider/slidernew-4.jpg',
            id: 1
        },
        {
            id: 4,
            title: `Un travail de qualité grâce au dévouement`,
            titleColor: '#FFF',
            button: 'Réalisations',
            href:"/projects",
            imgPath: '/slider/slidernew-3.jpg'
        },
        {
            title: `Bâtir ce n'est pas seulement une promesse, c'est un art et un savoir-faire.`,
            titleColor: '#ffffff',
            button: 'Demander un devis',
            href: '/contact',
            imgPath: '/slider/slidernew-1.jpg',
            id: 2,
        },{
            title: `Votre meilleur partenaire pour vos projets de constructions`,
            titleColor: '#ffffff',
            button: 'Nos Projets',
            href: '/projects',
            imgPath: '/slider/slidernew-2.jpg',
            id: 3,
        }
    ]



    return (
        <>
            <Slider autoplay={2000} className="slider-wrapper">
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