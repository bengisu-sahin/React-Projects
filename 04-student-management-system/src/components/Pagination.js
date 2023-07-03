import { useState, useEffect } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button } from 'react-bootstrap';

const Pagination = ({ pages, setCurrentPage, currentStudents, students, studentsPerPage, currentPage, setStudentsPerPage }) => {
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
    const [currentVariant, setCurrentVariant] = useState('outline-primary');
    return (
        <>
            <div className="row no-gutters ">
                <div className="col-1"></div>
                <div className="col-3 ">
                    <span className="pagination-txt"><strong>{students.length}</strong> öğrenciden <strong>{currentPage * studentsPerPage - studentsPerPage}-{currentPage * studentsPerPage} </strong>
                        arası gösteriliyor.</span>
                </div>
                <div className="col-3 page-num">
                    {numOfPages.map((page, index) => {
                        return (
                            <Button key={index} className="mx-1" variant={currentButton === page ? 'primary' : 'outline-primary'} onClick={() => { setCurrentButton(page); }}>{page}</Button>
                        )
                    })}
                </div>
                <div className="col-3 radios">
                    <ButtonGroup > 
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
                                    setStudentsPerPage(radio.value);
                                }}>
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                <div className="col-1"></div>
            </div>
        </>
    )
}

export default Pagination;