import { useReducer, useState } from "react";

const reducer = (prev, { type, step }) /** オブジェクト　　action部分 */ => {
  switch (type) {
    case "+":
      return prev + step;
    case "-":
      return prev - step;
    default:
      throw new Error("不明なactionです。");
  }
};

// POINT useReducerとuseStateの違い
const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer(reducer, 0);

  const countUp = () => {
    setState((prev) => ++prev);
  };

  const countDown = () => {
    setState((prev) => --prev);
  };

  // dispatchを使うだけ
  // 状態と処理の分離ができる
  const rcountUp = () => {
    dispatch({ type: "+", step: 10 });
  };

  const rcountDown = () => {
    dispatch({ type: "-", step: 10 });
  };

  return (
    <>
      <div>
        <h2>useState</h2>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
      </div>
      <div>
        <h2>useReducer</h2>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
