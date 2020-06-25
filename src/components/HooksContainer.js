import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { buyCake } from '../redux';
 const CakeHooks= (props) => {
  const numoFCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Number of cakes - {numoFCakes}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "BUY_CAKE",
            payload: 1
          })
        }
      > buy cakes
      </button>
    </div>
  );
};


export default CakeHooks;
