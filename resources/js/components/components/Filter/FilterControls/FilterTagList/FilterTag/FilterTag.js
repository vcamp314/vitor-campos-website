import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './FilterTag.css';

const FilterTag = (props) => {

    return (
        <div className="spacing">
            <div className="filter-tag">
                <span>{props.tagName}</span><span className="close-button"><FontAwesomeIcon icon={faTimes} onClick={props.onRemoveFilterSelected} /></span>
            </div>
        </div>
    );
}

export default FilterTag;
