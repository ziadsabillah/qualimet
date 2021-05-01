import styled from "styled-components";
import { Column2, Column3, Row } from "./General";

const FeaturedWrapper = styled.div`
    position: relative;
    margin-top: 25px;
    margin-bottom: 50px;
    border: 1px solid #e5e5e5;
`;

const InnerBox = styled.div`
    position: relative;
    text-align: center;
    padding: 30px 19px 40px;
    background-color: #fafafa;
    border-right: 1px solid #e5e5e5;
    transition: all 300ms ease;
    height: 100%;

    &:hover {
        background-color: #ffffff;
    }

    h3 {
        position: relative;
        color: #242424;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.4em;
        margin-bottom: 7px;

        &:hover {
            color: #f7bd00;
        
        }
    }
`;

const Text = styled.div`
    position: relative;
    color: #797979;
    font-size: 15px;
`;

const IconBox = styled.div`
    position: relative;
    color: #f7bd00;
    font-size: 60px;
    line-height: 1em;
    margin-bottom: 20px;
    min-height: 61px;

`;

const Featured = () => {
    return (
        <>
            <FeaturedWrapper>
                <Row className="clearfix">
                    <Column3 style={{ padding: '0', margin: '0' }}>
                    <InnerBox>
                            <IconBox></IconBox>
                            <h3>
                                Licencié et Assuré
                            </h3>
                            <Text>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernaturipsam voluptatem quia.
                            </Text>
                        </InnerBox>
                    </Column3>
                    <Column3 style={{ padding: '0', margin: '0' }}>
                    <InnerBox>
                            <IconBox></IconBox>
                            <h3>
                                Travailleurs Professionel
                            </h3>
                            <Text>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernaturipsam voluptatem quia.
                            </Text>
                        </InnerBox>
                    </Column3>
                    <Column3 style={{ padding: '0', margin: '0' }}>
                    <InnerBox>
                            <IconBox></IconBox>
                            <h3>
                                Entreprise Primée
                            </h3>
                            <Text>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernaturipsam voluptatem quia.
                            </Text>
                        </InnerBox>
                    </Column3>


                        
                </Row>
            </FeaturedWrapper>
        </>

    )
}

export default Featured;