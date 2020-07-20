
import * as ACTION_TYPE from "./ActionTypes";
export const Comments = (state={
	
	errMess:null,comments:[]
	},action) => {
	switch(action.type){
		case ACTION_TYPE.ADD_COMMENT:
			const comment = action.payload;
			comment.id=state.comments.length;
			comment.date = new Date().toISOString();
			console.log("Comment: ", comment);
			return {...state,comments:state.comments.concat(comment)};

		case ACTION_TYPE.ADD_COMMENTS:
			return{...state,errMess:null,comments:action.payload}
		case ACTION_TYPE.COMMENTS_FAILED:
			return{...state,errMess:action.payload}

		case ACTION_TYPE.COMMENTS_LOADING:
			return{...state,errMess:null,comments:[]}
		default:
			return(state) 
}
}