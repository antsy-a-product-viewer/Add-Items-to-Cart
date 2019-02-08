import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div id="container"> 
        <div id="description"> Description of the product</div>
        <div className="price"> $29.99 </div> 
        <div className="price"> 
        <button> Ask A Question </button>
        </div>

        <form>
        Select a Color
          <select>
            <option>Blue</option>
            <option>Green</option>
            <option>Yellow</option>
          </select>

          Select a size
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          Quantity 
          <select>
            <option>0</option>
            <option>1</option>
          </select>
        </form>        
        <div id="question"> </div>
        <div id="quantity"> </div>
          <div id ="dropbar"> </div>
        <button id="addToCart"> Add to Cart </button>


      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('store'))

