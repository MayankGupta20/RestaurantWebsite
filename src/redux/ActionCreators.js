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
		.then(response=>{
				if(response.ok){
					return response
				}
				else{
					var error = new Error('Error '+response.status+':'+response.statusText);
					error.response=response;
					throw(error);
				}
			},
			error => {
				var error = new Error(error.message);
				throw error;
			}
			
		)
		.then(response=>response.json())
		.then(dishes=>dispatch(addDishes(dishes)))
		.catch(error=>dispatch(dishesFailed(error.message)))
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
		.then(response=>{
				if(response.ok){
					return response
				}
				else{
					var error = new Error('Error '+response.status+':'+response.statusText);
					error.response=response;
					throw(error);
				}
			},
			error => {
				var error = new Error(error.message);
				throw error;
			}
			
		)
		.then(response=>response.json())
		.then(data=>dispatch(addPromos(data)))
		.catch(error=>dispatch(PromosFailed(error.message)))
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
export const addComment = (comment) => ({
		
	type : ActionTypes.ADD_COMMENT,
	payload:comment


} );

//postComment thunk to post comment to server
export const postComment = (DishId,rating,author,comment) => (dispatch) =>{
	const newComment = {
		dishId:DishId,
		rating:rating,
		author:author,
		comment:comment
	}
	newComment.date = new Date().toISOString();
	fetch(baseUrl+'comments',{
		method:"POST",
		body:JSON.stringify(newComment),
		headers:{
			"Content-Type":"application/json",
		},
		credentials:"same-origin"
	})
		.then(response=>{
			if(response.ok){
				return response
			}
			else{
				var error = new Error('Error '+response.status+':'+response.statusText);
				error.response=response;
				throw(error);
			}
		},
		error => {
			//var error = new Error(error.message);
			throw error;
		}
	
		)
	.then(response=>response.json())
	.then(data=>dispatch(addComment(data)))
	.catch(error =>  { console.log('post comments', error.message); 
		alert('Your comment could not be posted\nError: '+error.message); });

}

//export const fetchComments = () => (dispatch) => dispatch(addComments(COMMENTS));
	//dispatch(addComments(COMMENTS));
export const fetchComments= ()=>(dispatch) =>{
	fetch(baseUrl+'comments')
	.then(response=>{
			if(response.ok){
				return response
			}
			else{
				var error = new Error('Error '+response.status+':'+response.statusText);
				error.response=response;
				throw(error);
			}
		},
		error => {
			var error = new Error(error.message);
			throw error;
		}
		
	)
	.then(response=>response.json())
	.then(data=>dispatch(addComments(data)))
	.catch(error=>dispatch(CommentsFailed(error.message)))
}

export const CommentsFailed =(errmess) =>({
type:ActionTypes.COMMENTS_FAILED,
payload: errmess
});

export const addComments = (comments) =>({
type:ActionTypes.ADD_COMMENTS,
payload: comments
});
