import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import NotFound from '../view/Global/NotFound'


const MainRouter = (props) =>  {

    return(
        <React.Fragment>
            <PublicRoutes path="/auth"/>
            { props.isAuthenticated ? PrivateRoutes() : <Redirect to="/"/>}
        </React.Fragment>
    )
};


export default connect(
  state => ({ isAuthenticated: state.auth.isAuthenticated }),
  null
)(MainRouter);
