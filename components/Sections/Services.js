import styled from 'styled-components';
import { Row, Col, Carousel} from 'react-bootstrap'
import {FcNext, FcPrevious} from 'react-icons/fc';

const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 3em 1em 0 1em;
    align-items: center;

`;

const Header = styled.h1`
    font-size: 1.8em;
    color: #242424;
    font-weight: bold;
    font-family: 'Gotham Bold', sans-serif;
`;

const Paragraph = styled.p`
    margin-top: 3em;
    font-size: 1.4em;
    color: grey;
`;

const Button = styled.a`
    margin-top: 2.5em;
    padding: .5em 1.5em;
    color: #242424;
    font-weight: bold;
    border-radius: 4px;
    text-decoration: none;
    border: 1px solid #F68C33;
    cursor: pointer;
    transition: background .3s ease-in;
    &:hover, &:focus {
        color: #FFF;
        background-color: #F68C33;
    }
`;


const PrevIcon = () => (
    <>
        <FcPrevious color="black" size={12} />
    </>
)

const NextIcon = () => (
    <>
        <FcNext color="black" size={12} />
    </>
)


const Services = () => {

    return (
        <>
            <Carousel fade nextLabel="" prevLabel="">
                <Carousel.Item>
                    <Row>
                        <Col sm={12} md={6}>
                            <img src='/img/8.jpg' width="100%"/>
                        </Col>
                        <Col sm={12} md={6}>
                            <Content>
                                <Header>
                                Etalonnage et Vérification
                                </Header>
                                <Paragraph>
                                Nous vous offrons des prestations d'étalonnage conformément à la norme ISO 17025 des instruments et matériels utilisés dans les domaines suivant : électricité et magnétisme, force, couple, pression, température, masse, volume, aérométrie, verrerie volumétriques, dimensionnel etc.
                                </Paragraph>
                                <Button>Lire Plus</Button>
                            </Content>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col sm={12} md={6}>
                            <img src='/img/calibration.jpg' width="100%"/>
                        </Col>
                        <Col sm={12} md={6}>
                            <Content>
                                <Header>
                                Essais et Caractérisation
                                </Header>
                                <Paragraph>
                                Nous intervenons aussi dans les caractérisations des enceintes thermiques et climatique, sur les machines d'essais mécanique (en traction et en compression, sur les machines de dureté etc) et dans la qualification des autoclaves et ceux conformément aux normes en vigeur....
                                </Paragraph>
                                <Button>Lire Plus</Button>
                            </Content>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col sm={12} md={6}>
                            <img src='/img/formation.jpg' width="100%"/>
                        </Col>
                        <Col sm={12} md={6}>
                            <Content>
                                <Header>
                                Formations
                                </Header>
                                <Paragraph>
                                Afin de transmettre nos expériences professionnelles à vos équipes dans la connaissance de la métrologie, nous vous proposons une offre de formation (intra ou inter-entreprise adaptée à vos besoins sur le plan technique ou humain dans nos centres...
                                </Paragraph>
                                <Button>Lire Plus</Button>
                            </Content>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Services;