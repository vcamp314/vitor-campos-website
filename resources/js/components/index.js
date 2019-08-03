import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';
import headerStateReducer from './store/reducers/headerState';
import profileStateReducer from './store/reducers/profileState';

const rootReducer = combineReducers({
    header: headerStateReducer,
    profile: profileStateReducer
});

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

const app = (
    <Provider store={store}>
        <BrowserRouter>    
            <App />    
        </BrowserRouter>        
    </Provider>



);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
