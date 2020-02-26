import React from "react";
import {withRouter} from "react-router-dom"

import DefaultPizza from "../../assets/images/error-sadPizza.jpg";
import SpecialOffer from "../../assets/images/special-offer-logo-png-4.png";

const BoardSingleItem = (props) => {
console.log(props)
  return (
    <div className="col-12 pizzas_item__holder" onClick={() => props.history.push(`/pizza/${props.id}`)}>
      <img width={130} height={130} src={DefaultPizza} alt={"pizza-img"}/>
      <div className="pizzas_item__description">
        <div className="pizzas_item__name">{props.data.name}</div>
        <div className="pizzas_item__ingredients">
          {
            props.data.ingredients.map(ing => {
              return (
                <span key={ing._id}>{ing.name}</span>
              )
            })
          }
        </div>
        <div className="pizzas_item__price">{props.data.price}</div>
        <img width={70} height={70} className="pizzas_item__img-offer" src={SpecialOffer} alt="special-offer"/>
      </div>
    </div>
  );
};

export default withRouter(BoardSingleItem);
