import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import dishReducer from '../reducers/dishReducer'
import topRankReducer from '../reducers/topRankReducer'


const configStore = () => {
    const store = createStore(combineReducers({
        dish : dishReducer,
        topRank : topRankReducer
    }), applyMiddleware(thunk))
    return store
}

export default configStore 
