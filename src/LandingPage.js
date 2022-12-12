import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy_Cake, buy_IceCream, buy_Chocolates } from "./Reducers/Reducer";
export const LandingPage = () => {
  const output = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <p>
          {output.cake.noOfCakes <= 0 ? "stock is over" : output.cake.noOfCakes}
        </p>
         <br />
        <button
          onClick={() => {
            dispatch(buy_Cake());
          }}
        >
          Buy Cake
        </button>
      </div>
      <br />
      <div>
        {output.icecreame.noOfIceCreame <= 0
          ? "Stock is over"
          : output.icecreame.noOfIceCreame}
        <br />
        <br />
        <button
          onClick={() => {
            dispatch(buy_IceCream());
          }}
        >
          Buy IceCream
        </button>
      </div>
      <br />
      <div>
        {output.chocolate.noOfChocolates <= 0
          ? "Stock is over"
          : output.chocolate.noOfChocolates}
        <br />
        <br />
        <button
          onClick={() => {
            dispatch(buy_Chocolates());
          }}
        >
          Buy chocolates
        </button>
      </div>
    </div>
  );
};
