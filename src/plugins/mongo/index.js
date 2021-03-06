import * as _commands from './commands';
import * as _tasks from './command-handlers';
import _validator from './validate';

export const description = 'Commands to manage MongoDB';
export let commands = _commands;
export let tasks = _tasks;
export const validate = {
  mongo: _validator
};

export const hooks = {
  'post.default.setup'(api) {
    const config = api.getConfig();
    if (config.mongo) {
      return api.runCommand('mongo.setup').then(() => api.runCommand('mongo.start'));
    }
  }
};
