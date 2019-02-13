/* eslint-disable comma-dangle */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable eol-last */
/* eslint-disable no-useless-constructor */
import React from 'react';
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
      quantity : [],
      stock: [],
      highStock: []
    };
    this.postingDescription = this.postingDescription.bind(this);
    this.addedToCart = this.addedToCart.bind(this);
    this.askQuestion = this.askQuestion.bind(this);
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
        stateChange: true,
        stock: Math.floor(res[0]['quantityInStock'])
      })
    })
    .then(() => {
      let stockCount = true;
      if (this.state.stock <= 5){
        stockCount = false;
      }
       this.setState({
        highStock: stockCount
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

  askQuestion(){
    event.preventDefault();
    alert("What is your question?")
  }


  render() {


    return (
      <div>
        <div style={{fontWeight: 'bold', fontSize: "24px"}}>{this.state.description }</div> <br></br>
        <div>
        <span className="price" style={{fontWeight: 'bold', fontSize: "24px"}}> ${this.state.price} </span>
        <span className="question">
          <button style={{cursor: "pointer", float: "right", width: "120px", height: "24px", backgroundColor: "white", fontWeight: 'bold'}} onClick={this.askQuestion}> Ask A Question </button>
        </span>
        </div>
        <div className="optionNames">          
          {this.state.stateChange ? <SelectionList data={this.state.data}/> : null}
        </div> <br></br>

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
            <button id="addToCart" style={{cursor: "pointer", width: "390px", height: "35px", color: "white", backgroundColor: "#222222", fontSize: "16px"}}> Add to Cart </button>
          </div>

          {this.state.highStock ?
            <div>
              <span style={{fontWeight: "bold"}}>Other people want this. </span>
              <span> {this.state.haveInCart} people have this in their carts right now </span>
            </div> 
          : <div>
              <span style={{fontWeight: "bold"}}>Almost gone. </span>
              <span>There's only {this.state.stock} left.</span>
            </div>
          }
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

