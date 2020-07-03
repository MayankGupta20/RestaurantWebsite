import React from "react";

function Contact(props){
	return(
		<div className="container">
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
		</div>
	)
}

export default Contact;