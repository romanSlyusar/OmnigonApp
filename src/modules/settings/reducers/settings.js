import * as actions from "../actions";

const initialState = {
    feedURL: 'kindle.json',
    numberOfPosts: '50',
    updateInterval: '300000',
};

const settings = (state = initialState, action) => {
    switch (action.type) {
        case actions.SETTINGS.REQUEST:
            return {
                ...action.request,

            };
        default:
            return state
    }
};

export default settings;
