/* eslint-disable comma-dangle */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable eol-last */
/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';
import getItemInfo from './getItemInformation.js'


class ItemDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: [],
      price: []
    };
    this.postingDescription = this.postingDescription.bind(this);
  }

  // Need to write a function that sends a get request to the server to get the description for the fxn
  // eslint-disable-next-line class-methods-use-this

  componentDidMount() {
    this.postingDescription();
  }


  postingDescription() {
    // getItemInfo((err, data) => {
    //   if (err){
    //     console.log(err);
    //     return;
    //   }
    // })
    const number = Math.floor(Math.random() * 100 + 1);
    fetch(`/checkout/${number}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log('RES',res);
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
      <div>
      <button id="addToCart"> Add to Cart </button>
      </div>
      </div>
    );
  }
}

export default ItemDescription;