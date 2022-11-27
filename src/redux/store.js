import { applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  charactersReducer  from './characters.redux'
import thunk from 'redux-thunk'
import editionsReducer from './editions.redux';



const rootReducer = combineReducers({
    characters: charactersReducer,
    editions: editionsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store