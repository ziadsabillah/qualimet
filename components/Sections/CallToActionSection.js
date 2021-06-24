import styled from "styled-components";
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel'
import data from "../../data/services";

import { useState, useEffect } from "react";

const SectionWrapper = styled.section`
    position: relative;
    padding: 48px 0px 40px;

    background-image: url('/img/8.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    &::before {
        position: absolute;
        content: '';
        left: 0px;
        top: 0px;
        width: 100%;
        display: block;
        height: 100%;
        background-color: rgba(27, 117, 187, .85);
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.div`
    img {
        border-radius: 50%;
        border: 2px solid #F68C33;
    }
`;
const Title = styled.div`
   
    margin-top: 1em;
    color: #efefef;
    text-align: center !important;
    h3{
        font-size: 20px;
        /* min-height: 62px; */
        margin: 0;
        font-family:'Gotham Bold', sans-serif;
        font-weight: bold
    }
    
`;

const Button = styled.a`
    position: relative;
    background: transparent;
    margin-top: 1em;
    padding: .5em 1em;
    color: #FFF;
    border-radius: 4px;
    margin-bottom: 1em;
    text-decoration: none;
    border: 1px solid #F68C33;
    cursor: pointer;
    /* transition: background .3s ease-in; */
    &:hover {

        &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        -webkit-box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
                box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
        z-index: -1;
        -webkit-animation-name: gradient-shadow;
                animation-name: gradient-shadow;
        -webkit-animation-timing-function: ease;
                animation-timing-function: ease;
        -webkit-animation-duration: 2s;
                animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
    }
    }
    &:hover, &:focus {
        color: #FFF;
        /* background-color: #F68C33; */
    }
`;

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        paritialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        paritialVisibilityGutter: 20
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        paritialVisibilityGutter: 30
    }
};
const CallToActionSection = () => {


    const [services, setServices] = useState(data);

    useEffect(() => {
        setServices(data);
    }, [data])

    return (
        <>

            <SectionWrapper>
                <Container fluid>
                    <Carousel
                        itemClass="service-carousel-item"
                        ssr
                        infinite
                        partialVisible={false}
                        responsive={responsive}>
                        {services?.map((service) => (
                            <Wrapper key={service._id}>
                                <Icon>
                                    <img src={service.iconPath} width={100} height={100} alt="Prestation Icon" />
                                </Icon>
                                <Title>
                                    <h3>
                                        {service.title.toUpperCase()}
                                    </h3>
                                </Title>
                                <Button>Lire Plus</Button>
                            </Wrapper>
                        ))}
                    </Carousel>
                </Container>

            </SectionWrapper>

        </>
    )
}


export default CallToActionSection;