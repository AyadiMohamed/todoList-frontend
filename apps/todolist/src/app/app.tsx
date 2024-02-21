// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { RouterContext, RouterView } from 'mobx-state-router';
import { initRouter, viewMap } from './initRouter';

export function App() {
  const routerStore = initRouter();
  return (
    <RouterContext.Provider value={routerStore}>
    <RouterView viewMap={viewMap} />
 </RouterContext.Provider>
  );
}

export default App;
