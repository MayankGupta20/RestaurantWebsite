import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
            Button, Form, FormGroup, Label, Input, Col ,FormFeedback} from 'reactstrap';
import {Link} from "react-router-dom";
  

class Contact extends Component{

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched:{
            	firstname:false,
            	lastname:false,
            	telnum:false,
            	email:false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur=(field)=>(evt)=>{
    	
    	this.setState({
			touched:{...this.state.touched,[field]:true}  
    	})

    	
    }

    validate(firstname,lastname,telnum,email){
    	const errors = {
    		firstname:"",
    		lastname:"",
    		telnum:"",
    		email:""
    	}
    	if(this.state.touched.firstname &&  firstname.length<3 ){
    		errors.firstname="First Name should be greater than 3 characters";
    	}else if(this.state.touched.firstname && firstname.length>=10){
    		errors.firstname = "First Name should be less than 10 characters";
    	}

    	if(this.state.touched.lastname &&  lastname.length<3 ){
    		errors.lastname="Last Name should be greater than 3 characters";
    	}else if(this.state.touched.lastname && lastname.length>=10){
    		errors.lastname = "Last Name should be less than 10 characters";
    	}
    	const reg = /^[0-9]/;
    	if(this.state.touched.telnum &&  !reg.test(telnum) ){
    		errors.telnum="Tel number should contain only numbers ";
    	}

    	const reg_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    	if(this.state.touched.email && !reg_email.test(email)){
    		errors.email="Please provide correct email address";
    	}

    	return(errors);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }



	render(){
		const errors = this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
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

						<a type="button" className="btn btn-info"><i class="fa fa-skype" aria-hidden="true"></i> Skype</a>

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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname==="" && this.state.firstname!==""}
                                        invalid={errors.firstname!==""}
                                        onBlur={this.handleBlur("firstname")}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname==="" && this.state.lastname!==""}
                                        invalid={errors.lastname!==""}
                                        onBlur={this.handleBlur("lastname")}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        value={this.state.telnum}
                                        valid={errors.telnum==="" && this.state.telnum!==""}
                                        invalid={errors.telnum!==""}
                                        onBlur={this.handleBlur("telnum")}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email==="" && this.state.email!==""}
                                        invalid={errors.email!==""}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>

                    </div>
               </div>


		</div>
	)
	}
	
}

export default Contact;