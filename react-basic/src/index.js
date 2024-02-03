import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// default App 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//import HelloComponent from './components/HelloComponent';
//const root = ReactDOM.createRoot(document.getElementById('root'));


// function component
// function HelloComponent(){
//   return <h1>Hello React</h1>
// }

// root.render(<HelloComponent/>);

// Class component
// class HelloComponent extends React.Component{
//   render(){
//       return <h1>Hello React Hello React Hello React</h1>
//   }
// }

//root.render(<HelloComponent/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
