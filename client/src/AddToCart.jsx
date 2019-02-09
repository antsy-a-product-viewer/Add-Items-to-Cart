/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';
import ItemDescription from './itemDescription.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="container">
        <div id="description">
          <ItemDescription />
        </div>
     
        <div id="question" />
        <div id="quantity" />
        <div id="dropbar" />


      </div>
    );
  }
}

export default App;

// eslint-disable-next-line no-undef
