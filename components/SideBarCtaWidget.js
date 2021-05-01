import styled from 'styled-components'


const Wrapper = styled.div`
    position: relative;
    margin-bottom: 40px;

`;

const WidgetContent = styled.div`
    position: relative;
    overflow: hidden;
    background-color: #f7bd00;
`;

const ImageBox = styled.div`
    position: relative;

    img {
        position: relative;
        width: 100%;
        display: block;
        height: auto;
    }
`;

const Content = styled.div`
    position: relative;
    padding: 5px 30px 40px;

    &::before {
        @media only screen and (max-width: 1023px) {
            transform: rotate(0deg);
        }

        position: absolute;
        content: '';
        left: -100px;
        top: -28px;
        width: 160%;
        height: 100%;
        display: block;
        z-index: 5;
        background-color: #f7bd00;
        transform: rotate(-10deg);
    }
`;

const ContentHeaderMain = styled.h2`
    position: relative;
    color: #242424;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.2em;
    z-index: 6;
`;

const ContentHeaderSecond = styled.h3`
    position: relative;
    color: #242424;
    font-size: 30px;
    font-weight: 700;
    margin-top: 5px;
    z-index: 6;
    margin-bottom: 20px;
`;

const ThemeBtn = styled.a`
    z-index: 6;
    position: relative;
    line-height: 24px;
    color: #242424;
    font-size: 16px;
    font-weight: 500;
    background: none;
    padding: 12px 33px;
    border-radius: 50px;
    display: inline-block;
    border: 2px solid #242424;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;

`;

const MainTitleSpan = styled.span`
    position: relative;
    font-weight: 500px;
    font-size: 22px;
`;


const SideBarCtaWidget = ({mainTitle, mainTitleSpan , secondTitle, callToAction, actionPath, imgSrc}) => {
    return (
        <>

            <Wrapper>
                <WidgetContent>
                    <ImageBox>
                        <img src={imgSrc} />
                        <Content>
                            <ContentHeaderMain>
                                {mainTitle}
                                <br />
                                <MainTitleSpan>{mainTitleSpan}</MainTitleSpan>
                            </ContentHeaderMain>
                            <ContentHeaderSecond>{secondTitle}</ContentHeaderSecond>
                            <ThemeBtn href={actionPath} >{callToAction}</ThemeBtn>
                        </Content>
                    </ImageBox>
                </WidgetContent>
            </Wrapper>

        </>
    )
}


export default SideBarCtaWidget;