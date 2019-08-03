import React, {useState, useEffect} from 'react';
import './ExpandableItemHeading.css'
import arrowRightImg from './caret-right.svg';
import arrowDownImg from './caret-bottom.svg';

const ExpandableItemHeading = (props) => {

    const [isRotated, setRotated] = useState(false);
    const [inAnimation, setInAnimation] = useState(false);

    useEffect(() => {
        if(!inAnimation){
            setRotated(props.expanded);
        }
        
    }, [props.expanded]);

    const toggleHandler = () => {

        setInAnimation(true);
        props.toggle();
    };    

    const onAnimationFinish = () => {

        setInAnimation(false);

        if(isRotated){
            setRotated(false);
        }else {
            setRotated(true);
        }
    }

    const setStyleClasses = () => {
        if(inAnimation){
            return " " + (isRotated? "unrotate" : "rotate");
        }else{
            return "";
        }
    }    

    const styleClasses = "expandable-bullet" + setStyleClasses();
    const imgPath = isRotated?  arrowDownImg : arrowRightImg;    
     
    return(

        <p className="expandable-bullet-heading">
            <input 
            type="image" 
            className={styleClasses} 
            src={imgPath} 
            onClick={() => toggleHandler()}
            onAnimationEnd={() => onAnimationFinish()} 
            alt="bullet" />{props.heading}
        </p>
    );
}
export default ExpandableItemHeading;