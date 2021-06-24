import styled from "styled-components"
import { useState } from 'react'
import { MenuToggle } from "./MenuToggle";
import { useRouter } from 'next/router'

const NavLinkContainer = styled.div`
    height: 100%;
    display: flex; 
    align-items: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    max-height: 100%;
    list-style: none;

    background-color: #fff;
    width: 100%;
    flex-direction: column;
    align-items: center;
    
    position: fixed;
    top: 60px;
    left: 0;

    z-index: 999;
    @media only screen and (max-width: 1140px) {
        background: #000000;
        float: none;
        margin: 0 !important;
        background: #2c2c2c;
        border: 1px solid #ffffff;
        border-top: none;
    }
`;

const LinkItem = styled.li`
    width: 100%;
    padding: 1.1em;
    color: #222;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    @media only screen and (max-width: 1140px) {
        color: #fff;
        border-top: 1px solid rgba(255, 255, 255, 1) !important;
        border-bottom: none;
        opacity: 1;
        top: 0px;
        left: 0px;
        visibility: visible;
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

    return  <LinkItem className={className}><Link href={href}>{pageName}</Link></LinkItem>

}


const MobileNavLinks = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <NavLinkContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen &&
            <LinksWrapper>
                <DetectActive href="/" pageName="Accueil" />
                
                <DetectActive href="/test" pageName="Présentation" />

                <DetectActive href="/test" pageName="Projets" />

                <DetectActive href="/test" pageName="Services" />

                <DetectActive href="/test" pageName="Recrutements" />

                <DetectActive href="/test" pageName="Contact" />

            </LinksWrapper>
            }
        </NavLinkContainer>
    )
}

export default MobileNavLinks;