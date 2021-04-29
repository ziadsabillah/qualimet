import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import AutoContainer from '../AutoContainer';
import { SectionHeader } from '../SectionHeader';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
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

const TestimonialSection = styled.section`
    background: none;
    position: relative;
    padding: 95px 0px 90px;
`;

const TestimonialBlock = styled.div`
    position: relative;
`;

const InnerBox = styled.div`
    position: relative;
    padding-left: 135px;

    &::before {
        position: absolute;
        content: '';
        right: -45px;
        top: 0px;
        height: 140px;
        bottom: 30px;
        border-right: 1px solid rgba(0,0,0,0.10);
    }
`;

const ImageBox = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 97px;
    height: 97px;
    overflow: hidden;
    border-radius: 50px;

`;

const Text = styled.div`
    position: relative;
    color: #797979;
    font-size: 16px;
    line-height: 1.9em;
    margin-bottom: 20px;
`;

const AuthorName = styled.div`
    position: relative;
    color: #242424;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
`;

const AuthorDesignation = styled.div`
    position: relative;
    color: #797979;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
`;
const Testimonials = () => {
    return (
        <>
            <TestimonialSection>
                <AutoContainer>
                    <SectionHeader>
                        <h2>Ce que nos clients disent</h2>
                    </SectionHeader>
                    <Carousel
                        ssr
                        partialVisible
                        itemClass="testimonial-carousel-item"
                        responsive={responsive}
                    >
                        <TestimonialBlock>
                            <InnerBox>
                                <ImageBox>
                                    <img src="/icons/author-2.jpeg" />
                                </ImageBox>
                                <Text>
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews.
                    </Text>
                                <AuthorName>Michelle</AuthorName>
                                <AuthorDesignation>CEO</AuthorDesignation>
                            </InnerBox>
                        </TestimonialBlock>
                        <TestimonialBlock>
                            <InnerBox>
                                <ImageBox>
                                    <img src="/icons/author-2.jpeg" />
                                </ImageBox>
                                <Text>
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative proaches to corporate strategy foster collabo rative thinking to further the overall value
                    </Text>
                                <AuthorName>Michelle</AuthorName>
                                <AuthorDesignation>CEO</AuthorDesignation>
                            </InnerBox>
                        </TestimonialBlock>
                        <TestimonialBlock>
                            <InnerBox>
                                <ImageBox>
                                    <img src="/icons/author-2.jpeg" />
                                </ImageBox>
                                <Text>
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative proaches to corporate strategy foster collabo rative thinking to further the overall value
                    </Text>
                                <AuthorName>Michelle</AuthorName>
                                <AuthorDesignation>Client</AuthorDesignation>
                            </InnerBox>
                        </TestimonialBlock>
                        <TestimonialBlock>
                            <InnerBox>
                                <ImageBox>
                                    <img src="/icons/author-2.jpeg" />
                                </ImageBox>
                                <Text>
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative proaches to corporate strategy foster collabo rative thinking to further the overall value
                    </Text>
                                <AuthorName>Michelle</AuthorName>
                                <AuthorDesignation>Direction de XX</AuthorDesignation>
                            </InnerBox>
                        </TestimonialBlock>
                    </Carousel>
                </AutoContainer>
            </TestimonialSection>

        </>
    )
}

export default Testimonials;