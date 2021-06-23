import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import { Row, Col } from 'react-bootstrap';



const Wrapper = styled.section`

    padding: 100px 0;

`;

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};

const Services = () => {

    return (
        <>

        <Wrapper>
        </Wrapper>

        </>
    )
}

export default Services;