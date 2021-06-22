import styled from "styled-components";
import contact from "../../data/contact";
import { Col, Container, Row } from "react-bootstrap";

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
        background-color: rgba(27, 117, 187, .7);
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
`;
const Title = styled.div`
    color: #FFF;
`;

const Paragraph = styled.div`

`;









const CallToActionSection = () => {
    return (
        <>

        <SectionWrapper>
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <Wrapper>
                            <Icon>
                                <img src="/icons/destination.png" alt="Prestation Icon" />
                            </Icon>
                            <Title>
                                Nos Préstations
                            </Title>
                            <Paragraph>

                            </Paragraph>
                        </Wrapper>
                    </Col>
                    <Col sm={12} md={4}>
                        Test
                    </Col>
                    <Col sm={12} md={4}>
                        Test
                    </Col>
                </Row>
            </Container>
        </SectionWrapper>

        </>
    )
}


export default CallToActionSection;