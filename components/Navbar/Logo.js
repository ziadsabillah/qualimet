import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'


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
            <LogoImg><Link href="/"><Image src='/img/logosmall.png' alt="MaTechSo Template Logo" width={150} height={50}/></Link></LogoImg>
        </LogoWrapper>
    </>
)

export default Logo;