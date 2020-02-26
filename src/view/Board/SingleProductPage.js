import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Select, MenuItem } from "@material-ui/core";



import DefaultPizza from "../../assets/images/error-sadPizza.jpg";
import boardApi from "../../api/board";
import {Controller, useForm} from "react-hook-form";
import {OrderPizza} from "../../redux-saga/board/boardActions";


const SingleProductPage =  (props) => {
  const [itemData, setItemData] = useState({});
  const [modal, setModal] = useState(false);
  console.log(itemData)

  useEffect(() => {
    boardApi.getSinglePizza(props.match.params.id)
      .then(resp => {
        setItemData(...resp.pizza)
      })
  }, []);

  const { register, handleSubmit, errors, control} = useForm();
  const onSubmit = data => {

    const orderData = {
      ...data,
      pizzaId: itemData._id
    };
    props.order(orderData);
    toggle();
  };

  const toggle = () => setModal(!modal);

  const renderModal = () => {
    return (
      <div>
        <Button color="danger" onClick={toggle}>Order</Button>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Ordering</ModalHeader>
          <ModalBody>
            <form className="d-flex flex-column px-5 pt-5 pb-0" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="password">Quantity</label>
              <Controller
                as={
                  <Select>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                }
                control={control}
                name="quantity"
                defaultValue={1}
                className="mb-2"
              />
              <input id="phone" type="tel" placeholder="Mobile number" name="phone" ref={register({required: true, minLength: 6, maxLength: 12})} />
              {errors.phone && <p className="error">Phone is required, min-length: 6</p>}
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSubmit(onSubmit)}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={DefaultPizza} alt="img"/>
        </div>
        <div className="col-12 col-md-6">
          <p>{itemData.name}</p>
          {
            itemData.ingredients ?
              itemData.ingredients.map((el, index) => {
                  return (
                    <p key={index}>{el.name}</p>
                  )
                })
                :
              null
          }
          <p>{itemData.price}</p>
        </div>
        {renderModal()}
      </div>
    </div>
  )
};

export default connect(
  null,
  dispatch => ({
    order: payload => dispatch(OrderPizza(payload)),
  })
)(SingleProductPage);


