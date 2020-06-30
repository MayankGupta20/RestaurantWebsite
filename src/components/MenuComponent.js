


import React , {Component} from 'react';
import {Card,CardImg,CardTitle,CardBody,CardImgOverlay,CardText} from "reactstrap";

import Dishdetail from "./DishdetailComponent";

class Menu extends Component{
  constructor(props){
    super(props);
  
  this.state ={
    selectedDish:null
  };

}
 onDishSelect(dish){
    this.setState(
      {selectedDish:dish}
      )
  }

 /* renderDish(dish){
    if(dish!=null){
      return(
        <div>
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        </div>

        )
    }
  }*/
  render(){
    const menu = this.props.dishes.map((dish) => {
      return(
        <div className="col-12 col-md-5 m-1">
    
          <Card key={dish.id}  onClick={()=> this.onDishSelect(dish) }>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
              <CardImgOverlay className="ml-5">
                  {dish.name}
            </CardImgOverlay>
          </Card>

        </div>
        );
    });
    return(
      <div className="container">
      <div className="row">
        {menu}
        
      </div> 
      {/*    <div className="row" >
                <div className="col-12 col-md-5 m-1">
                      {this.renderDish(this.state.selectedDish)}
                </div>
            </div>     
        */}
        
          <div className="row">{<Dishdetail selectedDish={this.state.selectedDish} />}</div>
      </div>
    );
  }
}

export default Menu;
