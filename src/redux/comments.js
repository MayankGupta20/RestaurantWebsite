import {COMMENTS} from "../shared/comments";
import * as ACTION_TYPE from "./ActionTypes";
export const Comments = (state=COMMENTS,action) => {
	switch(action.type){
		case ACTION_TYPE.ADD_COMMENT:
			const comment = action.payload;
			comment.id=state.length;
			comment.date = new Date().toISOString();
			console.log("Comment: ", comment);
			return state.concat(comment);
		default:
			return state 
}
}