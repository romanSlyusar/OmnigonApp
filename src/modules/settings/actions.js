import { createRequestTypes } from '../../helpers/constants';

export const SETTINGS = createRequestTypes('SETTINGS');

export const settings = {
    request: request => ({type: SETTINGS.REQUEST, request}),
    success: response => ({type: SETTINGS.SUCCESS, response}),
    error: error => ({type: SETTINGS.FAILURE, error})
};
