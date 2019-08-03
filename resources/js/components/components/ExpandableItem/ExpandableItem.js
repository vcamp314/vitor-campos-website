import React, { useRef, useState, useEffect } from 'react';
import Transition from 'react-transition-group/Transition';
import styled, { keyframes } from "styled-components";
import ExpandableItemHeading from './ExpandableItemHeading/ExpandableItemHeading';
import './ExpandableItem.css';

const ExpandableItem = (props) => {


    const ref = useRef(null);
    const [height, setHeight] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const [animate, setAnimate] = useState(false);


    // Update the IsExpanded state if one is provided externally via props
    // In case expanded state should be controlled externally
    useEffect(() => {

        if (props.expandedState !== undefined) {

            setIsExpanded(props.expandedState);
        }
    }, [props.expandedState]);


    // allow for running external functions when expansion is toggled
    // Also in case expanded state should be controlled externally
    const toggleExpandHandler = () => {

        if (props.toggleExpand !== undefined && typeof props.toggleExpand === "function") {

            props.toggleExpand();
        } else {
            setIsExpanded(!isExpanded);
        }
        setAnimate(true);
        
    };

    return (

        <div>
            <ExpandableItemHeading
                heading={props.heading}
                toggle={toggleExpandHandler}
                expanded={isExpanded}
                animate={animate}
                altImg={props.altImg} />

            <div ref={ref}>
                <Transition
                    in={isExpanded}
                    timeout={300}
                    mountOnEnter
                    unmountOnExit
                    onEnter={() => {
                        setHeight(ref.current.clientHeight);
                    }}
                    onEntered={() => {
                        setAnimate(false);
                    }}
                    onExited={() => {
                        setAnimate(false);
                    }}                    
                >

                    {state => {
                        if ((state !== "entering" && state !== "exiting") || !animate) {
                            // render unanimated content
                            return (

                                <div className="expandable-content" id={props.id}>
                                    {props.children}
                                </div>
                            );

                        } else {
                            // render animated content
                            let keyframesAnimation = null;

                            if (state === "entering") {
                                keyframesAnimation = keyframes`
                                from { 
                                    height: 0px;
                                    overflow: hidden;                            
                                }
                                to {                                
                                    height: ${height}px;
                                    overflow: hidden;                            
                                }
                            `;
                            } else {

                                keyframesAnimation = keyframes`
                                from { 
                                    height: ${height}px;
                                    overflow: hidden;                            
                                }
                                to {                                
                                    height: 0px;
                                    overflow: hidden;                                                                
                                }
                            `;
                            }

                            const ExpandableContent = styled.div`
                                animation: ${keyframesAnimation} 0.3s ease-out forwards;
                            `;

                            return (

                                <ExpandableContent className="expandable-content" id={props.id}>
                                    {props.children}
                                </ExpandableContent>

                            );
                        }
                    }}
                </Transition>
            </div>
        </div>

    );
}
export default ExpandableItem;