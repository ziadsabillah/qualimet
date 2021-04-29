import React, { useState } from 'react'

import styled from 'styled-components'
import IsoTopeGrid from 'react-isotope'

import { useMediaQuery } from 'react-responsive'


const Container = styled.div`
    position: relative;
    margin-top: 20px;
    min-height: 500px;
`;

const Filter = styled.button`
    background-color: transparent;
    border-radius: 20px;
    padding: 10px;
    
    > input {
        width: 0;
        height: 0;

        &:checked {
            color: blue;
            border-color: blue;
        }
    }

    > label {
        margin: 15px 15px 15px 0;
        padding: 6px 20px;
        display: inline-block;
        font-size: 12px;
        line-height: 20px;
        border-radius: 50px;
        background-color: #ffecfb;
        margin-bottom: 5px;
        transition: all 0.3s ease-in-out;
        border-bottom: 2px solid transparent;

        &:hover {
            background: #F7BD00;
            color: #fff;
            
        }
    }
    
`;

const Card = styled.div`

    
`;

const CardContent = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 6px;
    margin: 0;

    img {
        width: 100%;
        max-height: 100%;
        height: auto;
    }

    &:hover img {
        opacity: 0.4;
        transition: 0.3s;
    }

    &:hover {
        background: red;
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
        line-height: 1px;
        font-weight: 700;
        margin-bottom: 0;
    }

    h4 a {
        color: #fff;
    }

    h4 a:hover {
        color: #007bff;
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
        filter: ["test", "chart"]
    },
    {
        id: "b",
        filter: ["test1", "tile"]
    },
    {
        id: "c",
        filter: ["test", "chart"]
    },
    {
        id: "d",
        filter: ["test1", "tile"]
    },
    {
        id: "e",
        filter: ["test", "tile"]
    },
    {
        id: "f",
        filter: ["test1", "chart"]
    },
    {
        id: "h",
        filter: ["test1", "chart"]
    }
];

const filtersDefault = [
    { label: "all", isChecked: true },
    { label: "test", isChecked: false },
    { label: "test1", isChecked: false },
    { label: "chart", isChecked: false },
    { label: "tile", isChecked: false }
];


const ProjectSection = () => {
    const [filters, updateFilters] = useState(filtersDefault)

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

                return f;
            }))
    }

    return (
        <>
            <div style={{
                textAlign: 'center'
            }}>
                {filters.map(f => (
                    <Filter key={`${f.label}_key`}>
                        <input
                            id={f.label}
                            type="checkbox"
                            value={f.label}
                            onChange={onFilter}
                            checked={f.isChecked}
                        />
                        <label htmlFor={f.label}>{f.label}</label>
                    </Filter>
                ))}
            </div>

            <Container>
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
            </Container>

        </>
    )

}

export default ProjectSection;