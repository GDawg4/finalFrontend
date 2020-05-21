import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import reducer from "./reducers";
import {AsyncStorage} from 'react-native';

import mainSaga from './sagas';


export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const persistedReducer = persistReducer(
        {
            key: 'rootx',
            storage:AsyncStorage,
            whitelist: ['auth'],
        },
        reducer,
    );

    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware),
    );

    const persistor = persistStore(store);

    sagaMiddleware.run(mainSaga);

    return { store, persistor };
}
