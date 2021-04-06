import React from 'react';
import './Spinner.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner: React.FC = () => {
    return <div className="spinner">
        <CircularProgress />
    </div>;
}

export default Spinner;