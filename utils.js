import config from './config.js';

export const parseUrl = (relativeUrl) => new URL(relativeUrl, config.baseUrl);

export const getJsonError = (message) => ({message});
