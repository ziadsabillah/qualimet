import styled from "styled-components";
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel'
import services from "../../data/services";

const SectionWrapper = styled.section`
    position: relative;
    padding: 80px 0px 70px;

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
    color: #FFF;
    text-align: center !important;
    h3{
        min-height: 62px;
        margin: 0;
    }
    
`;

const Button = styled.a`
    margin-top: 1em;
    padding: .5em 1em;
    color: #FFF;
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

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        paritialVisibilityGutter: 30
    }
};
const CallToActionSection = () => {
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
                        {services.map((service) => (
                            <Wrapper key={service._id}>
                                <Icon>
                                    <img src={service.iconPath} width={100} height={100} alt="Prestation Icon" />
                                </Icon>
                                <Title>
                                    <h3>
                                        {service.title.toUpperCase()}
                                    </h3>
                                </Title>
                                {/* <Paragraph>
                                    {service.description}
                                </Paragraph> */}
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