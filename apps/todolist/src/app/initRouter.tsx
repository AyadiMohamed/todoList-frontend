import {
    browserHistory,
    createRouterState,
    HistoryAdapter,
    RouterStore,
} from 'mobx-state-router';
import { MembersPage, TasksPage } from '../pages';
import HomePage from '../pages/HomePage';

const notFound = createRouterState('notFound');

export const routes = [

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

