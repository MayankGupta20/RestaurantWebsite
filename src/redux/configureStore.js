import {createStore,combineReducers,applyMiddleware} from 'redux';
//applyMiddleware is to make use of thunk
import {Dishes} from "./dishes";
import {Promotions} from "./promotions";
import {Comments} from "./comments";
import {Leaders} from "./leaders";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = ()=> {
	const store = createStore(
		combineReducers({
			dishes:Dishes,
			promotions:Promotions,
			leaders:Leaders,
			comments:Comments
		}),
		applyMiddleware(thunk, logger)
		);
	return store;
}