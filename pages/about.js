import DetailsPageHeader from "../components/DetailsPageHeader";
import AutoContainer from "../components/AutoContainer";
import Layout from "../components/Layout";
import CallToActionSection from "../components/Sections/CallToActionSection";
import VideoSection from "../components/Sections/VideoSection";
import styled from 'styled-components'

const InnerContainer = styled.div`
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 50px;
    margin-top: 90px;
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


export default function About() {

    const lorem = `
    Pour les professionnels et particuliers partout au Maroc. Notre entreprise met son savoir-faire et ses comp??tences au service de ces projets que ce soit un gros ou un petit chantier. Fournir des prestations de qualit?? dans les d??lais fix??s, maintenir la croissance de l???entreprise par le contr??le d???une saine gestion, et l???investissement durable en recherche et d??veloppement, tels sont les piliers du Soci??t?? ATOURRATE.
Dans un environnement ?? tr??s forte concurrence, Soci??t?? ATOURRATE consid??re depuis toujours que la r??ussite de son ??quipe est due ?? la qualit?? de son capital humain. Gr??ce ?? la mise en place de plans de formation et l???accompagnement au d??veloppement personnel et professionnel de nos ressources humaines. Aujourd???hui, le groupe est tr??s bien implant?? au niveau de toutes les villes du Maroc. Dot??e d???une forte notori??t?? nationale, l???entreprise b??n??ficie d???une tr??s bonne image et connue par le s??rieux de ses prestations.`

    return (
        <>
            <Layout title="Pr??sentation">
                <DetailsPageHeader section={'Pr??sentation'} />
                <AutoContainer>
                <InnerContainer>
                        <Row>
                            <LeftColumn>
                                <h2>STE Atourrate</h2>
                                <Paragraph>
                                    Construction, travaux divers et publiques, n??goce, travaux routiers et voirie, assainissement-Conduites, ??tanch??it??-Isolation, rev??tement.
                                </Paragraph>
                                <List>
                                    <li>Construction</li>
                                    <li>Travaux divers et publiques</li>
                                    <li>Travaux routiers et voirie</li>
                                    <li>Assainissement-Conduite</li>
                                </List>
                            </LeftColumn>
                            <RightColumn>
                                 <div className="react-player">
                                     <img src='/img/d.jpeg' alt="Image Featured" />
                                 </div>
                            </RightColumn>
                        </Row>
                    </InnerContainer>
                </AutoContainer>
                <VideoSection />
                <CallToActionSection />
            </Layout>
        </>
    )
}