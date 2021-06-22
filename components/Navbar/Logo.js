import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'


const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`

    img {
        max-width: 200px;
        &:hover {
            cursor: pointer;
        }
    }
`;

const Logo = () => (
    <>
        <LogoWrapper>
            <LogoImg><Link href="/"><img src='/img/logofooter.png' alt="MaTechSo Template Logo"  /></Link></LogoImg>
        </LogoWrapper>
    </>
)

export default Logo;