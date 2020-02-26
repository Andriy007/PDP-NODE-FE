import React,  { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {fetchItemsRequest} from "../../redux-saga/board/boardActions";

import BoardSingleItem from './BoardSingleItem'

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import LogOutImg from "../../assets/images/red-log-off-icon-11.png"

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(5),
      justifyContent: "space-between"
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const MainBoard = (props) => {

  const count = 5;

  const classes = useStyles();
  const [page, setPage] = useState(+props.currentPage || 1);

  const handleChangePagination = (event, value) => setPage(value);

  const [priceSort, setPriceSort] = useState({
    price: '',
    name: 'Price',
  });

  const handleChangeSelect = name => event => {
    setPriceSort({
      ...priceSort,
      [name]: event.target.value,
    });
  };

  const searchQuery = {
    page: page,
    count: count,
    price_ordering: priceSort.price
  };

  //fetch all pizzas
  useEffect(() => {
    props.fetchPizzas(searchQuery)
  }, [page, priceSort]);

  const logOut = () => {
    localStorage.clear();
    props.history.push('/')
  };


  return (
    <div className="row">
        <div className="col-2 offset-10">
          <img style={{cursor: "pointer"}} width={60} height={60} onClick={logOut} src={LogOutImg} alt="log-out"/>
      </div>
      <div className="col-12 d-flex justify-content-center title"><h1>Maybe the best pizza you've ever eaten <span>👌</span></h1></div>
      <div className="col-3 offset-9">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Price</InputLabel>
          <Select
            native
            value={priceSort.price}
            onChange={handleChangeSelect('price')}
            inputProps={{
              name: 'price',
              id: 'price-native-simple',
            }}
          >
            <option value="" />
            <option value={"ASC"}>Price(Low to High)</option>
            <option value={"DESC"}>Price(High to Low)</option>
          </Select>
        </FormControl>
      </div>
      <div className="pizza-items-wrapper col-md-10 offset-md-1">
        {
          props.list.map( (el) => {
            return (
              <BoardSingleItem
                id={el._id}
                key={el._id}
                data={el}
              />
            )
          })
        }
      </div>
      <div className={`col-md-6 offset-md-3 ${classes.root}`}>
        <Pagination count={props.pages} page={page} onChange={handleChangePagination} />
      </div>
    </div>
  );
};

export default connect(
  state => state.boardItems,
  dispatch => ({
    fetchPizzas: payload => dispatch(fetchItemsRequest(payload)),
  })
)(MainBoard);
