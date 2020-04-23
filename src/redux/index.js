import { createStore, combineReducers, applyMiddleware } from 'redux'
import dummyReducer from './reducers/dummy'
import { thunk } from './middlewares'

const rootReducer = combineReducers({
    dummyReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store
    