import React, { useState } from 'react'

import styled from 'styled-components'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import AutoContainer from '../AutoContainer'
import { SectionHeader } from '../SectionHeader'


const ProjectWrapper = styled.section`
    position: relative;
    padding: 95px 0px 70px;
`;

const FilterTabs = styled.ul`
    position: relative;
    margin-bottom: 40px;
`;

const Filter = styled.li`
    position: relative;
    color: #242424;
    font-size: 16px;
    text-align: left;
    cursor: pointer;
    padding-left: 20px;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    label::after {
        position: absolute;
        content: '';
        left: 23px;
        top: 33px;
        width: 10px;
        height: 1px;
        background: #303030;

        @media screen and (max-width: 1023px) {
        display: none;
        content: none;
        width: 0;
        height: 0;
    }
    }

    
    > input {
        width: 0;
        height: 0;

        &:checked {
            color: #F7BD00 !important;
            border-color: blue;
        }
    }

    > label {
        margin: 15px 15px 15px 0;
        padding: 6px 20px;
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 5px;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: #f7bd00;
            cursor: pointer;
        }
    }
    
`;

const Card = styled.div`

    
`;

const CardContent = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 6px;
    margin: 5px;

    img {
        width: 100%;
        min-height: 100%;
        height: auto;
    }

    &:hover img {
        opacity: 0.4;
        transition: 0.3s;
    }

    &:hover {
        background: #000;
        .project-info {
        opacity: 1 ;
    }
    }

    
`;

const ProjectInfo = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    opacity: 0;
    transition: 0.2s linear;

    h4 {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 0;
    }

    h4 a {
        color: #fff;
    }

    h4 a:hover {
        color: #000;
    }
    p {
        padding: 0;
        margin: 0;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;
    }
`;


const cardsDefault = [
    {
        id: "a",
        projectName: "Projet 1",
        imgPath: "/img/project-1.jfif",
        filter: "Commerciale"
    },
    {
        id: "b",
        projectName: "Projet 2",
        imgPath: "/img/project-2.jfif",
        filter: "Commerciale"
    },
    {
        id: "c",
        projectName: "Projet 3",
        imgPath: "/img/project-3.jfif",
        filter: "Type2"
    },
    {
        id: "d",
        projectName: "Projet 4",
        imgPath: "/img/project-4.jfif",
        filter: "Type3"
    },
    {
        id: "e",
        projectName: "Projet 5",
        imgPath: "/img/project-5.jfif",
        filter: "Type2"
    },
    {
        id: "f",
        projectName: "Projet 6",
        imgPath: "/img/project-6.jfif",
        filter: "Type4"
    },
    {
        id: "h",
        projectName: "Projet 7",
        imgPath: "/img/project-7.jfif",
        filter: "Commerciale"
    }
];

const filtersDefault = [
    { label: "Tout", isChecked: true },
    { label: "Commerciale", isChecked: false },
    { label: "Type2", isChecked: false },
    { label: "Type3", isChecked: false },
    { label: "Type4", isChecked: false }
];


const ProjectSection = () => {
    const [filters, updateFilters] = useState(filtersDefault)
    const [selectedFilter, setSelectedFilter] = useState("Tout")

    const onFilter = event => {
        const {
            target: { value, checked }
        } = event;
        updateFilters(state =>
            state.map(f => {
                f.isChecked = false;
                if (f.label === value) {
                    return {
                        ...f,
                        isChecked: checked
                    }
                }
                setSelectedFilter(selectedFilter => selectedFilter = value);
                return f;
            }));


    }

    return (
        <>
            <ProjectWrapper>
                <AutoContainer>
                    <SectionHeader>
                        <h2>Nos Réalisations</h2>
                    </SectionHeader>
                    <ResponsiveMasonry
                        className="masonry-wrapper"
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                        <div style={{
                            textAlign: 'center',
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            zIndex: '1'
                        }} className="filter-tabs clearfix">
                            <FilterTabs className="filter-tabs clearfix">
                                {filters.map(f => (
                                    <Filter key={`${f.label}_key`} className="filter">
                                        <input
                                            id={f.label}
                                            type="checkbox"
                                            value={f.label}
                                            onChange={onFilter}
                                            checked={f.isChecked}
                                        />
                                        <label htmlFor={f.label} className={`
                                            ${selectedFilter === f.label ? 'active' : ''}
                                        `}>{f.label}</label>
                                    </Filter>
                                ))}
                            </FilterTabs>
                        </div>
                        <Masonry className="masonry">


                            {selectedFilter === "Tout" ?
                                cardsDefault.map(card => (
                                    <Card key={card.id} className={`card`}>
                                        <CardContent>
                                            <img src={card.imgPath} />
                                            <ProjectInfo className="project-info">
                                                <h4><a href="#">{card.projectName}</a></h4>

                                            </ProjectInfo>
                                        </CardContent>
                                    </Card>
                                ))

                                :

                                cardsDefault.filter(card => card.filter === selectedFilter).map(card => (
                                    <Card key={card.id} className={`card`}>
                                        <CardContent>
                                            <img src={card.imgPath} />
                                            <ProjectInfo className="project-info">
                                                <h4><a href="#">{card.projectName}</a></h4>
                                            </ProjectInfo>
                                        </CardContent>
                                    </Card>
                                ))

                            }
                        </Masonry>
                    </ResponsiveMasonry>
                </AutoContainer>
            </ProjectWrapper>




















            {/* <Container>
                 <IsoTopeGrid
                    className="grid"
                    gridLayout={cardsDefault}
                    noOfCols={4}
                    unitWidth={200}
                    unitHeight={350}
                    filters={filters}
                >
                    {cardsDefault.map(card => (
                        <Card key={card.id} className={`card ${card.filter[0]}`}>
                            <CardContent>
                                <img src="/img/team-4.jpg" />
                                <ProjectInfo className="project-info">
                                    <h4><a href="#">Projet 1</a></h4>
                                    <p>Description</p>
                                </ProjectInfo>
                            </CardContent>
                        </Card>
                    ))}

                </IsoTopeGrid> 
            </Container> */}

        </>
    )

}

export default ProjectSection;