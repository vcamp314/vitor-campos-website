import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';

import Summary from '../../components/HomeContent/Summary/Summary';
import * as Actions from '../../store/actions/index';
import { Page } from '../../Assets/utilities/PagesEnum';


export class Home extends Component {

    componentDidMount() {
        this.props.onPageSelected(Page.HOME);
    }

    render() {

        const onSelectSkill = (skillTag) => {

           this.props.onAddTag(skillTag);
           this.props.onPageSelected(Page.PROFILE);        
        }

        return (

            <div>
                <Summary onSelectSkill={onSelectSkill}/>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        selectedTags: state.profile.selectedTags,
        currPage: state.header.currentPage
    };
}

const mapDispatchToProps = dispatch => {

    return {
        onAddTag: (tag) => dispatch(Actions.addTag(tag)),
        onPageSelected: (selectedPg) => dispatch(Actions.updatePage(selectedPg))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);