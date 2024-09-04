import NewTaskButtonView from './view/new-task-button-view';
import FilterView from './view/filter-view';
import { render } from './render';
import BoardPresenter from './presenter/board-presenter';
import TasksModel from './model/tasks-model';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');
const tasksModel = new TasksModel();
const boardPresenter = new BoardPresenter({
  boardContainer: siteMainElement,
  tasksModel,
});

render(new NewTaskButtonView(), siteHeaderElement);
render(new FilterView(), siteMainElement);

boardPresenter.init();
