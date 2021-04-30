import styled from "styled-components";
import cardsDefault from "../data/cardsDefault";
import AutoContainer from "./AutoContainer";

const PageHeaderSection = styled.section`

    // Mobile
    @media only screen and (max-width: 797px) {
        padding: 50px 0px;
    }

    // Tablet
    @media only screen and (max-width: 797px) {
        padding: 100px 0px;
    }
    background-image: url('/slider/image-5.jpeg');
    position: relative;
    padding: 220px 0px 80px;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    background-position: center top;

`;

const PageHeader = styled.h1`
    // Phone
    @media only screen and (max-width: 599px) {
        font-size: 34px;
    }
    @media only screen and (max-width: 767px) {
        font-size: 40px;
    }

    position: relative;
    color: #ffffff;
    font-size: 50px;
    font-weight: 600;
    line-height: 1.2em;
    margin-bottom: 15px;
`;


const DetailsPageHeader = ({section}) => {
    return (
        <>

        <PageHeaderSection>
            <AutoContainer>
                <PageHeader>{section}</PageHeader>
            </AutoContainer>
        </PageHeaderSection>
            
        </>
    )
}

export default DetailsPageHeader;