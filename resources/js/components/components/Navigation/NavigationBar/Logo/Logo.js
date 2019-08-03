import React from 'react';

import VCLogo from '../../../../Assets/images/logo-doublebold-white-colour.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo">
        <img src={VCLogo} alt="Vitor R. Campos" />
    </div>
);

export default logo;