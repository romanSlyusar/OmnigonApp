import { call, put, take, fork } from 'redux-saga/effects';
import apiFetch from '../../api/';
import * as actions from './actions';

function* watchPosts() {
    while (true) {
        const {request, stream_name} = yield take(actions.POSTS.REQUEST);
        try {
            const posts = yield call(apiFetch, stream_name, {
                method: 'GET',
                query: request
            });
            yield put(actions.posts.success(posts));

        } catch (e) {
            yield put(actions.posts.error(e))
        }
    }
}

export default [
    fork(watchPosts),
];

