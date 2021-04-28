import styled from 'styled-components'
import Image from 'next/image'


const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    width: 150px; 
    height: 50px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const Logo = () => (
    <>
        <LogoWrapper>
            <LogoImg><Image src='/img/logosmall.png' alt="MaTechSo Template Logo" width={150} height={50}/></LogoImg>
        </LogoWrapper>
    </>
)

export default Logo;