import styled from 'styled-components'


const BannerSection = styled.div`
    position: relative;
    z-index: 12;
`;

const AutoContainer = styled.div`
    position: static;
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0 auto;
`;

const InnerContainer = styled.div`
    position: relative;
    margin-top: -70px;
    background-color: #f7bd00;
    padding: 30px 70px 30px 45px;
    box-shadow: 0px 0px 20px rgb(224 222 222 / 50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftSection = styled.div`
    width: 90%;
    float: left;
    h2 {
        position: relative;
        color: #000000;
        font-size: 37px;
        font-weight: 400;
    }
`;

const RightSection = styled.div`
    width: 30%;
    text-align: center;


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
                    <LeftSection><h2>Looking for a best Construction Company</h2></LeftSection>
                    <RightSection><ContactButton>Contact Us</ContactButton></RightSection>
                </InnerContainer>
            </AutoContainer>
        </BannerSection>
        </>
    )
}

export default HeroBanner;