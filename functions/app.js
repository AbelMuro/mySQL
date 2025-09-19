const serverless = require('serverless-http');
const app = require('../src/index');

const handler = serverless(app);

module.exports.handler = async (e, context) => {
    const result = await handler(e, context);
    return result;
};