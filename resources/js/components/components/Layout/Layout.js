import React from 'react';
import NavHeader from '../../containers/Header/NavHeader';
import Footer from '../Footer/Footer';
const layout = (props) => (

    <React.Fragment>
        <NavHeader />
        <main role="main">
            {props.children}
        </main>
        <Footer />   
    </React.Fragment>

);

export default layout;