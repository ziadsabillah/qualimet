import styled from 'styled-components'
import AutoContainer from '../AutoContainer'

export const BannerSection = styled.div`
    position: relative;
    z-index: 12;
`;


const InnerContainer = styled.div`
    position: relative;
    margin-top: -70px;
    background-color: #F66944;
    padding: 30px 70px 30px 45px;
    box-shadow: 0px 0px 20px rgb(224 222 222 / 50%);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

const LeftSection = styled.div`
    flex: 80%;
    float: left;
    @media screen and (max-width: 800px) {
        flex: 100%;
        text-align: center;
    }
    h2 {
        position: relative;
        color: #FFF;
        font-size: 2em;
        font-weight: 400;
    }


    h4 {
        position: relative;
        color: #FFF;
        font-size: 1em;
        font-weight: 400;
    }
    
`;

const DarkAutoContainer = styled(AutoContainer)`
    background: #f4f4f4;
`;

const RightSection = styled.div`
    flex: 20%;
    text-align: center;

    @media screen and (max-width: 800px) {
        flex: 100%;
    }

`;

const ContactButton = styled.button`
    margin-top: 5px;
    line-height: 24px;
    color: #252525;
    font-size: 16px;
    font-weight: 500;
    background: #ffffff;
    display: inline-block;
    padding: 12px 40px;
    border-radius: 50px;
    border: 2px solid #ffffff;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    --webkit-transition: all 0.3s ease;

    &:hover {
        color: #FFF;
        border-color: #375F9C;
        background: #375F9C;
        cursor: pointer;
    }
`;



const HeroBanner = () => {
    return (
        <>
        <BannerSection>
            <AutoContainer>
                <InnerContainer>
                    <LeftSection>
                        <h2>Un travail de qualité grâce au dévouement</h2> 
                        <h4>
                        La satisfaction de nos clients fait notre plus grande joie et nous permet également de progresser dans un contexte ouvert et concurrentiel.
                        </h4>
                    </LeftSection>
                    <RightSection>
                        <ContactButton href="/projects">Réalisations</ContactButton>
                    </RightSection>
                </InnerContainer>
            </AutoContainer>
        </BannerSection>
        </>
    )
}

export default HeroBanner;