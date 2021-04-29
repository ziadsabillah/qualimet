import Carousel from 'react-multi-carousel'
import { DeviceSize } from '../components/Navbar/responsive'
import styled, { css } from 'styled-components'





const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};


const ServiceBlock = styled.div`
    position: relative;
`;

const InnerBox = styled.div`
    position: relative;
    text-align: center;
    padding: 0;
    border: 1px solid #ebebeb;
    background-color: #ffffff;
`;

const FlipContainer = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;

    -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  -o-perspective: 1000px;
  perspective: 1000px;


    &:hover .flipper {
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        transform: rotateY(180deg); 
    }

    &:hover .flipper .front {
        opacity: 0;
        z-index: 0;
    }
`;

const Flipper = styled.div`
    -webkit-transition: 0.6s;
	-webkit-transform-style: preserve-3d;

	-moz-transition: 0.6s;
	-moz-transform-style: preserve-3d;
  
  -o-transition: 0.6s;
	-o-transform-style: preserve-3d;

	transition: 0.6s;
	transform-style: preserve-3d;

	position: relative;
	padding:25px 25px 45px;
`;

const FrontSide = styled.div`
    position: relative;
    display: block;
    height: 350px;
    width: 100%;
    z-index: 2;
    -webkit-transition: opacity ease 500ms;
    -ms-transition: opacity ease 500ms;
    -moz-transition: opacity ease 500ms;
    transition: opacity ease 500ms;

    -webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
	backface-visibility: hidden;
	top: 0;
	left: 0;
`;
const IconBox = styled.div`
    margin-bottom: 25px;
`;

const Icon = styled.span`
    img {
        position: relative;
        display: inline-block !important;
        height: 70px;
        width: auto !important;
        -webkit-transform-style: preserve-3d;
        vertical-align: middle;
    }
`;

const CarouselTitle = styled.h3`
    position: relative;
    color: #242424;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const CarouselText = styled.div`
    position: relative;
    color: #898989;
    font-size: 15px;
    line-height: 1.8em;
`;


const BackSide = styled.div`

-webkit-transform: rotateY(180deg);
	-moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
	transform: rotateY(180deg);
	background: #242424;

    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    display: block;
    z-index: 1;

    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    background: #242424 !important;
    color: #242424;

    -webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
	backface-visibility: hidden;
	top: 0;
	left: 0;
`;

const OverlayBox = styled.div`
    position: absolute;
    content: '';
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    display: block;
    background-color: #242424 !important;

    h4 {
        position: relative;
        color: #242424;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 14px;
    }
`;

const OverlayInner = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    display: table;
    vertical-align: middle;
    width: 100%;
    height: 100%;
`;

const OverlayContent = styled.div`
    position: relative;
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
    padding: 20px 25px;
`;

const OverlayText = styled.div`
    position: relative;
    color: #aaaaaa;
    min-height: 150px;
    font-size: 15px;
    line-height: 1.8em;
    margin-bottom: 20px;
`;

const ReadMoreBtn = styled.a`
    position: relative;
    color: #f7bd00;
    font-size: 14px;
    font-weight: 500;
    text-decoration: underline;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    -webkit-transition:  all 0.3s ease;
    -moz-transition:  all 0.3s ease;
    -ms-transition:  all 0.3s ease;
    -o-transition:  all 0.3s ease;
    cursor: pointer; 

    &:hover {
        color: #000;
        text-decoration: none;
    }
`;


const services = [
    {
        title: 'TRAVAUX D’AMÉNAGEMENT',
        description: 'Nous mettons notre expérience à la disposition de nos clients pour la conception et l’aménagement de leurs espaces (bureaux, magasins, appartements, maisons, locaux industriels …).',
        iconPath: 'icons/icon-2.svg'
    },
    {
        title: 'CONSTRUCTION CLÉ EN MAIN',
        description: 'Nous proposons la formule clé en main en tant qu’entreprise générale ou contractant général, permettant ainsi à nos clients de signer un seul contrat sans partager la responsabilité entre différents intervenants.',
        iconPath: 'icons/icon-3.svg'
    },
    {
        title: "MAÎTRISE D'OUVRAGE DÉLÉGUÉE (MOD)",
        description: 'Cette mission consiste à être le représentant unique du Maître de d’Ouvrage vis-à-vis de l’ensemble des intervenants dans le cadre de la réalisation d’un projet de construction.',
        iconPath: 'icons/icon-1.svg'
    },
    {
        title: "ASSISTANCE AU MAÎTRE D'OUVRAGE (AMO)",
        description: 'Nous assistons le Maître de d’Ouvrage dans toutes ses tâches, décisions et actions suivant un planning permettant de respecter les objectifs de délai du projet.',
        iconPath: 'icons/icon-4.svg'
    },
    {
        title: 'ORDONNANCEMENT, PILOTAGE ET COORDINATION (OPC)',
        description: 'Lexcept to obtain some advantage from it? But who has any right to find fault with a man chooses to enjoy.',
        iconPath: 'icons/icon-4.svg'
    }
];





const CustomCarousel = () => {
    return (
        <>
            <Carousel
                ssr
                partialVisible
                itemClass="carousel-item"
                responsive={responsive}
            >
                {services.map((service, index) => (


                    <ServiceBlock key={index}>
                    <InnerBox>
                        <FlipContainer>
                            <Flipper className="flipper">
                                <FrontSide className="front">
                                    <IconBox>
                                        <Icon>
                                            <img src={service.iconPath} alt="Icon" />
                                        </Icon>
                                    </IconBox>
                                    <CarouselTitle>{service.title}</CarouselTitle>
                                    <CarouselText>
                                        {service.description}
                                </CarouselText>
                                </FrontSide>
                                <BackSide className="back">
                                    <OverlayBox>
                                        <OverlayInner>
                                            <OverlayContent>
                                                <h4>{service.title}</h4>
                                                <OverlayText>
                                                    {service.description}
                                            </OverlayText>
                                                <ReadMoreBtn href="#">Lire Plus.</ReadMoreBtn>
                                            </OverlayContent>
                                        </OverlayInner>
                                    </OverlayBox>
                                </BackSide>
                            </Flipper>
                        </FlipContainer>
                    </InnerBox>
                </ServiceBlock>
                ))}
                
            </Carousel>
        </>
    )
}

export default CustomCarousel;