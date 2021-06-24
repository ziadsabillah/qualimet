import styled from "styled-components"
import { useRouter } from 'next/router'
import React from "react";


const NavLinkContainer = styled.div`
    height: 100%;
    display: flex; 
    align-items: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
`;

const LinkItem = styled.li`
    position: relative;
    height: 50px;
    align-self: center;
    padding: 0 1.1em;
    color: #242424;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    display: flex;
    /* border-bottom: 2px solid transparent; */
    transition: color 220ms ease-in-out; 

    &::after {
        position: absolute;
        content: '';
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 2px;
        background-color: #1B75BB;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }



    &:hover, &.active {
        /* border-bottom: 2px solid #1B75BB; */
        color: #1B75BB;
        &::after {
            transform: scaleX(1);
        }
    }

`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

const DetectActive = ({href, pageName}) => {
    const router = useRouter();
    let className = '';

    if(router.pathname === href || (router.pathname.includes(href) && href !== '/')) {
        className = `active`
    }

    return  <LinkItem className={className}><Link href={href}>{pageName.toUpperCase()}</Link></LinkItem>

}

const NavLinks = () => {
    const router = useRouter();


    return (
        <NavLinkContainer>
            <LinksWrapper>
                <DetectActive href="/" pageName="Accueil" />
                
                <DetectActive href="/test" pageName="Spécialité" />

                <DetectActive href="/test" pageName="Accreditations" />

                <DetectActive href="/test" pageName="Prestations" />

                <DetectActive href="/test" pageName="A propos" />

                <DetectActive href="/test" pageName="Contacts" />

            </LinksWrapper>
        </NavLinkContainer>
    )
}

export default NavLinks;