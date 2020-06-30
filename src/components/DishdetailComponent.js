import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardBody,CardImgOverlay,CardText} from 'reactstrap';

class Dishdetail extends Component{
	constructor(props){
		super(props);
	}

	renderDish(selectedDish){
		if(selectedDish!=null){
			return(
				<div className ="col-12 col-md-5 m-1">
				<Card key={selectedDish.id}>
					<CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}>
					</CardImg>
					<CardBody>
						<CardTitle>{selectedDish.name}</CardTitle>
						<CardText>{selectedDish.description}</CardText>
					</CardBody>
				</Card>
				</div>
		);
	}else{
		return(
			<div></div>
		)
	}
	
	
	}
	renderComment(comments){
		if(comments!=null){
			const comment = comments.map((cmt)=>{
					var date = cmt.date.split("T");
					//{console.log(date);}
				
					return(
						
							<div key={cmt.id} tag="li">
								
								<p >{cmt.comment}</p>
								<p>--{cmt.author} , {date[0]}</p>
							</div>
						
						);
					}
				);
			return(
				<div className="col-12 col-md-5 m-1">
					<h4>Comments</h4>
					{comment}
				</div>
			)
		}else{
			return(
				<div></div>
			)
		}
	}


	render(){
		const selectedDish = this.props.selectedDish;
		if(selectedDish==null){
			return(
			<div></div>
			)
		}
		const dish = this.renderDish(selectedDish);
		const comment = this.renderComment(selectedDish.comments);
		
			return(
						<div className="container">
							<div className="row">
								
									{dish}
									{comment}
								
							</div>
						</div>
					
					);

	}
}

export default Dishdetail;
