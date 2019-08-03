import React from 'react';

import FilterTag from './FilterTag/FilterTag';

import './FilterTagList.css';

const FilterTagList = (props) => (

        <div className="filter-tags">
            {props.selectedTags.map((tag, i) => {

                return (
                    <div key={i} className="filter-tag-outer">
                        <FilterTag tagName={tag} onRemoveFilterSelected={() => props.setToRemoveTag(i)} />
                    </div>
                );
            })}
        </div>


    );



export default FilterTagList;