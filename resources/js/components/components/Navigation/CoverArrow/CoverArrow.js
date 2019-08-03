import React from 'react';
import './CoverArrow.css';

const coverArrow = (props) => {

    let result = null;

    if(props.positioningType === "top"){
        result = (<a href={props.path ||"#"} onClick={props.click}><span style={{top: props.positioning}}></span></a>);
    }else{
        result = (<a href={props.path ||"#"} onClick={props.click}><span style={{bottom: props.positioning}}></span></a>);
    }

    return(
        <div className="arrow">{result} </div>
    );

}

export default coverArrow;
