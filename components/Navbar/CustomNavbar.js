import styled from 'styled-components';
import Logo from './Logo'
import NavLinks from './NavLinks';
import { DeviceSize } from './responsive'
import MobileNavLinks from './MobileNavLinks'

import { useMediaQuery } from 'react-responsive'

const NavbarContainer = styled.div`
    width: 100%;
    height: 100px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    padding: 0 5em;
    background: #FFFF;
`;

const LeftSection = styled.div`
    display: flex;
`;

const RightSection = styled.div`
    display: flex;
`;

const MiddleSection = styled.div`
    display: flex;
    height: 100%;
    flex: 2;
    justify-content: flex-end;
`;

const CustomNavbar = () => {

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

    return (
        <>
            <NavbarContainer>
                <LeftSection>
                    <Logo></Logo>
                </LeftSection>
                <MiddleSection>
                    {!isMobile && <NavLinks />}
                </MiddleSection>
                <RightSection>
                    {isMobile && <MobileNavLinks />}
                </RightSection>
            </NavbarContainer>
        </>
    )
}

export default CustomNavbar