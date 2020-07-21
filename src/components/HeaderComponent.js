import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron ,Nav ,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom";
import {Modal,ModalBody,ModalHeader,Button,Form,FormGroup,Label,Input} from 'reactstrap';
class Header extends Component {
  constructor(props){
    super(props);
     this.toggleNav = this.toggleNav.bind(this);
     this.toggleModal=this.toggleModal.bind(this);
     this.handleLogin=this.handleLogin.bind(this);
    this.state={

      isNavOpen:false,
      isModalOpen:false
    }
  }
   toggleNav(){
      this.setState({
        isNavOpen:!this.state.isNavOpen
      })
  }

  toggleModal(){
    this.setState({
      isModalOpen:!this.state.isModalOpen
    })
  }

  handleLogin(event){
    this.toggleModal();
    alert("Username "+this.username.value+" Password "+this.password.value+" check "+this.remember.checked);
    event.preventDefault();
  }

  render() {
    return(
    <React.Fragment>
                   <Navbar dark expand="md" sticky="top">
                    <div className="container">
                       <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav navbar className="ml-auto">
                              <NavItem>
                                <Button outline color="primary" onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                              </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                  <Label htmlfor="username" >Username</Label>
                  <Input type="text" id="username" name="Username" innerRef={(input) => this.username = input}></Input>
              </FormGroup>
               <FormGroup>
                  <Label htmlfor="password" >Password</Label>
                  <Input type="password"  id="password" name="password" innerRef={(input)=> this.password=input}></Input>
              </FormGroup>
               <FormGroup check>
                  <Label check >
                    <Input type="checkbox" name="remember" innerRef={(input)=> this.remember=input}></Input > Remember me
                  </Label>
                  
              </FormGroup>
              <FormGroup>
                  <Button type="submit" value="submit" color="primary">Login</Button>
                  
              </FormGroup>
            </Form>
          </ModalBody>
       </Modal>

    </React.Fragment>
    );
  }
}

export default Header;