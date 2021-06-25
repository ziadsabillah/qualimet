import Layout from '../../components/Layout'
import DetailsPageHeader from '../../components/DetailsPageHeader';
import { SectionHeader } from '../../components/SectionHeader';
import { Container } from 'react-bootstrap';
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
                        <p>L’activité principale de PI étant la métrologie, les quelques douze (12) laboratoires à son actif lui permettent de couvrir les secteurs d’activités industrielles à savoir :</p>
                    </SectionHeader>
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
                </Container>

            </Layout>

        </>
    )
}