import React, { Component } from 'react';
import { connect } from 'react-redux';

import profile from '../../Assets/data/profile.json';
import './Profile.css';

import { Page } from '../../Assets/utilities/PagesEnum';
import tagSynonyms from '../../Assets/utilities/TagSynonyms.json';
import * as Actions from '../../store/actions/index';
import ProfileHeader from '../../components/ProfileContent/ProfileHeader/ProfileHeader';
import ExperienceContent from '../../components/ProfileContent/ExperienceContent/ExperienceContent';
import ProjectsContent from '../../components/ProfileContent/ProjectsContent/ProjectsContent';
import EducationContent from '../../components/ProfileContent/EducationContent/EducationContent';
import FilterModal from '../../components/Filter/FilterControls/FilterModal/FilterModal';
import EmptyResultDisplay from '../../components/ProfileContent/EmptyResultDisplay/EmptyResultDisplay';
import { applyFilter, removeAllFiltering, checkFilterResultsEmpty, getAllTags } from '../../components/Filter/FilterUtilities/filter';
import { buildAutoCompleteList } from '../../components/Filter/FilterUtilities/synonyms';

export class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            keyPressed: ""
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.resetProfileOnClearedTags = this.resetProfileOnClearedTags.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.handleKeyPress);
        this.props.onPageSelected(Page.PROFILE);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleKeyPress);
    }

    handleKeyPress = (e) => {
        if (!this.props.modal) {
            if (e.key !== "Enter") {
                this.setState({ keyPressed: e.key });
            }
            this.props.onToggleModal();
        }
    }
    resetProfileOnClearedTags = () => {

        removeAllFiltering(profile);
    }
    setToRemoveTag = (index) => {
        if (this.props.selectedTags.length === 1) {
            this.resetProfileOnClearedTags();
        }
        this.props.onRemoveTag(index);
    }
    onContactPageSelected = () => {
        this.props.onPageSelected(Page.CONTACT);
    }

    render() {

        const tagList = getAllTags(profile);
        const autoCompleteList = buildAutoCompleteList(tagSynonyms.tags, tagList);
        applyFilter(profile, this.props.selectedTags);


        return (
            <div className="profile-padding">
                <FilterModal
                    modal={this.props.modal}
                    toggle={this.props.onToggleModal}
                    firstView={this.props.firstView}
                    keyPressed={this.props.keyPressed}
                    onSetAsViewed={this.props.onSetAsViewed}
                    selectedTags={this.props.selectedTags}
                    onAddTag={this.props.onAddTag}
                    setToRemoveTag={this.setToRemoveTag}
                    onClearTags={this.props.onClearTags}
                    onResetProfile={this.resetProfileOnClearedTags}
                    tagList={tagList}
                    autoCompleteList={autoCompleteList}
                />

                <ProfileHeader
                    selectedTags={this.props.selectedTags}
                    setToRemoveTag={this.setToRemoveTag}
                />

                {checkFilterResultsEmpty(profile) ?
                    <EmptyResultDisplay onContactRequested={this.onContactPageSelected} />
                    :
                    null
                }
                <ExperienceContent
                    experience={profile.experience}
                    expandableItemStates={this.props.expandableItemStates}
                    onToggleExpand={this.props.onToggleExpand}
                />
                <ProjectsContent
                    projects={profile.projects}
                    expandableItemStates={this.props.expandableItemStates}
                    onToggleExpand={this.props.onToggleExpand}
                />
                <EducationContent education={profile.education} />
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        expandableItemStates: state.profile.expandableItemStates,
        selectedTags: state.profile.selectedTags,
        modal: state.profile.modal,
        firstView: state.profile.firstView
    };
}

const mapDispatchToProps = dispatch => {

    return {
        onToggleExpand: (itemID) => dispatch(Actions.toggleExpand(itemID)),
        onAddTag: (tag) => dispatch(Actions.addTag(tag)),
        onRemoveTag: (tagIndex) => dispatch(Actions.removeTag(tagIndex)),
        onClearTags: () => dispatch(Actions.clearTag()),
        onToggleModal: () => dispatch(Actions.toggleModal()),
        onSetAsViewed: () => dispatch(Actions.setAsViewed()),
        onPageSelected: (selectedPg) => dispatch(Actions.updatePage(selectedPg))

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);