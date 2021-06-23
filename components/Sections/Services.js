import styled from 'styled-components';
import { Row, Col, Carousel} from 'react-bootstrap'


const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 4em;
    align-items: center;
`;

const Header = styled.h1`
    font-size: 1.8em;
    color: #242424;
`;

const Paragraph = styled.p`
    font-size: 1.8em;
    color: grey;
`;


const Services = () => {

    return (
        <>
            <Carousel nextLabel="Suivant" prevLabel="Precedant">
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
                            </Content>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Services;