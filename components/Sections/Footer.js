import styled from 'styled-components'
import services from '../../data/services';
import AutoContainer from '../AutoContainer';
import { Column3, Column2, ListStyleOne, Row } from '../General'

const MainFooter = styled.footer`
    background-image: url('/img/6.jpeg');
    position: relative;
    padding-top: 55px;
    display: block;

    &::before {
        position: absolute;
        content: '';
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: block;
        background-color: rgba(25, 25, 25, 0.9);
    }
`;

const UpperBox = styled.div`
    position: relative;
    padding: 22px 25px 18px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.3);
    height: 100px;

    @media only screen and (max-width: 767px) {
        height: 230px;
    }
`;

const ListItem = styled.li`
    position: relative;
    width: 33%;
    float: left;
    color: #cccccc;
    font-size: 16px;
    padding-left: 60px;
    font-weight: 400;
    padding-right: 20px;

    @media only screen and (max-width: 767px) {
        text-align: center;
        width: 100%;
        padding-left: 0;
        padding-right: 0;
        margin-bottom: 30px;
    }
    

    &::after {
        position: absolute;
        content: '';
        right: 40px;
        top: 0px;
        width: 1px;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        @media only screen and (max-width: 767px) {
            display: none;
            content: none;
        }
    }

    // If its the last child remove the after element

    &:last-child {
        &::after {
            display: none;
            content: none;
        }
    }
`;

const MiddleSection = styled.div`
    position: relative;
    padding-top: 45px;
    padding-bottom: 40px;
`;

const LogoWidget = styled.div`
    position: relative;
    margin-bottom: 40px;
`;

const Logo = styled.div`
    position: relative;
    margin-bottom: 20px;
`;

const Text = styled.div`
    color: #cccccc;
    font-size: 16px;
    line-height: 1.8em;
    margin-bottom: 25px;
`;

const LinksWidget = styled.div`
    position: relative;
    margin-bottom: 40px;
`;

const LinksHeader = styled.h2`
    position: relative;
    font-size: 18px;
    font-weight: 500;
    color: #ffff;
    line-height: 1.2em;
    margin-bottom: 25px;
    padding-bottom: 20px;
    text-transform: capitalize;

    &::after {
        position: absolute;
        content: '';
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 1px;
        background-color: #375F9C;

        @media (max-width: 400px) {
            display: none;
            content: none;
            width: none;
        }
    }
`;

const List = styled.ul`
    position: relative;

    li {
        position: relative;
        margin-bottom: 8px;

        a {
            position: relative;
            color: #cccc;
            font-size: 15px;
            padding-left: 15px;
            transition: all 0.3s ease;
            &::before {
                position: absolute;
                left: 0px;
                top: 0px;
                content: '-';
                line-height: 1.2em;
            }
            &:hover {
                color: #fff;
            }
        }
    }
`;



const Footer = () => {
    return (
        <>
            <MainFooter>
                <AutoContainer>
                    <UpperBox>
                        <ListStyleOne className="clearfix">
                            <ListItem>
                                Lot12 Moulin Idrissia
                                <br />
                                Etg2 Bur17 Et.2. Atlas, Fès 30000
                            </ListItem>
                            <ListItem>
                                Envoyer-nous un email:
                                <br />
                                contact@atourrate.com
                            </ListItem>
                            <ListItem>
                                Appelez-nous
                                <br />
                                +212 05356-44048
                            </ListItem>
                        </ListStyleOne>
                    </UpperBox>
                    <MiddleSection>
                        <Row className="clearfix">
                            <Column3>
                                <LogoWidget>
                                    <Logo>
                                        <img src="/img/logofooter.png" alt="logo" />
                                    </Logo>
                                    <Text>
                                        Atourrate est une société de travaux publique, de constructions, travaux divers négoce basé à Fès.
                                    </Text>
                                </LogoWidget>
                            </Column3>
                            <Column3>
                                <LinksWidget>
                                    <LinksHeader>
                                        Liens Utiles
                                    </LinksHeader>
                                    <List>
                                        <li>
                                            <a href="/">
                                                Accueil
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/services">
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/projects">
                                                Projets
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/about">
                                                Présentation
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact">
                                                Demander un devis
                                            </a>
                                        </li>
                                    </List>
                                </LinksWidget>
                            </Column3>
                            <Column3>
                                <LinksWidget>
                                    <LinksHeader>
                                        Nos Services
                                    </LinksHeader>
                                    <List>
                                        {services?.map(service => (
                                            <li key={service._id}>
                                                <a href={`/services/${service._id}`}>{service.title}</a>
                                            </li>
                                        ))}

                                    </List>
                                </LinksWidget>
                            </Column3>
                        </Row>
                        <Row>
                            <Column2>
                                <h4 style={{ color: '#fff' }}>Copyright © 2021 Atourrate Fès</h4>
                            </Column2>
                            <Column2>
                                <h4 style={{ color: '#fff', textAlign: 'right' }}>Powered by LunaSoft</h4>
                            </Column2>
                        </Row>
                    </MiddleSection>
                </AutoContainer>
            </MainFooter>
        </>
    )
}


export default Footer;