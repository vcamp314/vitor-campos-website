import React from 'react';

import ToggleableSection from '../../../../components/Filter/ToggleableSection/ToggleableSection';

const regularItemList = (props) => {

    return (
        <React.Fragment>
            {props.listData.map((listItem, i) => {
                return (
                    <ToggleableSection toggleOn={!listItem.filteredOut} key={listItem.id}>
                        <li key={listItem.id}> {listItem.description} </li>
                    </ToggleableSection>
                );
            })}
        </React.Fragment>
    );
}

export default regularItemList;