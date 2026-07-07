import 'core-js/stable';
import 'regenerator-runtime/runtime';
import ViewCreate from './scriptViewCreate';
import ModelAddTask from './scriptModelAddTask';
import Controller from './scriptController';
import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', function () {
  const view = new ViewCreate();
  const model = new ModelAddTask();
  const app = new Controller(view, model);
  app.appInit();
});
