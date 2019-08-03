import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';

import './NavHeader.css';
import * as headerActions from '../../store/actions/index';

import NavigationBar from '../../components/Navigation/NavigationBar/NavigationBar';
import CoverArrow from '../../components/Navigation/CoverArrow/CoverArrow';
import { Page } from '../../Assets/utilities/PagesEnum';

smoothscroll.polyfill();

export class NavHeader extends Component {

    constructor(props) {
        super(props);

        this.navHeaderRef = React.createRef();
    }

    arrowClickHandler = () => {
        window.scrollBy({ top: this.navHeaderRef.current.clientHeight, left: 0, behavior: 'smooth' });
    }

    render() {

        let headings = null;
        let arrow = null;

        headings = (
            <div className="header-container nav-header d-flex w-100 h-100 mx-auto flex-column"
                style={{ minHeight: (this.props.currPage === Page.HOME ? '80vh' : this.props.headerHeight) }} >

                <h1 className="cover-heading"> <strong>Software Developer</strong></h1>
                <p className="lead lead-subheading">Results-driven programmer with over 4 and a half years of experience developing, testing and maintaining applications.
                If you are looking to hire, please reach me <Link onClick={() => this.props.onPageSelected(Page.CONTACT)} className="cover-contact-link" to="/contact"> here</Link>.</p>
            </div>
        ); 

        if (this.props.currPage === Page.HOME) {

            arrow = <CoverArrow click={this.arrowClickHandler}
                positioningType="bottom"
                positioning="6%" />;

        } else if(this.props.currPage === Page.CONTACT) {

            headings = (

                <div className="header-container nav-header d-flex w-100 h-100 mx-auto flex-column"
                    style={{ minHeight: (this.props.currPage === Page.HOME ? '80vh' : this.props.headerHeight) }} >
    
                    <h1 className="cover-heading"> <strong>Software Developer</strong></h1>
                    <p className="lead lead-subheading">
                    You can reach me at <a href="mailto:inquiries@vitorcampos.info" className="cover-contact-link" target="_top">inquiries@vitorcampos.info</a> or if you prefer, fill out the below form and I will respond back at the earliest.</p>
                </div>
    
            );  


        }

      

        return (

            <header
                className="background"
                style={{ minHeight: (this.props.currPage === Page.HOME ? this.props.homePageMinHeight : this.props.headerHeight) }}
                ref={this.navHeaderRef}
            >

                <NavigationBar selectPage={this.props.onPageSelected} />

                {headings}
                {arrow}

            </header>
        );
    }
}

NavHeader.defaultProps = {

    homePageMinHeight: "100vh",
    headerHeight: "280px"


};

const mapStateToProps = state => {

    return {
        currPage: state.header.currentPage
    };
}

const mapDispatchToProps = dispatch => {

    return {
        onPageSelected: (selectedPg) => dispatch(headerActions.updatePage(selectedPg))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);