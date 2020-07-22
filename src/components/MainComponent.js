import React from 'react';
import {Component} from 'react';



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
import {postComment,fetchDishes,fetchPromos,fetchComments,fetchLeaders} from '../redux/ActionCreators';
import {postFeedback} from "../redux/ActionCreators";
import {TransitionGroup,CSSTransition} from 'react-transition-group';

const mapDispatchToProps=(dispatch) =>{
  return{
    postComment : (dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
    fetchDishes : () => {dispatch(fetchDishes())},
    resetFeedbackForm : () => {dispatch(actions.reset('feedback'))},
    fetchPromos : () =>{dispatch(fetchPromos())},
    fetchComments:()=> {dispatch(fetchComments())},
    fetchLeaders:()=>{dispatch(fetchLeaders())},
    postFeedback:(feedback)=>dispatch(postFeedback(feedback))
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


  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
    this.props.fetchLeaders();
  }

  render(){

  const DishWithId = ({match}) => {
    return(
      <DishDetail selectedDish={this.props.dishes.dishes.filter((dish) => dish.id===parseInt(match.params.dishId,10))[0]} 
         comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
         postComment={this.props.postComment}
         commentErrMess ={this.props.comments.errMess}
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
              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leaderErrMess = {this.props.leaders.errmess}
              leaderLoading={this.props.leaders.isLoading} />
      )
    }
      return(
    
    <div className="App">
          <Header />

          {/*<Menu  dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)}/>
          <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]} />*/}
           <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={400}>
          <Switch location={this.props.location}>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route path="/contact" component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
            <Route path="/aboutus" component={()=> <About leaders={this.props.leaders.leaders}  />} />
            <Redirect to="/home" />
          </Switch>
          </CSSTransition>
          </TransitionGroup>
          <Footer />
    </div>
  );
  };
 
}

export default withRouter(connect(mapStatetoProps,mapDispatchToProps)(Main));
