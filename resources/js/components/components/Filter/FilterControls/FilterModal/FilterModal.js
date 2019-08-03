/*
* This modal will allow users to filter for skills and technology: 
*
* This modal should appear whenever the user starts typing
* on the profile page and what they type should be entered 
* into the form input.
* 
*/

import React, { useState, useRef, useEffect } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Input
} from 'reactstrap';

import FilterTagList from '../FilterTagList/FilterTagList';
import './FilterModal.css';

const FilterModal = (props) => {

    const [tagName, setTagName] = useState("");
    const [activateAutoComplete, setActivateAutoComplete] = useState(false);
    const inputRef = useRef(null);

    // Ensure that when this modal is opened, the input will always be focused
    // so user can continue to type without having to select input
    useEffect(() => {

        if (inputRef !== null) {
            if (inputRef.current !== null) {
                inputRef.current.focus();
            }
        }
    });

    const onApplyHandler = (e) => {
        e.preventDefault();

        if (props.selectedTags.length === 0) {
            props.onResetProfile();
        }

        if (tagName !== "") {
            props.onAddTag(tagName);
            setTagName("");
        }
        props.toggle();
    }

    const onClosedHandler = () => {
        setTagName("");
        setActivateAutoComplete(false);
        props.onSetAsViewed();
    }

    const onClearHandler = () => {
        props.onResetProfile();
        props.onClearTags();
        props.toggle();
    }

    const inputChangedHandler = (e) => {
        setTagName(e.target.value);
    }

    const applyFocusOnInput = () => {
        setActivateAutoComplete(true);
        inputRef.current.blur();
        inputRef.current.click();
    }

    return (

        <Modal isOpen={props.modal} toggle={props.toggle} centered={true} onOpened={applyFocusOnInput} onClosed={onClosedHandler} autoFocus={false}>
            <Form onSubmit={(e) => onApplyHandler(e)}>
                <ModalHeader toggle={props.toggle}>{props.firstView ? "Welcome to the Profile page." : "Filter content"}</ModalHeader>
                <ModalBody>
                    {props.firstView ?
                        <div>
                            <p>
                                To make it easier to find what you are looking for, you can
                                filter the page to only show the technologies/skills you want:
                            </p>

                            <p>
                                While on the profile page, just type the name of the skill or technology
                                of interest at any time and press enter.

                            </p>
                            <p>
                                ...Or do so now using the field below:
                            </p>

                        </div>

                        :
                        <p>type the name of the skill or technology of interest in the field below:</p>
                    }


                    {activateAutoComplete ?

                        <Input
                            innerRef={inputRef}
                            autoFocus={true}
                            list="autoCompleteList"
                            autoComplete="on"
                            defaultValue={props.keyPressed}
                            className="filterInput"
                            name="filter"
                            id="filterInput"
                            placeholder="filter by technology/skill..."
                            onChange={(e) => inputChangedHandler(e)}
                        />

                        :

                        <Input
                            innerRef={inputRef}
                            autoFocus={true}
                            autoComplete="off"
                            defaultValue={props.keyPressed}
                            className="filterInput"
                            name="filter"
                            id="filterInput"
                            placeholder="filter by technology/skill..."
                            onChange={(e) => inputChangedHandler(e)}
                        />



                    }

                    <datalist id="autoCompleteList">
                    {props.autoCompleteList.map((listItem, i) => {
                        return (
                                <option key={i}> {listItem} </option>
                        );
                    })}
                    </datalist>

                    <FilterTagList selectedTags={props.selectedTags} setToRemoveTag={props.setToRemoveTag} />


                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={onClearHandler}>Clear</Button>{' '}
                    <Button type="submit" color="primary" >Apply</Button>
                </ModalFooter>
            </Form>
        </Modal>
    );
}

export default FilterModal;