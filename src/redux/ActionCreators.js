import * as ActionTypes from './ActionTypes';

export const addComment = (DishId,rating,author,comment) => ({
		
		type : ActionTypes.ADD_COMMENT,
		payload:{
		dishId:DishId,
		rating:rating,
		author:author,
		comment:comment
		}

	
} );