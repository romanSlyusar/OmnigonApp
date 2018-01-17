import AppNavigator from "../navigation/navigationStack";
const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams("settings")
);

const navigationReducer = (state = initialState, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

export default navigationReducer;
