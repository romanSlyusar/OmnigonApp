import { createRequestTypes } from '../../helpers/constants';

export const POSTS = createRequestTypes('POSTS');
POSTS.CANCEL = 'POSTS_CANCEL';

export const posts = {
    request: (request, stream_name) => ({type: POSTS.REQUEST, request, stream_name}),
    success: response => ({type: POSTS.SUCCESS, response}),
    error: error => ({type: POSTS.FAILURE, error}),
    cancel: () => ({type: POSTS.CANCEL}),
};
