import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../store/actions/index';
import { Page } from '../../Assets/utilities/PagesEnum';
import Loader from '../../components/ContactContent/Loader/Loader';
import FormSubmitResult from '../../components/ContactContent/FormSubmitResult/FormSubmitResult';
import ContactForm from '../../components/ContactContent/ContactForm/ContactForm';

import './Contact.css';


export class Contact extends Component {

    constructor() {
        super();
        this.state = {
            messageSubmitted: false,
            isLoading: false,
            resultMsg: {},
            isSuccess: false
        }

        this.ValidSubmitHandler = this.ValidSubmitHandler.bind(this);
        this.InvalidSubmitHandler = this.InvalidSubmitHandler.bind(this);
    }

    ValidSubmitHandler(e, values) {
        this.setState({
            messageSubmitted: true,
            isLoading: true
        });

        let _this = this;
        let { name, email, message } = values;

        fetch('/api/contact', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            })
        }).then(function (response) {
            switch (response.status) {
                case 200:
                    _this.setState({
                        isSuccess: true
                    });
                    break;
                case 400:
                    _this.setState({
                        isSuccess: false
                    });
                    break;
                default:
                    _this.setState({
                        isSuccess: false
                    });
                    break;
            }
            return response.json();
        }).then(function (data) {

            _this.setState({
                isLoading: false,
                resultMsg: data
            });
            console.log(data);
        });

    }

    InvalidSubmitHandler(e) { }

    componentDidMount() {
        this.props.onPageSelected(Page.CONTACT);
    }

    render() {

        if (this.state.isLoading) {
            return (
                <div className="contact">
                    <Loader />
                </div>
            );
        } else if (this.state.messageSubmitted) {

            const messages = Object.values(this.state.resultMsg);
            return (
                <div className="contact">
                    <FormSubmitResult messages={messages} isSuccess={this.state.isSuccess} />
                </div>
            );
        } else {
            return (
                <div className="contact">
                    <ContactForm ValidSubmitHandler={this.ValidSubmitHandler} />
                </div>
            );
        }
    }
}

const mapStateToProps = state => {

    return {
        selectedTags: state.profile.selectedTags
    };
}

const mapDispatchToProps = dispatch => {

    return {
        onPageSelected: (selectedPg) => dispatch(Actions.updatePage(selectedPg))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);