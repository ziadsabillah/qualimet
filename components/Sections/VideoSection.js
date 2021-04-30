import styled, { css } from 'styled-components'
import AutoContainer from '../AutoContainer';
import CustomCarousel from '../CustomCarousel';
import ReactPlayer from 'react-player'
import { SectionHeader } from '../SectionHeader';


const InnerContainer = styled.div`
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 80px;
    border-bottom: 1px solid #d7d7d7;
`;


const Row = styled.div`

    display: flex;
    flex-wrap: wrap;
`;

const LeftColumn = styled.div`
    position: relative;
    margin-bottom: 40px;

    flex: 50%;

    @media screen and (max-width: 800px) {
        flex: 100%;
        text-align: center;
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
    /* @media screen and (max-width: 800px) {
        text-align: center;
    } */
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
        content: ' ';
        background: url('/icons/check.png') center top;
        background-repeat: no-repeat;
        background-size: contain;
        left: 0px;
        top: 0px;
        height: 30px;
        width: 30px;
        line-height: 1em;
        font-size: 18px;
        font-family: "Flaticon";
    }
`;



const RightColumn = styled.div`
    position: relative;
    margin-top: 40px;

    flex: 40%;
    @media screen and (max-width: 800px) {
        flex: 100%;
        padding-top: 56.25%;
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
                                <h2>Pourquoi Borvel SARL?</h2>
                                <Paragraph>
                                Avec plus de 8 500 collaborateurs au Maroc et en Afrique subsaharienne et disposant du plus grand parc d’engins de construction au Maroc, TGCC s’impose aujourd’hui en tant que leader national et, compte à son actif plus de 1 000 projets et d’ouvrages d’envergures réalisés.                            </Paragraph>
                                <List>
                                    <li>Leader dans son domaine d'activité et en constante évolution</li>
                                    <li>Riche grâce à son capital humain varié</li>
                                    <li>Engagée sur le long terme</li>
                                    <li>Veille à la protection de ses salariés</li>
                                </List>
                            </LeftColumn>
                            <RightColumn>
                                 <div className="react-player">
                                     <video src={require('../../public/video/video.mp4')} controls autoPlay loop />
                                 </div>
                            </RightColumn>
                        </Row>
                    </InnerContainer>
                    <SectionHeader>
                        <h2>Nos Services</h2>
                    </SectionHeader>
                    <CustomCarousel />
                </AutoContainer>
            </div>
        </>
    )
}

export default VideoSection;