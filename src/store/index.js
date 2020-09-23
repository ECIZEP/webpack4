import { createStore, combineReducers } from 'redux';

function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function title(state = 'hello react redux', action) {
    switch(action.type) {
        case 'CHANGE':
            return action.title;
        default:
            return state;
    }
}


const store = createStore(combineReducers({ counter, title }));

store.subscribe(() => {
    console.log('store change', store.getState());
});

export default store;