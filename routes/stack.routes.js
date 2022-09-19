const express = require('express');
const stackRouter = express.Router();

const stackController = require('../controller/stack.controller');

stackRouter.post('/set-size', stackController.setsize);

stackRouter.post('/push', stackController.push);

stackRouter.delete('/pop', stackController.delete);

stackRouter.get('/display', stackController.display);

stackRouter.get('/get-stack-size', stackController.getStackSize);

module.exports = stackRouter;
