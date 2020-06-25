import React from "react";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of iceCream - {props.pankaj} </h2>
      <button onClick={props.buyCake}>Buy Ice</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pankaj: state.ice.numOfIceCream
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () =>
      dispatch({
        type: "BUY_ICECREAM",
        payload: 1
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
