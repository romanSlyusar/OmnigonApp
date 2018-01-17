import * as actions from "../actions";

const initialState = {
    isFetching: false,
    list: [],
};

const posts = (state = initialState, action) => {
    switch (action.type) {
        /**
         * Success
         */
        case actions.POSTS.SUCCESS:
            return {
                ...state,
                list: action.response,
                isFetching: false
            };

        /**
         * Fails
         */
        case actions.POSTS.FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isFetching: false
            };

        /**
         * Requests
         */
        case actions.POSTS.REQUEST:
            return {
                ...state,
                isFetching: true
            };


        default:
            return state
    }
};

export default posts;
