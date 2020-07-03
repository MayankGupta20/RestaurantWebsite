import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardBody,CardImgOverlay,CardText} from 'reactstrap';
import {Breadcrumb,BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

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

function RenderComment({comments}){
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
				</div>
			)
		}else{
			return(
				<div></div>
			)
		}
	}


function DishDetail(props){
		const selectedDish = props.selectedDish;
		if(selectedDish==null){
			return(
			<div></div>
			)
		}
		return(
					<div className="container">
						<div className="row m-1" >
								<Breadcrumb>
										<BreadcrumbItem><Link to ="/menu">Menu</Link></BreadcrumbItem>
										<BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
								</Breadcrumb>
						</div>
						<div className="row">
							<RenderDish selectedDish={selectedDish} />
							<RenderComment comments={props.comments} />
									
								
						</div>
					</div>
					
		);
}

export default DishDetail;
