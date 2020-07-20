import React from 'react';
import {Component} from 'react';


import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from "./HomeComponent";
import {Switch,Redirect,Route,withRouter} from "react-router-dom";
import Contact from "./ContactComponent";

import {connect} from 'react-redux';

import About from "./AboutComponent";
import {actions} from 'react-redux-form';
//importing action creator addComment
import {addComment,fetchDishes,fetchPromos,fetchComments} from '../redux/ActionCreators';

const mapDispatchToProps=(dispatch) =>{
  return{
    addComment : (dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment)),
    fetchDishes : () => {dispatch(fetchDishes())},
    resetFeedbackForm : () => {dispatch(actions.reset('feedback'))},
    fetchPromos : () =>{dispatch(fetchPromos())},
    fetchComments:()=> {dispatch(fetchComments())}
  }
  
}

const mapStatetoProps= state =>{
  return({
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders

  })

}

class Main extends Component{
  constructor(props){
    super(props);

  };

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
  }

  render(){

  const DishWithId = ({match}) => {
    return(
      <DishDetail selectedDish={this.props.dishes.dishes.filter((dish) => dish.id===parseInt(match.params.dishId,10))[0]} 
         comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
         addComment={this.props.addComment}
         commentErrMess ={this.props.comments.errmess}
         isLoading = {this.props.dishes.isLoading}
         errmess={this.props.dishes.errmess} />
    );
  };

    const HomePage = () => {
      console.log("selected dish : "+this.props.dishes.dishes.filter((dish) => dish.featured)[0]);
      return(
        
        <Home  dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishLoading ={this.props.dishes.isLoading}
              dishErrMess = {this.props.dishes.errmess}
              promotion={this.props.promotions.promos.filter((promo) => promo.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
      )
    }
      return(
    
    <div className="App">
          <Header />

          {/*<Menu  dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)}/>
          <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]} />*/}
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route path="/contact" component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm}  />} />
            <Route path="/aboutus" component={()=> <About leaders={this.props.leaders} />} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
    </div>
  );
  };
 
}

export default withRouter(connect(mapStatetoProps,mapDispatchToProps)(Main));
