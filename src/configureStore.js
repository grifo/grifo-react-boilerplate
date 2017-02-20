import { createStore } from 'redux';
// import throttle from 'lodash/throttle';
import sampleApp from './reducers';

const configureStore = () => {
    const store = createStore(sampleApp);

    /*
    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos,
        });
    }, 1000));*/

    return store;
};

export default configureStore;
