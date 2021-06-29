import styled from "styled-components"
import { Row, Col, Container } from "react-bootstrap"
import { SectionHeader } from "./SectionHeader";
import { Paragraph } from "./General";


const Wrapper = styled.div`
    position: relative;
    display: flex;
    padding: 1em 2em;
    flex-direction: column;
    justify-content: flex-start;
`;

const FullWidthRow = styled(Row)`
    width: 100%;
`

const ImageWrapper = styled.div`
    width: 100%;
    margin: auto;
    padding: 2em;
    img {
        max-width: 400px;
    }
`;

const DarkCol = styled(Col)`
    background-color: #1C78BB;
`;

const Info = ({ logo, address, email, phone }) => {
    return (
        <>
            <FullWidthRow>
                <Col sm={12} md={6}>
                    <ImageWrapper>
                        <img src={logo} alt="Logo" />
                    </ImageWrapper>
                </Col>
                <DarkCol sm={12} md={6}>
                    <Wrapper>
                        <SectionHeader light>
                            <h2>Addresse:</h2>
                            
                        </SectionHeader>
                        <Paragraph light>
                        {address}<br />
                        Tel : {phone}<br />
                        Email: {email}
                        </Paragraph>
                    </Wrapper>
                </DarkCol>
            </FullWidthRow>
        </>
    )
}

export default Info;