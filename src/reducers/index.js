import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import navigationReducer from "./navigationReducer";
import posts from '../modules/screen1/reducers';
import settings from '../modules/settings/reducers';

const reducers = Object.assign(
    {
        nav: navigationReducer,
        form: formReducer,
    },
    posts,
    settings,
);

export default combineReducers(reducers);


