import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap'
import { SectionHeader } from '../SectionHeader';
import { FcNext, FcPrevious } from 'react-icons/fc';
import Carousel from 'react-multi-carousel';


const Title = styled.h1`
    color: #1B75BB;
    
    font-weight: bolder;
    font-family: 'Gotham Bold', sans-serif;
    text-align: center;
    letter-spacing: 1px;
    line-height: 35px;
    margin-top: .5em;
    margin-bottom: 1em;
    text-transform: uppercase;

`;

const Subtitle = styled.span`
    font-size: 15px;
    color: #616161;
    font-style: italic;
`;

const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 3em 2em 0 2em;
    align-items: center;
    background: #242424;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;

`;


const Paragraph = styled.p`
    font-size: 1.4em;
    color: #efefef;
`;

const Button = styled.a`
    position: relative;
    margin-top: 2em;
    margin-bottom: 1em;
    padding: .5em 1.5em;
    color: #efefef;
    background: transparent;
    font-weight: bold;
    border-radius: 4px;
    text-decoration: none;
    border: 1px solid #F68C33;
    cursor: pointer;
    transition: background .3s ease-in;
    
    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        -webkit-box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
                box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
        z-index: 1;
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
    &:hover, &:focus {
        color: #efefef;
        background-color: #F68C33;
    }
`;


const CarouselSection = styled.section`
    position: relative;
    padding: 80px;
    /* background: #F9F9F9; */
    text-align: center;

    @media only screen and (max-width: 767px) {
        padding: 20px;
    }
`;

const PaddingLessCol = styled(Col)`
    padding-right: 0 !important;
    padding-left: 0 !important;
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    min-height: 1px;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    border-radius: 4px;
`;

const Thumbnail = styled.div`
    position: relative;
    margin-bottom: 12px;

    img {
        max-width: 400px;

    }

`;

const Body = styled.div`
    position: relative;
    text-align: left;
`

const Header = styled.h2`
    font-size: 18px;
    color: #242424;
    position: relative;
    text-align: left;
    font-weight: bold;
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


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 20,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 10
    }
}


const Services = () => {



    return (
        <>

            <CarouselSection>
                <Subtitle>Accrédités par le Semac & Tunac</Subtitle>
                <Title>Services</Title>

                <Container
                    fluid

                >
                    <Carousel
                        itemClass="service-item-carousel-item"
                        ssr
                        showDots
                        focusOnSelect={true}
                        draggable={false}
                        swipeable
                        infinite
                        // customTransition="all .5"
                        renderDotsOutside={true}
                        responsive={responsive}
                        partialVisible={false}
                        removeArrowOnDeviceType={[ "mobile"]}>
                        <Wrapper>
                            <Thumbnail>
                                <img src="/img/formation.jpg" alt="Service Formation" />
                            </Thumbnail>
                            <Body>
                                <Header>Etalonnage et Verification</Header>
                            </Body>
                        </Wrapper>
                        <Wrapper>
                            <Thumbnail>
                                <img src="/img/formation.jpg" alt="Service Formation" />
                            </Thumbnail>
                            <Body>
                                <Header>Etalonnage et Verification</Header>
                            </Body>
                        </Wrapper>
                        <Wrapper>
                            <Thumbnail>
                                <img src="/img/formation.jpg" alt="Service Formation" />
                            </Thumbnail>
                            <Body>
                                <Header>Etalonnage et Verification</Header>
                            </Body>
                        </Wrapper>



                    </Carousel>
                </Container>

            </CarouselSection>

        </>
    )
}

export default Services;