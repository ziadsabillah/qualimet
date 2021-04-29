import React, { useState } from 'react'

import styled from 'styled-components'
import IsoTopeGrid from 'react-isotope'

const Container = styled.div`
    position: relative;
    margin-top: 20px;
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
        padding: 5px;
        border-bottom: 2px solid transparent;

        &:hover {
            color: blue;
            
        }
    }
`;

const Card = styled.div`

    &.test {
        background: blue !important;
    }
    &.test1 {
        background: red !important;
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
            <div>
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
                    unitHeight={100}
                    filters={filters}
                    style={{
                        display: 'flex !important'
                    }}
                >
                    {cardsDefault.map(card => (
                        <Card key={card.id} className={`card ${card.filter[0]}`}>
                            <div className="tags">
                                {card.filter.map((c, index) => (
                                    <span key={index}>{c}</span>
                                ))}
                            </div>
                            {card.id}
                        </Card>
                    ))}
                </IsoTopeGrid>
            </Container>

        </>
    )

}

export default ProjectSection;