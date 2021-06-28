
import Layout from '../components/Layout';
import DetailsPageHeader from '../components/DetailsPageHeader';
import { Container } from 'react-bootstrap';
import { SectionHeader } from '../components/SectionHeader';
import { Paragraph } from '../components/General';

import { useState, useEffect } from 'react';

import data from '../data/accreditations';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
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

const Clearfix = styled.div`
    padding-top: 40px;
`;

export default function AccreditationsPage() {

    const [accreditations, setAccreditation] = useState(data);

    useEffect(() => {
        setAccreditation(data)
    }, [data]);


    return (
        <>
            <Layout title="Accréditations">
                <DetailsPageHeader section="Accréditations" />
                <Container>
                    <SectionHeader>
                        <h2>Nos Accréditations et nos Agréments</h2>
                    </SectionHeader>
                    <Paragraph>
                        L’accréditation est une reconnaissance par un organisme tiers de la compétence d’un organisme dans un domaine donné. Process Instruments est à ce jour accrédité au référentiel ISO/CEI 17025 par COFRAC (Comité d'accréditation français) et par le SEMAC (Service marocain d'accréditation) pour des essais et étalonnages dans les domaines détaillés ci-dessous.
                    </Paragraph>
                    <SectionHeader style={{ textAlign: 'center' }}>
                        <h2>Etalonnage</h2>
                    </SectionHeader>
                    <Carousel
                        itemClass="accreditation-carousel-item"
                        ssr
                        infinite
                        partialVisible={false}
                        responsive={responsive}>

                        {accreditations?.map(accreditation => (
                            <div key={accreditation.id}>
                                <h2>{accreditation.title}</h2>
                            </div>
                        ))}

                    </Carousel>
                    <Clearfix />

                    <SectionHeader style={{ textAlign: 'center' }}>
                        <h2>Essais</h2>
                    </SectionHeader>
                    <Carousel
                        itemClass="essais-carousel-item"
                        ssr
                        infinite
                        partialVisible={false}
                        responsive={responsive}>
                        {accreditations?.map(accreditation => (
                            <div key={accreditation.id}>
                                <h2>{accreditation.title}</h2>
                            </div>
                        ))}
                    </Carousel>
                </Container>
            </Layout>
        </>
    )
}