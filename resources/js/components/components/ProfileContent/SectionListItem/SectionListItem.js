import React from "react";

import '../ProfileContent.css';
import ExpandableItemList from './ExpandableItemList/ExpandableItemList';
import RegularItemList from './RegularItemList/RegularItemList';

const sectionListItem = (props) => {


    const listData = props.section[props.listName];

    /* restructuring of ListData: 
        restructure the list data into n sections of either expandable items or regular items.
        for the purpose of cleanly rendering unordered lists containing both kinds of list items. */

    let restructuredLists = [];
    restructuredLists.push([]);
    let isExpandableItemList = listData[0].details !== undefined;

    var i, len;

    for (i = 0, len = listData.length; i < len; i++) {
        /* below logic is as follows: check if currently looping for a section of expandable items
            if item has details, it is expandable and should be added to current section
            if item is not expandable, start new section of regular items*/

        if (isExpandableItemList) {
            if (listData[i].details !== undefined) {
                restructuredLists[restructuredLists.length - 1].push(listData[i]);
            } else {
                isExpandableItemList = false;
                restructuredLists.push([]);
                restructuredLists[restructuredLists.length - 1].push(listData[i]);
            }
            // The below code follows same logic as above but for regular items
        } else {
            if (listData[i].details !== undefined) {
                isExpandableItemList = true;
                restructuredLists.push([]);
                restructuredLists[restructuredLists.length - 1].push(listData[i]);

            } else {
                restructuredLists[restructuredLists.length - 1].push(listData[i]);
            }
        }
    }

    return (
        <React.Fragment>
            {props.section.heading ? <p className="content-heading">{props.section.heading}</p> : null}

            {restructuredLists.map((listItemSection, i) => {

                if (listItemSection[0].details !== undefined) {

                    // to be able to render data with a tree structure of unspecified branches
                    // and nodes, ExpandableItemList rendered below iteratively contains
                    // SectionListItem components which can in turn contain more ExpandableItemList
                    // and so on:

                    return (
                        <div key={i}>
                            <ExpandableItemList
                                listData={listItemSection}
                                expandableItemStates={props.expandableItemStates}
                                onToggleExpand={props.onToggleExpand}
                            />
                        </div>
                    );
                } else {

                    return (
                        <ul key={i}>
                            <RegularItemList listData={listItemSection} />
                        </ul>
                    );
                }
            })}
        </React.Fragment>
    );
};

export default sectionListItem;