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
      data : [],
      stateChange : false,
      quantity : []
    };
    this.postingDescription = this.postingDescription.bind(this);
    this.addedToCart = this.addedToCart.bind(this);
  }

  // Need to write a function that sends a get request to the server to get the description for the fxn
  // eslint-disable-next-line class-methods-use-this

  componentDidMount() {
    this.findQuantity();
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
        price: res[0]['price'],
        data: res,
        stateChange: true
      })
    })
  }

  addedToCart(){
    event.preventDefault()
    alert('Continue to checkout')
  }

  findQuantity(){
    var randomQuantity = Math.floor(Math.random() * 10 + 5)
    var quantity = [];
    for (var i = 0; i < randomQuantity; i++){
      quantity.push(i);
    }
    console.log(quantity, 'this is quantity')
    this.setState({
      quantity: quantity
    })
  }

  render() {


    return (
      <div>
        <div style={{fontWeight: 'bold', fontsize: "18px"}}>{this.state.description }</div> <br></br>
        <div>
        <span className="price" style={{fontWeight: 'bold', fontSize: "18px"}}> ${this.state.price} </span>
        <span className="question">
          <button style={{cursor: "pointer", float: "right", width: "100px", height: "18px"}}> Ask A Question </button>
        </span>
        </div>
        <div className="optionNames">          
          {this.state.stateChange ? <SelectionList data={this.state.data}/> : null}
        </div>

        {this.state.stateChange ? <div className="quantity">
          Quantity 
          <br></br><select style={{width: "45px"}}>
             {this.state.quantity.map(amount => {
               return <option>{amount}</option>
             })}
          </select>
        </div> : null
        }

        <div>
          <div id="addToCard" onClick={this.addedToCart} >
            <button id="addToCart" style={{cursor: "pointer", width: "300px", height: "30px"}}> Add to Cart </button>
          </div>
          <div>
            <span style={{fontWeight: "bold"}}>Other people want this. </span>
            <span> {this.state.haveInCart} people have this in their carts right now </span>
          </div> 
        </div> <br></br>

        <hr></hr>

        <div className="overview">          
          {this.state.stateChange ? <Overview data={this.state.data}/>  : null}
        </div>

      </div>
    );
  }
}

export default ItemDescription;

