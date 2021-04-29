import styled from "styled-components"


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
    height: 100%;
    padding: 0 1.1em;
    color: #222;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out; 

    &:hover {
        border-top: 2px solid #f1c40f;
        color: #f1c40f;
    }

    &.active {
        border-top: 2px solid #f1c40f;
        color: #f1c40f;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

const NavLinks = () => (
    <NavLinkContainer>
        <LinksWrapper>
            <LinkItem className="active"><Link href="#">Accueil</Link></LinkItem>
            <LinkItem><Link href="#">Projets</Link></LinkItem>
            <LinkItem><Link href="#">Clients</Link></LinkItem>
            <LinkItem><Link href="#">Contact</Link></LinkItem>
        </LinksWrapper>
    </NavLinkContainer>
)

export default NavLinks;