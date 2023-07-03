import { useState, useEffect } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button } from 'react-bootstrap';

const Pagination = ({ pages, setCurrentPage, currentStudents, students, studentsPerPage, currentPage }) => {
    const numOfPages = [];
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i);
    }
    const [currentButton, setCurrentButton] = useState(1);
    useEffect(() => {
        setCurrentPage(currentButton)
    }, [currentButton, setCurrentPage])
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState(5);
    const radios = [
        { name: "5", value: 5 },
        { name: "8", value: 8 },
        { name: "10", value: 10 }
    ];
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <span>{studentsPerPage} gösterilir / {students.length}</span>
                </div>
                <div className="col-4">
                    {numOfPages.map((page, index) => {
                        return (
                            <Button key={index} className="mx-1" variant="outline-primary" onClick={() => {setCurrentButton(page);}}>
                                {page}
                            </Button>
                        )
                    })}
                </div>
                <div className="col-4">
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={checked === true ? 'primary' : 'outline-primary'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={() => {
                                    setRadioValue(radio.value);
                                }}>
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
        </>
    )
}

export default Pagination;