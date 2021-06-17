import styled from 'styled-components'
import AutoContainer from './AutoContainer';
import Featured from './Featured';
import { Column2, Row } from './General';
import SideBarCategoryWidget from './SideBarCategoryWidget';
import SideBarCtaWidget from './SideBarCtaWidget'

const SideBarLayoutContainer = styled.div`
    position: relative;
    padding: 100px 0px 60px;
`;

const SideBarWrapper = styled.div`
    margin-bottom: 40px;
    width: 100%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        width: 50%;
    }

    @media (min-width: 992px) {
        width: 33.333333%;
    }
`;

const SideBar = styled.aside`
    display: block;
`;

const ContentSideWrapper = styled.div`
    @media (min-width: 1200px) {
        width: 75%;
    }

    @media (min-width: 992px) {
        width: 66.6666666%;
    }

    @media (min-width: 768px) {
        width: 100%;
    }
    margin-bottom: 40px;
    width: 100%;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`;

const ServiceWrapper = styled.div`
    position: relative;
`;

const InnerService = styled.div`
    @media only screen and (max-width: 1140px) {
        padding-left: 0px !important;
    }

    position: relative;
    padding-left: 30px;
`;

const ServiceHeader = styled.h2`
    position: relative;
    color: #242424;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4em;
    margin-bottom: 15px;
`;

const Content = styled.div`
    position: relative;
    p {
        position: relative;
        color: #797979;
        font-size: 1.3em;
        margin-bottom: 22px;
    }
`;

const TwoColumn = styled.div`
    position: relative;
    margin-top: 50px;
`;

const ImageColumn = styled.div`
    position: relative;
    margin-bottom: 30px;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    @media (min-width: 992px) {
        width: 41.666667%;
        float: left;
    }
    @media (min-width: 768px) {
        width: 41.666667%;
        float: left;
    }
`;

const ContentColumn = styled.div`
    position: relative;
    width: 100%;
    float: left;
    @media (min-width: 992px) {
        width: 58.33333%;
    }
    @media (min-width: 768px) {
        width: 58.33333%;
    }
`;

const InnerColumn = styled.div`
    position: relative;
    padding-left: 30px;

    @media only screen and (max-width: 1140px) {
        padding-left: 0;
    }

    p {
        position: relative;
        color: #797979;
        font-size: 16px;
        line-height: 1.8em;
        margin-bottom: 22px;
        min-height: 250px;
    }

`;

const BenefitList = styled.ul`
    position: relative;
    margin-bottom: 30px;

    li {
        position: relative;
        color: #242424;
        font-size: 16px;
        margin-bottom: 6px;
    }
`;



const ImageBox = styled.div`
    img {
        position: relative;
        width: 100%;
        height: 100%;
        display: block;
    }
`;


const GalleryImage = styled.div`
    position: relative;
    margin-bottom: 30px;
`;

const BannerImageBox = styled.div`
    position: relative;
    margin-bottom: 20px;

    img {
        position: relative;
        width: 100%;
        display: block;
        max-height: 300px;
        object-fit: contain;
    }
`;

const ContentHeader = styled.h2`
    position: relative;
    color: #242424;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4em;
    margin-bottom: 15px;
`;

const SideBarLayout = ({allServices, currentService, images}) => {
    return (
        <>
        <SideBarLayoutContainer>
            <AutoContainer>
                <Row className="clearfix">
                    <SideBarWrapper>
                        <SideBar>
                            <SideBarCategoryWidget allServices={allServices} currentService={currentService} />
                            <SideBarCtaWidget mainTitle='Confiez votre projet à Atourrate' mainTitleSpan='Leader Marocain de la Construction' secondTitle='Contactez-nous'callToAction='Contact' actionPath="/contact" imgSrc='/img/help.jpg' />
                        </SideBar>
                    </SideBarWrapper>
                    <ContentSideWrapper>
                        <ServiceWrapper>
                            <InnerService>
                                <GalleryImage>
                                    <Row className="clearfix">
                                        <Column2>
                                            <BannerImageBox>
                                                <img src={images[0]} alt="First Image" />
                                            </BannerImageBox>
                                        </Column2>
                                        <Column2>
                                            <BannerImageBox>
                                                <img src={images[1]} alt="Second Image" />
                                            </BannerImageBox>
                                        </Column2>
                                    </Row>
                                </GalleryImage>
                                <ServiceHeader>{currentService ? currentService.title : ''}</ServiceHeader>
                                <Content>
                                    <p>{currentService ? currentService.description : ''}</p>
                                    <TwoColumn>
                                        {/* <Row className="clearfix"> */}
                                            {/* <ImageColumn>
                                                <ImageBox>
                                                    <img src={images[2]} alt="Third Image" />
                                                </ImageBox>
                                            </ImageColumn> */}
                                            {/* <ContentColumn> 
                                                <InnerColumn>
                                                    <ContentHeader>Analyse du Projet</ContentHeader>
                                                    <p>
                                                        {currentService ? currentService.projectAnalysic ? currentService.projectAnalysic : 
                                                        `Ce processus permettant la réalisation d’un projet de construction, à partir de l’expression des
                                                        besoins d’un client-partenaire jusqu’à l’exécution complète des travaux, peut s’avérer long et
                                                        hasardeux. Ce seul document ne peut de toute évidence, pallier au besoin d’un gestionnaire de
                                                        projet expérimenté et compétent. Le processus proposé se veut donc, une forme de vulgarisation
                                                        d’un processus beaucoup plus vaste et complexe.` : ''
                                                        }
                                                    </p>
                                                    <BenefitList>
                                                        <li>
                                                       - ÉTUDES DE FAISABILITÉ
                                                        </li>
                                                        <li>
                                                       - DÉFINITION DU PROJET
                                                        </li>
                                                        <li>
                                                       - PLAN ET DEVIS
                                                        </li>
                                                        
                                                    </BenefitList>
                                                </InnerColumn>
                                            </ContentColumn> */}
                                        {/* </Row> */}
                                    </TwoColumn>
                                    <Featured />
                                                        
                                </Content>

                            </InnerService>
                        </ServiceWrapper>
                    </ContentSideWrapper>
                </Row>
            </AutoContainer>
        </SideBarLayoutContainer>
        </>
    )
}

export default SideBarLayout;