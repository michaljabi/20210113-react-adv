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
import AppStartUsingHooks from './e01-start-using-hooks/AppStartUsingHooks'
import AppMyOwnHook from './e02-my-own-hook/AppMyOwnHook'
import AppForTesting from './f02-testing-components/AppForTesting'
import AppMyTddComponent from './f03-test-like-tdd/AppMyTddComponent'

const Run = {
  Task1: AppTheStateProblem,
  Task2: AppFunctionAsAChildComponent,
  Task3: AppRenderMyProps,
  Task4: AppWithHigherOrderComponents,
  Task5: AppContextCommunication,
  Task6: AppUsingMobx,
  Task7: AppUsingMobxMoreComplex,
  Task8: AppStartUsingHooks,
  Task9: AppMyOwnHook,
  Task10: AppForTesting,
  Task11: AppMyTddComponent,
}

ReactDOM.render(
  <React.StrictMode>
    <Run.Task1 />
  </React.StrictMode>,
  document.getElementById('root')
);
