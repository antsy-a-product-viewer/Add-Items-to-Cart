/* eslint-disable comma-dangle */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable eol-last */
/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';
import SelectionList from './Components/SelectionList.jsx'
import Overview from './Components/Overview.jsx'



class ItemDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomItem: Math.floor(Math.random() * 100 + 1), //Gets a random item from the database
      description: [],
      price: [],
      option: [],
      haveInCart: Math.floor(Math.random() * 10 + 1),
    };
    this.postingDescription = this.postingDescription.bind(this);
  }

  // Need to write a function that sends a get request to the server to get the description for the fxn
  // eslint-disable-next-line class-methods-use-this

  componentDidMount() {
    this.postingDescription();
  }


  // const number = Math.floor(Math.random() * 100 + 1); 
  postingDescription() {
    fetch(`/checkout/${this.state.randomItem}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res)
      this.setState ({
        description: res[0]['description'],
        price: res[0]['price']
      })
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.description }</div>
        <div className="price"> ${this.state.price} </div>
        <div className="price">
          <button> Ask A Question </button>
        </div>
        <div className="optionNames">          
          <SelectionList randomItemNumber={this.state.randomItem}/> 
        </div>
        <div>
          <button id="addToCart"> Add to Cart </button>
          <div>This is currently in {this.state.haveInCart} carts </div>
        </div>
        <div className="overview">          
          <Overview randomItemNumber={this.state.randomItem}/> 
        </div>
      </div>
    );
  }
}

export default ItemDescription;