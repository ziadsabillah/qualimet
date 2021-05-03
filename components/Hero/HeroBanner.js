import styled from 'styled-components'
import AutoContainer from '../AutoContainer'

export const BannerSection = styled.div`
    position: relative;
    z-index: 12;
`;


const InnerContainer = styled.div`
    position: relative;
    margin-top: -70px;
    background-color: #f7bd00;
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
        color: #000000;
        font-size: 2.2em;
        font-weight: 400;
    }
    h4 {
        position: relative;
        color: #000000;
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
        color: #191919;
        border-color: #191919;
        background: none;
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
                        <h2>En savoir plus sur Borvel ?</h2> 
                        <h4>Telecharger notre plaquette</h4>
                    </LeftSection>
                    <RightSection>
                        <ContactButton>Telecharger</ContactButton>
                    </RightSection>
                </InnerContainer>
            </AutoContainer>
        </BannerSection>
        </>
    )
}

export default HeroBanner;