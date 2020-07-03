import React from 'react';
import {Component} from 'react';


import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import {DISHES} from "../shared/dishes";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from "./HomeComponent";
import {Switch,Redirect,Route} from "react-router-dom";
import Contact from "./ContactComponent";

import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,

      promotions:PROMOTIONS,
      leaders:LEADERS,
      comments:COMMENTS
    };
  };



  render(){

  const DishWithId = ({match}) => {
    return(
      <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id===parseInt(match.params.dishId,10))[0]} 
         comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
  };

    const HomePage = () => {
      return(
        <Home  dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
      )
    }
      return(
    
    <div className="App">
          <Header />
   
          {/*<Menu  dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)}/>
          <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]} />*/}
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
    </div>
  );
  };
 
}

export default Main;
