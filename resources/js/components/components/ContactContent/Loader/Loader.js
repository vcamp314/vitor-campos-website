import React from 'react';
import './Loader.css';

const loader = (props) => (
    <div className="loader-container d-flex justify-content-center">
        <div className="lds-spinner">
            <div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    </div>
);

export default loader;
