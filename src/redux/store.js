import { applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  charactersReducer  from './characters.redux'
import thunk from 'redux-thunk'



const rootReducer = combineReducers({
    characters: charactersReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store