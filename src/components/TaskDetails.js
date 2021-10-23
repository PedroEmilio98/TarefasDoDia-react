import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './TaskDetails.css';

import Button from './Button';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <div class='details-container'>
            <div class='back-button'>
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div>
                <h2 class='TaskTitle'>
                    {params.TaskTitle}
                </h2>
                <p>
                    Texto
                </p>
            </div>
        </div>
    )
}

export default TaskDetails;