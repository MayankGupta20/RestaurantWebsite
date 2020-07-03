import React from 'react';
import {Card,CardImg,CardTitle,CardBody,CardImgOverlay,CardText,Breadcrumb,BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

function RenderMenuItem({dish}){
  return(
      
        <Card key={dish.id}>
          <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
              <CardImgOverlay className="ml-5">
                  {dish.name}
            </CardImgOverlay>
          </Link>
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
    
          <RenderMenuItem dish={dish}/>

        </div>
        );
    });
    return(
      <div className="container">
          <div className="row m-1" >
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Menu</BreadcrumbItem>
              </Breadcrumb>
          </div>
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
