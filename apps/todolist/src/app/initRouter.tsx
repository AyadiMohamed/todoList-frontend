import {
    browserHistory,
    createRouterState,
    HistoryAdapter,
    RouterStore,
} from 'mobx-state-router';
import { MembersPage, TasksPage } from '../pages';
import HomePage from '../pages/HomePage';
import Sign from '../pages/Sign';

const notFound = createRouterState('notFound');

export const routes = [
    {
      name : 'sign',
      pattern: '/signin-oidc',
    },
    {
        name : 'home',
        pattern: '/',
    
    },
    {
        name : 'tasks',
        pattern : '/tasks'
    },
    {
        name : 'members',
        pattern : '/members'
    },

];

export const viewMap = {
    sign : <Sign/>,
    home : <HomePage/>,
    tasks : <TasksPage/>,
    members : <MembersPage/>,
};

export function initRouter(){
    const routeStore = new RouterStore(routes, notFound);

    const historyAdapter = new HistoryAdapter(routeStore, browserHistory);
    historyAdapter.observeRouterStateChanges();

    return routeStore;
}

