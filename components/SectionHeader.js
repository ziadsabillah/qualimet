import styled from "styled-components";


export const SectionHeader = styled.div`
    position: relative; 
    padding-bottom: 45px;
    padding-top: 20px;
    h2 {
        position: relative;

        color: ${props => props.light ? "#efefef" : '#242424'};
        
        font-size: 32px;
        font-weight: 600;
        line-height: 1.2em;
        display: inline-block;

        &:hover {
            &::after {
                transform: scaleX(0);
            }
        }
    }

    h2::after {
        position: absolute;
        content: '';
        left: 100%;
        margin-left: 10px;
        width: 40px;
        height: 2px;
        bottom: 8px;
        background-color: #FC6C58;
        transform: scaleX(1);
        transition: transform 250ms ease-in-out;

        @media only screen and (max-width: 600px) {
            display: none;
            content: none;
            width: 0;
            height: 0;
        }
    }
`;
