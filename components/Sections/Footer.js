import styled from 'styled-components'
import contact from '../../data/contact';
import data  from '../../data/services';
import AutoContainer from '../AutoContainer';
import { Column3, Column2, ListStyleOne } from '../General'
import { Row, Col } from 'react-bootstrap';

import { useState, useEffect } from 'react';

const MainFooter = styled.footer`
    background-image: url('/img/6.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
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

// const UpperBox = styled.div`
//     position: relative;
//     padding: 22px 25px 18px;
//     border: 1px solid rgba(255, 255, 255, 0.1);
//     background-color: rgba(0, 0, 0, 0.3);
//     height: 100px;

//     @media only screen and (max-width: 767px) {
//         height: 230px;
//     }
// `;

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

const RowCentered = styled(Row)`
    @media (max-width: 767px) {
        h4{
            text-align: center;

        }
    }
`;



const Column2Centered = styled(Column2)`
    @media (max-width: 767px) {
        h4{
            text-align: center !important;
            margin-top: 1em;

        }
    }
`;
const MiddleSection = styled.div`
    position: relative;
    padding-top: 15px;
    padding-bottom: 10px;
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
    font-weight: bold;
    font-family: 'Gotham Bold', sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    color: #ffff;
    line-height: 1.1em;
    margin-bottom: 25px;
    padding-bottom: 20px;
    text-transform: capitalize;

    &:hover {
        &::after {
            transform: scaleX(0);
        }
    }

    &::after {
        position: absolute;
        content: '';
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 1px;
        background-color: #375F9C;

        transform: scaleX(1);
        transition: transform 250ms ease-in-out;

        

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
            color: #efefef;
            font-size: 15px;
            padding-left: 0;
            padding-bottom: 5px;
            transition: all 0.3s ease;
            text-decoration: none;
            &::after {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 1px;
                transform: scaleX(1);
                transform-origin: 100% 0%;
                background-color: #ccc;
                transition: transform 250ms ease-in-out;

                content: '';
                line-height: 1.2em;
            }
            &:hover {
                &::after {
                    transform: scaleX(0);
                    transform-origin: 100% 0%;
                }
                color: #ccc;
            }
        }
    }
`;


const MatechsoLink = styled.a`
    text-decoration: none;
    color: #F68C33;
`;

const CopyrightTitle = styled.p`
    font-family: 'Gotham Bold', sans-serif;

    text-align: 1.2em;
    color: #ffffff;
    font-weight: bold;
    
`;


const Footer = () => {

    const [services, setServices] = useState(null);


    useEffect(() => {
        setServices(data.splice(0, 4));
    }, [data])


    return (
        <>
            <MainFooter>
                <AutoContainer>
                    {/* <UpperBox>
                        <ListStyleOne className="clearfix">
                            <ListItem>
                                {contact.street}
                                <br />
                                {contact.address1}
                            </ListItem>
                            <ListItem>
                                Envoyer-nous un email:
                                <br />
                                {contact.email}
                            </ListItem>
                            <ListItem>
                                Appelez-nous
                                <br />
                                {contact.phone}
                            </ListItem>
                        </ListStyleOne>
                    </UpperBox> */}
                    <MiddleSection>
                        <Row className="clearfix">
                            <Col sm={12} md={3}>
                                <LogoWidget>
                                    <Logo>
                                        <img src="/img/logofooter.png" width={170} alt="logo" />
                                    </Logo>
                                    <Text>
                                        {contact.companyName} est une société de travaux publique, de constructions, travaux divers négoce basé à Fès.
                                    </Text>
                                </LogoWidget>
                            </Col>
                            <Col sm={12} md={3}>
                                <LinksWidget>
                                    <LinksHeader>
                                        Siège
                                    </LinksHeader>
                                        <Text>Siège Social
                                            187 BD d'Accra lotissement La colline
                                            28820 Mohammedia - Maroc

                                            Tel :+212 523 32 31 58
                                            Email : mcc@mccmaroc.ma </Text>
                                </LinksWidget>
                            </Col>
                            <Col sm={12} md={3}>
                                <LinksWidget>
                                    <LinksHeader>
                                        Liens Utiles
                                    </LinksHeader>
                                    <List>
                                        <li>
                                            <a href="/">
                                                A propos
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/test">
                                                Spécialité
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/test">
                                                Accreditations
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/test">
                                                Prestations
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/test">
                                                Contacts
                                            </a>
                                        </li>
                                    </List>
                                </LinksWidget>
                            </Col>
                            <Col sm={12} md={3}>
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
                            </Col>
                        </Row>
                        <RowCentered>
                            <Column2Centered>
                                <CopyrightTitle>Copyright © 2021 QualiMet</CopyrightTitle>      
                            </Column2Centered>
                            <Column2Centered>
                                <CopyrightTitle style={{ textAlign: 'right' }}>Powered by 
                                    <MatechsoLink passHref={true} href='https://www.matechso.com' target="_blank"> Matechso</MatechsoLink>
                                </CopyrightTitle>
                            </Column2Centered>
                        </RowCentered>
                    </MiddleSection>
                </AutoContainer>
            </MainFooter>
        </>
    )
}


export default Footer;