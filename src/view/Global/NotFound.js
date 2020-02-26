import React from 'react';


const NotFound = props => (
  <div className="container-fluid not-found text-center">
    <h1 className="mt-5">Sorry, page not found!</h1>
    <p>Oh dear, it looks like this link is broken, don't worry we're onto it</p>
    <div className="row pt-3">
      <div className="col-md-4 col-5 offset-1 offset-md-2">
        <button onClick={() => props.history.goBack()}>Go Back</button>
      </div>
    </div>
  </div>
);

export default NotFound
