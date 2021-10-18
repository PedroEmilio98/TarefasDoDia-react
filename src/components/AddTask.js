import React, { useState } from "react";
import './AddTask.css'
import Button from "./Button";

const AddTask = ({ handleTaskAdd }) => {
    const [inputData, setInputData] = useState("")
    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }
    const handleTaskAddClick = () => {
        handleTaskAdd(inputData)
        setInputData('')
    }
    return (
        <div className='addTask-container'>
            <input type='text' onChange={handleInputChange} className='addTask-input' value={inputData} />
            <div className='button-wrap'>
                <Button onClick={handleTaskAddClick}>
                    Adicionar
                </Button>
            </div>
        </div>
    )
}
export default AddTask