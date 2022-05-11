import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import JsxTsxExample from './JsxTsxExample';
// import Fc from './FunctionalComponents'
// import PropsExample from './PropsExample'
// import StateExample from './StateExample'
// import EventsExample from './EventsExample'
// import RestApiExample from './RestApiExample'
// import HooksExample from './HooksExample'
// import Router from './Router'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
    {/* <RestApiExample username='gaearon'/>
    <hr/>
    <RestApiExample username='sophiebits'/>
    <hr/>
    <RestApiExample username='jdalton'/>
    <hr/>
    <RestApiExample username='asrafalih'/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
