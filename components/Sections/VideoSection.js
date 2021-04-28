import styled, { css } from 'styled-components'
import AutoContainer from '../AutoContainer';
import CustomCarousel from '../CustomCarousel';


const InnerContainer = styled.div`
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 80px;
    border-bottom: 1px solid #d7d7d7;
`;


const Row = styled.div`
    margin-right: -15px;
    margin-left: -15px;

    display: flex;
    flex-wrap: wrap;
`;

const LeftColumn = styled.div`
    position: relative;
    margin-bottom: 40px;

    flex: 50%;

    @media screen and (max-width: 800px) {
        flex: 100%;
    }

    h2 {
        position: relative;
        color: #242424;
        font-size: 35px;
        font-weight: 600;
        line-height: 1.5em;
        margin-bottom: 18px;
    }

`;

const Paragraph = styled.div`
    position: relative;
    color: #797979;
    font-size: 16px;
    line-height: 1.7em;
    margin-bottom: 18px;
    font-family: 'Open Sans', sans-serif;
`;

const List = styled.ul`
    position: relative;

    li {
        position: relative;
        color: #242424;
        font-size: 20px;
        font-style: italic;
        padding-left: 40px;
        margin-bottom: 15px;
        font-family: 'Lora', sans-serif;
    }
    li::before {
        position: absolute;
        content: '\f109';
        left: 0px;
        top: 5px;
        color: #f7bd00;
        line-height: 1em;
        font-size: 18px;
        font-family: "Flaticon";
    }
`;



const RightColumn = styled.div`
    position: relative;
    margin-bottom: 40px;

    flex: 50%;
    @media screen and (max-width: 800px) {
        flex: 100%;
    }
`;

const VideoSection = () => {
    return (
        <>
            <div style={{ 
                position: 'relative',
                marginTop: '-52px',
                padding: '155px 0 100px',
                backgroundImage: "url('/img/7.jpeg')",
                backgroundColor: '#f4f4f4',
                backgroundPosition: 'right bottom',
                backgroundRepeat: 'no-repeat'
             }}>
                <AutoContainer>
                    <InnerContainer>
                        <Row>
                            <LeftColumn>
                                <h2>Why you choose us for your next project</h2>
                                <Paragraph>
                                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards.
                            </Paragraph>
                                <List>
                                    <li>Expert & Professional Engineers</li>
                                    <li>Expert & Professional Engineers</li>
                                    <li>Expert & Professional Engineers</li>
                                    <li>Expert & Professional Engineers</li>
                                </List>
                            </LeftColumn>
                            <RightColumn>
                                Video
                        </RightColumn>
                        </Row>
                    </InnerContainer>
                    <CustomCarousel />
                </AutoContainer>
            </div>
        </>
    )
}

export default VideoSection;