import React from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from "./reducers";
import { useReducer } from "react";

function App() {
  const [state, dispatchState] = useReducer(reducer, initialState);
 //Uygulama state'ine ve dispatch fonksiyonuna erişmek için useReducer hookunu kullanın.

 //const addOneHandler = (e) => {
  //dispatchState({ type: "ADD_ONE"});
//};
  const onClickHandler = (e) => {
    dispatchState({ type: "APPLY_NUMBER", payload: Number(e.target.value )});
  };

  const operationChangeHandler = (e) => {
    dispatchState({ type: "CHANGE_OPERATION", payload: Number(e.target.value) });
  };

  const onClickClearOperation = () => {
    dispatchState({ type: "CLEAR_DISPLAY" });
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton  value={"M+"} />
              <CalcButton  value={"MR"} />
              <CalcButton  value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={onClickHandler} value={1} />
              <CalcButton onClick={onClickHandler} value={2} />
              <CalcButton onClick={onClickHandler} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={onClickHandler} value={4} />
              <CalcButton onClick={onClickHandler} value={5} />
              <CalcButton onClick={onClickHandler} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={onClickHandler} value={7} />
              <CalcButton onClick={onClickHandler} value={8} />
              <CalcButton onClick={onClickHandler} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={operationChangeHandler} value={"+"} />
              <CalcButton onClick={operationChangeHandler} value={"*"} />
              <CalcButton onClick={operationChangeHandler} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={onClickClearOperation} value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
