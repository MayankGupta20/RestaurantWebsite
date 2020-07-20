import * as ActionTypes from './ActionTypes';
//import {DISHES} from "../shared/dishes";
//import {PROMOTIONS} from "../shared/promotions";
//import {COMMENTS} from "../shared/comments";

import {baseUrl} from '../shared/baseUrl';
//dishes
export const fetchDishes = () => (dispatch) =>{
	dispatch(dishesLoading(true));

	//setTimeout(()=>{
	//	dispatch(addDishes(DISHES))
	//},2000)
	fetch(baseUrl + 'dishes')
		.then(response=>response.json())
		.then(dishes=>dispatch(addDishes(dishes)));
};

export const dishesLoading = () =>({
	type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) =>({
	type:ActionTypes.DISHES_FAILED,
	payload: errmess
});

export const addDishes = (dishes) =>({
	type:ActionTypes.ADD_DISHES,
	payload: dishes
});


// Promotions

export const fetchPromos = () => (dispatch) =>{
	/*

	setTimeout(()=>{
		dispatch(addPromos(PROMOTIONS));
	},2000)*/
	dispatch(PromosLoading(true));
	fetch(baseUrl+'promotions')
		.then(response=>response.json())
		.then(data=>dispatch(addPromos(data)))
};

export const PromosLoading = () =>({
	type: ActionTypes.PROMOS_LOADING
});

export const PromosFailed = (errmess) =>({
	type:ActionTypes.PROMOS_FAILED,
	payload: errmess
});

export const addPromos = (promos) =>({
	type:ActionTypes.ADD_PROMOS,
	payload: promos
});

//leaders

//comments
export const addComment = (DishId,rating,author,comment) => ({
		
	type : ActionTypes.ADD_COMMENT,
	payload:{
	dishId:DishId,
	rating:rating,
	author:author,
	comment:comment
	}


} );

//export const fetchComments = () => (dispatch) => dispatch(addComments(COMMENTS));
	//dispatch(addComments(COMMENTS));
export const fetchComments= ()=>(dispatch) =>{
	fetch(baseUrl+'comments')
	.then(response=>response.json())
	.then(data=>dispatch(addComments(data)));
}

export const CommentsFailed =(errmess) =>({
type:ActionTypes.COMMENTS_FAILED,
payload: errmess
});

export const addComments = (comments) =>({
type:ActionTypes.ADD_COMMENTS,
payload: comments
});
