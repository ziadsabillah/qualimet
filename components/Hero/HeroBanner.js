import styled from 'styled-components'
import AutoContainer from '../AutoContainer'

export const BannerSection = styled.div`
    position: relative;
    z-index: 12;
`;


const InnerContainer = styled.div`
    position: relative;
    margin-top: 10px;
    /* background-color: #375F9C; */
    padding: 30px 70px 30px 45px;
    box-shadow: 0px 0px 20px rgb(224 222 222 / 50%);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Subtitle = styled.span`
    font-size: 15px;
    color: #616161;
    font-style: italic;
`;

const Title = styled.h1`
    color: #333;
    text-align: center;
    letter-spacing: 1px;
    line-height: 35px;
    margin-top: .5em;
`;

const LineIcon = styled.div`
    display: inline-block;
    height: 6px;
    width: 30px;
    position: relative;
    padding-top: 1em;
    margin-top: .5em;
    &::before, &::after {
        height: 2px;
        width: 20px;
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        background-color: #777;

    }
`;


const HeroBanner = () => {
    return (
        <>
        <BannerSection>
            <AutoContainer>
                <InnerContainer>
                    <Subtitle>Depuis 2008</Subtitle>
                    <Title>
                    LABORATOIRE DE MÉTROLOGIE INDÉPENDANT SPÉCIALISÉ SUR L'ÉTALONNAGE ET LA VÉRIFICATION D'INSTRUMENTS DE MESURE
                    </Title>
                    <LineIcon />
                </InnerContainer>
            </AutoContainer>
        </BannerSection>
        </>
    )
}

export default HeroBanner;