import styled from "styled-components"
import ServiceDetail from "../pages/services/[id]";

const WidgetWrapper = styled.div`
    position: relative;
    margin-bottom: 40px;
`;

const WidgetList = styled.ul`
    position: relative;
    border-left: 3px solid #375F9C;
`;

const WidgetListItem = styled.li`
    position: relative;
    margin-bottom: 3px;
`;

const ItemLink = styled.a`
    color: #242424;
    font-size: 17px;
    font-weight: 600;
    display: block;
    padding: 14px 15px 14px 25px;
    transition: all 500ms ease;
    font-family: 'Poppins', sans-serif;


    &.activeState, &:hover {
        background-color: #375F9C;
        padding-left: 45px;
        
        &::before {
            opacity: 1;
        }
    }
    &::before {
        position: absolute;
        content: '';
        left: 22px;
        top: 25px;
        height: 1px;
        width: 15px;
        opacity: 0;
        background-color: #313131;
        transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -webkit-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
    }

`;

const SideBarCategoryWidget = ({allServices, currentService}) => {
    return (
        <>
            <WidgetWrapper>
                <WidgetList>
                    {allServices ? allServices.map(service => (
                        <WidgetListItem key={service._id}>
                            <ItemLink className={currentService === service ? 'activeState' : ''} href={`/services/${service._id}`}>
                                {service.title}
                            </ItemLink>
                        </WidgetListItem>
                    )) : 'Try Again'}
                </WidgetList>
            </WidgetWrapper>
        </>
 )
}

export default SideBarCategoryWidget;