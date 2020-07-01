


import React from 'react';
import {Card,CardImg,CardTitle,CardBody,CardImgOverlay,CardText} from "reactstrap";

function RenderMenuItem({dish,onClick}){
  return(
          <Card key={dish.id}  onClick={()=> onClick(dish.id) }>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
              <CardImgOverlay className="ml-5">
                  {dish.name}
            </CardImgOverlay>
          </Card>
  );

};

const Menu = (props)=>{


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
    const menu = props.dishes.map((dish) => {
      return(
        <div className="col-12 col-md-5 m-1">
    
          <RenderMenuItem dish={dish} onClick={props.onClick} />

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
       
        
          <div className="row">{<Dishdetail selectedDish={this.state.selectedDish} />}</div> */}
      </div>
    );
}

export default Menu;
