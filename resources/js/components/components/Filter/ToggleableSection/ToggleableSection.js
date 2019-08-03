import React from 'react';

const toggleableSection = (props) => {

    if(props.toggleOn){
        return(
            <React.Fragment>
                {props.children}
            </React.Fragment>    
        );
    }
    else{
        return null;
    }
}

export default toggleableSection;