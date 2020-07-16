import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardBody,CardImgOverlay,CardText} from 'reactstrap';
import {Breadcrumb,BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

import {Button,Label,Row,Col} from "reactstrap";
import {Modal,ModalBody,ModalHeader} from "reactstrap";
import {LocalForm,Control,Errors} from "react-redux-form";
import  Loading from "./LoadingComponent";
const minlength = (len) => (val) => val&&val.length>len;
const maxlength = (len) => (val) => !(val)||val.length<=len;
class CommentForm extends Component{
	constructor(props){
		super(props);

		this.state={
			isCommentModalOpen:false
		}
		this.toggleCommentModal=this.toggleCommentModal.bind(this);
		this.handleSubmitComment=this.handleSubmitComment.bind(this);
	}
	toggleCommentModal(){
		this.setState({
			isCommentModalOpen:!this.state.isCommentModalOpen
		})
	}
	handleSubmitComment(values){
		this.toggleCommentModal();
		//alert(JSON.stringify(values));
		//alert(JSON.stringify(this.props));
		this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
	}
	render(){

		return(
			<div>
			<div>
				<Button outline onClick={this.toggleCommentModal}><span><i class="fa fa-pencil" aria-hidden="true"></i></span> Submit Comment</Button>
			</div>
			<Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
						<ModalHeader toggle={this.toggleCommentModal}>
							Submit Comment
						</ModalHeader>
						<ModalBody>
							<div className="container">
							<LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
								<Row className="form-group">
									<Label htmlfor="rating">Rating</Label>
								</Row>
								<Row className="form-group">
									
										<Control.select model=".rating" name="rating" id="rating" className="form-control">
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
										</Control.select>
									
								</Row>
								<Row className="form-group">
									<Label htmlfor="author" >Your Name</Label>
								</Row>
								<Row className="form-group">
									<Control.text className="form-control" model=".author" 
										id="author" name ="author" Placeholder="Your name"
										validators = {{minlength:minlength(2),maxlength:maxlength(15)}}/>
									<Errors
										className="text-danger"
										show="touched"
										model=".author"
										messages={
											{
												minlength:"Must be greater than 2 characters",
												maxlength:"Must be 15 characters or less"
											}
										}
									/>

									
								</Row>
								<Row className="form-group">
									<Label htmlfor="comment" >Comment</Label>
								</Row>
								<Row className='form-group'>
									<Control.textarea model=".comment" className="form-control" name="comment"
										id="comment" rows="6" />
								</Row>
								<Row className="form-group">
								<Button color="primary">Submit</Button>
								</Row>
							</LocalForm>
							</div>
						</ModalBody>
			</Modal>
			</div>
		);
		
	}
	
}

function RenderDish({selectedDish}){
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

function RenderComment({comments,addComment,dishId}){
		if(comments!=null){
			const comment = comments.map((cmt)=>{
					//var date = cmt.date.split("T");
					//{console.log(date);}
				
					return(
						
							<div key={cmt.id} tag="li">
								
								<p >{cmt.comment}</p>
						
		<p>--{cmt.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</p>
							</div>
						
						);
					}
				);
			return(
				<div className="col-12 col-md-5 m-1">
					<h4>Comments</h4>
					{comment}
					<CommentForm dishId={dishId} addComment={addComment}/>
				</div>
			)
		}else{
			return(
				<div></div>
			)
		}
		
	}


function DishDetail(props){
		
	if(props.isLoading){
        return(
            <div className="container">
                <div className="col-12">
                    <Loading />
                </div>
            </div>
        )
    }
    else if(props.errMess){
        return(
            <div>
                <h4>{props.errMess}</h4>
            </div>
        )
    }
	else if(props.selectedDish==null){
			return(
			<div></div>
			)
		}
		return(
					<div className="container">
						<div className="row m-1" >
								<Breadcrumb>
										<BreadcrumbItem><Link to ="/menu">Menu</Link></BreadcrumbItem>
										<BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
								</Breadcrumb>
						</div>
						<div className="row">
							<RenderDish selectedDish={props.selectedDish} />
							<RenderComment comments={props.comments} dishId={props.selectedDish.id} 
								addComment={props.addComment} />
									
								
						</div>
					</div>
					
					
					
		);
}

export default DishDetail;
