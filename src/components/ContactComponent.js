import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
            Button, Label,Col,Row} from 'reactstrap';
import {Link} from "react-router-dom";
//import {Control , LocalForm ,Errors} from 'react-redux-form';
import {Control , Form ,Errors} from 'react-redux-form';

    const required = (val) => val &&  val.length;
    const minlength = (len) => (val) => val&&val.length>=len;
    const maxlength = (len) => (val) => !val||val.length<len;
    const isNumber = (val) => !(val)||!Number.isNaN(Number(val));
    const validEmail = (val) => !(val)||/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component{

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
  
    }


    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        //alert('Current State is: ' + JSON.stringify(values));
        this.props.postFeedback(values);
        this.props.resetFeedbackForm();
        
    }





	render(){
		//const errors = this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
		return(
		<div className="container">
				<div className="row m-1" >
								<Breadcrumb>
										<BreadcrumbItem><Link to ="/home">Home</Link></BreadcrumbItem>
										<BreadcrumbItem active>Contact us</BreadcrumbItem>
								</Breadcrumb>
						</div>
			<div className="row">
				<div className="col-12 col-md-6">
					<h3>Location Information</h3>
				</div>
				
			</div>
			<div className = "row">
				<div className="col-12 col-sm-4 offset-sm-1">
					<address>
						<h5>Our Address</h5><br />
						121, Clear Water bay Road <br />
						HONG KONG<br />
						<i class="fa fa-phone" aria-hidden="true">: +852 1234 5678</i><br />
						<i class="fa fa-suitcase" aria-hidden="true">: +853 1234 3421</i><br />
						<i class="fa fa-envelope" aria-hidden="true"><a href="mailto:confusion@food.net">: confusion@food.net</a></i><br />
					</address>
					<div className="btn-group ">
						<a type="button" className="btn btn-primary" href="tel:+85212345678"><i class="fa fa-phone" aria-hidden="true"></i> Call</a>

						<a type="button" className="btn btn-info" href="#"><i class="fa fa-skype" aria-hidden="true"></i> Skype</a>

						<a type="button" className="btn btn-success" href="mailto:confusion@food.net"><i class="fa fa-envelope" aria-hidden="true"></i> Email</a>
					</div>
					
				</div>
				<div className="col-12 col-sm-6 offset-sm-1">
					<h5>Map of our Location</h5>
				</div>

			</div>
			<hr />

                <div className="row row-content">
                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name" className="form-control"
                                        validators={{required,minlength : minlength(3), maxlength : maxlength(10)}}
                                        />
                                    <Errors 
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={
                                            {
                                                required:"Required ",
                                                minlength:"First name must be greater than 2 characters ",
                                                maxlength:"First name must be less than 10 characters "
                                            }
                                        }
                                    />
                                </Col>
                                
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name" className="form-control"
                                        validators={{required,minlength : minlength(3), maxlength : maxlength(10)}}
                                        />
                                    <Errors 
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={
                                            {
                                                required:"Required ",
                                                minlength:"Last name must be greater than 2 characters ",
                                                maxlength:"Last name must be less than 10 characters "
                                            }
                                        }
                                    />
                                    
                                </Col>                        
                            </Row>
                           <Row className="form-group">
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. number" className="form-control"
                                        validators={{required,minlength : minlength(10), maxlength : maxlength(11),isNumber}}/>
                                    <Errors 
                                        className="text-danger"
                                        show="touched"
                                        model=".telnum"
                                        messages={
                                            {
                                                required:"Required ",
                                                minlength:"Number should be 10 digit long",
                                                maxlength:"Number should be 10 digit long",
                                                isNumber:"Not a valid number"

                                            }
                                        }
                                    />    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control model=".email" id="email" name="email"
                                        placeholder="Email" className="form-control"
                                        validators={{required,validEmail}}/>
                                    <Errors
                                        className="text-danger"
                                        show="touched"
                                        model=".email"
                                        messages={
                                            {
                                                required:"Required valid email",
                                                validEmail :"Not a valid email"
                                            }
                                        }
                                     />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree"
                                                name="agree"
                                                className="form-check-input" /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12" className="form-control"
                                        ></Control.textarea>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>

                    </div>
               </div>


		</div>
	)
	}
	
}

export default Contact;