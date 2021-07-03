import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./ducks";

const store = createStore(
    rootReducer,
    composeWithDevTools()
)

window.getState = store.getState

export default store