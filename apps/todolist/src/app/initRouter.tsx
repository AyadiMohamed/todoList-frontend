import {
    browserHistory,
    createRouterState,
    HistoryAdapter,
    RouterStore,
} from 'mobx-state-router';
import { MembersPage, TasksPage } from '../pages';

const notFound = createRouterState('notFound');

export const routes = [

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
    tasks : <TasksPage/>,
    members : <MembersPage/>,
};

export function initRouter(){
    const routeStore = new RouterStore(routes, notFound);

    const historyAdapter = new HistoryAdapter(routeStore, browserHistory);
    historyAdapter.observeRouterStateChanges();

    return routeStore;
}

