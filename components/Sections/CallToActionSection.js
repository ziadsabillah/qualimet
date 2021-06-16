import styled from "styled-components";
import AutoContainer from "../AutoContainer";


const SectionWrapper = styled.section`
    position: relative;
    padding: 80px 0px 70px;

    background-image: url('/img/8.jpeg');
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
        background-color: rgba(252, 108, 88, .95);
    }
`;

const ActionHeader = styled.h2`
    position: relative;
    color: #fefefe;
    font-size: 35px;
    font-weight: 600;
    line-height: 1.3em;
    text-align: center;
    margin-bottom: 25px;
`;

const ActionText = styled.div`
    position: relative;
    color: #fefefe;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    line-height: 1.6em;
    max-width: 960px;
    margin: 0 auto;
    margin-bottom: 35px;
    font-family: 'Poppins', sans-serif;
`;

const ContactNumberBox = styled.div`
    position: relative;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }

    &::before {
        position: absolute;
        content: '';
        top: 12px;
        left: 54%;
        width: 2px;
        height: 42px;
        background-color: #191919;

        @media only screen and (max-width: 800px) {
        display: none;
        width: none; 
        height: none;
    }

    }
`;

const Left = styled.div`
    flex: 50%;
    text-align: center;

    @media only screen and (max-width: 800px) {
        flex: 100%;
    }
`;

const Right = styled.div`
    flex: 50%;
    text-align: center;
    @media only screen and (max-width: 800px) {
        flex: 100%;
    }
`;

const Number = styled.div`
    position: relative;
    color: #fefefe;
    font-size: 32px;
    font-weight: 600;
    padding: 10px 0px;
    letter-spacing: 1px;
    font-family: 'Poppins', sans-serif;
`;

const BtnSecondary = styled.a`
    top: --2px;
    font-size: 15px;
    font-weight: 400;
    padding: 10px 40px 10px;

    position: relative;
    line-height: 24px;
    color: #ffff;
    background: #191919;
    display: inline-block;
    border-radius: 50px;
    border: 2px solid #191919;
    font-family: 'Poppins', sans-serif;

    transition: all 0.3s ease;

    &:hover {
        color: #191919;
        background: none;
        border-color: #191919;
        cursor: pointer;
    }

`;



const CallToActionSection = () => {
    return (
        <>

        <SectionWrapper>
            <AutoContainer>
                <ActionHeader>
                    Besoins de nos services ?
                </ActionHeader>
                <ActionText>
                Société Atourrate
                </ActionText>
                <ContactNumberBox className="clearfix">
                    <Left>
                            <Number>
                            +212 05356-44048 
                            </Number>
                    </Left>
                    <Right>
                        <BtnSecondary href='/contact'>Contact</BtnSecondary>
                    </Right>
                </ContactNumberBox>
            </AutoContainer>
        </SectionWrapper>

        </>
    )
}


export default CallToActionSection;