import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import AppTheStateProblem from './a01-the-state-problem/AppTheStateProblem'
import AppFunctionAsAChildComponent from './b01-function-as-a-child-component/AppFunctionAsAChildComponent'
import AppRenderMyProps from './b02-render-props/AppRenderMyProps'
import AppWithHigherOrderComponents from './b03-higher-order-component/AppWithHigherOrderComponents'
import AppContextCommunication from './c01-context-communication/AppContextCommunication'
import AppUsingMobx from './c02-using-mobx/AppUsingMobx'
import AppUsingMobxMoreComplex from './c03-using-mobx-more-complex/AppUsingMobxMoreComplex'

const Run = {
  Task1: AppTheStateProblem,
  Task2: AppFunctionAsAChildComponent,
  Task3: AppRenderMyProps,
  Task4: AppWithHigherOrderComponents,
  Task5: AppContextCommunication,
  Task6: AppUsingMobx,
  Task7: AppUsingMobxMoreComplex,
}

ReactDOM.render(
  <React.StrictMode>
    <Run.Task1 />
  </React.StrictMode>,
  document.getElementById('root')
);
