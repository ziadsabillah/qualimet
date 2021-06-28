import Layout from '../../components/Layout'
import DetailsPageHeader from '../../components/DetailsPageHeader';
import { SectionHeader } from '../../components/SectionHeader';
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel'

import { useState, useEffect } from 'react';

import styled from 'styled-components'


const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ImageWrapper = styled.div`

`;

const Title = styled.h2`
    text-align: center;
    position: relative;
    font-family: 'Gotham Bold', sans-serif;
    font-weight: bold;
    padding: 1em 0;
    font-size: 18px;
`;

const LeftColumn = styled.div`
    position: relative;
    margin-bottom: 40px;

    flex: 50%;

    @media screen and (max-width: 800px) {
        flex: 100%;
        text-align: center;
    }

    h2 {
        position: relative;
        color: #242424;
        font-size: 35px;
        font-weight: 600;
        line-height: 1.5em;
        margin-bottom: 18px;
    }

`;

const Paragraph = styled.div`
    position: relative;
    color: #797979;
    font-size: 16px;
    line-height: 1.7em;
    margin-bottom: 18px;
    font-family: 'Open Sans', sans-serif;
    /* @media screen and (max-width: 800px) {
        text-align: center;
    } */
`;

const List = styled.ul`
    position: relative;

    li {
        position: relative;
        color: #242424;
        font-size: 20px;
        font-style: italic;
        padding-left: 40px;
        margin-bottom: 15px;
        font-family: 'Lora', sans-serif;
    }
    li::before {
        position: absolute;
        content: ' ';
        background: url('/icons/check.png') center top;
        background-repeat: no-repeat;
        background-size: contain;
        left: 0px;
        top: 0px;
        height: 30px;
        width: 30px;
        line-height: 1em;
        font-size: 18px;
        font-family: "Flaticon";
    }
`;



const RightColumn = styled.div`
    position: relative;
    margin-top: 40px;

    flex: 40%;
    @media screen and (max-width: 800px) {
        flex: 100%;
        padding-top: 56.25%;
    }
`;

const Clearfix = styled.div`
    position: relative;
    padding: 2em 0;
`



import data from '../../data/specialty.js';



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 20
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};
export default function SpecialtyPage() {


    const [specialties, setSpecialties] = useState(data);

    useEffect(() => {
        setSpecialties(data)
    }, [data]);

    return (
        <>

            <Layout title="Spécialité">
                <DetailsPageHeader section="Spécialité" />
                <Container>
                    <SectionHeader>
                        <h2>Spécialités des offres métrologiques d’étalonnage et de vérification au Maroc</h2>
                    </SectionHeader>
                    <Paragraph>
                    L’activité principale de QualiMet étant la métrologie, les quelques douze (12) laboratoires à son actif lui permettent de couvrir les secteurs d’activités industrielles à savoir :
                    </Paragraph>
                    <Carousel
                        itemClass="specialty-carousel-item"
                        ssr
                        infinite
                        partialVisible={false}
                        responsive={responsive}>
                        {specialties?.map(item => (
                            <div key={item.id}>
                                <ImageWrapper>
                                    <img src={item.img} width={350} height={250} alt={item.title} />

                                </ImageWrapper>
                                <Title>{item.title}</Title>
                            </div>
                        ))}
                    </Carousel>
                    <Clearfix />
                    <Row>
                            <LeftColumn>
                                <Paragraph>
                                Toutes nos offres métrologiques en qualité d’étalonnage, de vérification et des essais se détaillent comme suit :
                                </Paragraph>
                                <List>
                                    <li>Prestation sur site ou dans nos laboratoires</li>
                                    <li>Mise à jour des fiches de vie et base de données informatiques

</li>
                                    <li>Gestion des ajustements et réparations des appareils hors tolérances (Suite à une vérification nous gérons l'ajustement ou la maintenance de l'instrument si nécessaire)</li>
                                    
                                </List>
                            </LeftColumn>
                            <RightColumn>
                                 <div className="react-player">
                                     <img src='/img/logofooter.png' alt="QualiMet Logo" />
                                 </div>
                            </RightColumn>
                        </Row>
                </Container>

            </Layout>

        </>
    )
}