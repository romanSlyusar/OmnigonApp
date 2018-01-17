import { connect } from 'react-redux';
import * as Actions from '../actions';
import { reduxForm } from 'redux-form';
import { NavigationActions } from "react-navigation";
import Component from '../components/Settings';

const SettingsContainer = reduxForm({
    form: 'reviewAndActiveForm',
    enableReinitialize: true
})(Component);

const mapStateToProps = state => ({
    initialValues: state.settings
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (settings) =>{
            dispatch(Actions.settings.request(settings));
            const navigate = NavigationActions.navigate({
                routeName: "screen1",
            });
            dispatch(navigate);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
