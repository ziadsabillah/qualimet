import styled from "styled-components"
import services from "../data/services";
import AutoContainer from "./AutoContainer";
import { Column2, Row, Text } from "./General";
import { SectionHeader } from "./SectionHeader";
import VideoSection from "./Sections/VideoSection";


const ProjectSingleSection = styled.section`
    position: relative;
    padding: 95px 0px 100px;
`;

const ProjectDescriptionHeader = styled.h3`
    position: relative;
    color: #242424;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4em;
    margin-bottom: 18px;
`;

const ImageBox = styled.div`
    position: relative;
    margin-bottom: 40px;

    img {
        position: relative;
        width: 100%;
        max-height: 500px;
        object-fit: contain;
        display: block;
    }
`;

const DetailsContent = ({imgPath, projectDescription, projectName}) => {
    return (

        <>
            <ProjectSingleSection>
                <AutoContainer>
                    <SectionHeader>
                        <h2>{projectName}</h2>
                        <p>Fondée en 2000, ATOURRATE est une solide entreprise spécialisée en :</p>
                    </SectionHeader>
                    <Row className="clearfix">                            
                            <Text>
                                {projectDescription}
                            </Text>
                    </Row>
                </AutoContainer>
            </ProjectSingleSection>
        </>

    )
}

export default DetailsContent;