import styled from "styled-components"
import AutoContainer from "./AutoContainer";
import { Column2, Row, Text } from "./General";
import { SectionHeader } from "./SectionHeader";


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
                    </SectionHeader>
                    <Row className="clearfix">
                        <Column2>
                            <ProjectDescriptionHeader>
                                Description du Project
                            </ProjectDescriptionHeader>
                            <Text>
                                {projectDescription}
                            </Text>
                        </Column2>
                        <Column2>
                            <ImageBox>
                                <img src={imgPath} alt={`Project ${projectName} Image`} />
                            </ImageBox>
                        </Column2>
                    </Row>
                </AutoContainer>
            </ProjectSingleSection>
        </>

    )
}

export default DetailsContent;