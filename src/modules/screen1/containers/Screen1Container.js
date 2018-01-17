import { connect } from 'react-redux';
import * as Actions from '../actions';
import Component from '../components/Screen1';

const mapStateToProps = state => ({
    posts: state.posts,
    settings: state.settings,
    isFetching: state.posts.isFetching
});

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts(numberOfPosts, stream_name) {
            dispatch(Actions.posts.request({
                limit: numberOfPosts
            }, stream_name ))
        },
        // cancel() {
        //     dispatch(Actions.posts.cancel())
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
