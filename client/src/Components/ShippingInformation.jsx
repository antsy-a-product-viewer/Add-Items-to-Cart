import React from 'react';

class ShippingInformation extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      shippingTime: [],
      exclusions: [],
      returnPolicy : [],
      returnOverview : [],
      giftWrapping: [],
      getShippingCost: false,
      shippingCost: [],
      enteredShippingInfo: false,
      zipCode : [],
      shippingFrom: [],
      shippingTo: [],
      shippingToCountry: "China",
      deliveryDate : []
    }
    this.getShippingInformation = this.getShippingInformation.bind(this);
    this.getReturnPolicy = this.getReturnPolicy.bind(this);
    this.getShippingInfo = this.getShippingInfo.bind(this);
    this.showShipping = this.showShipping.bind(this);
    this.shippingCost = this.shippingCost.bind(this);
    this.shippingToCountry = this.shippingToCountry.bind(this);    
  }


  componentDidMount(){
    this.getShippingInformation()
    this.getReturnPolicy()      
  }
  getShippingInformation(){
    let manufacturingTime;
    let shippingFrom = this.props.data[0]['shippingFrom']
    let shippingTo = this.props.data[0]['shippingTo']
    let deliveryDate = this.props.data[0]['deliveryDate']
    manufacturingTime = this.props.data[0]['manufacturingTime'];
    this.setState({
      shippingTime: manufacturingTime,
      shippingFrom: shippingFrom,
      shippingTo: shippingTo,
      deliveryDate : deliveryDate
    })
  }

  getReturnPolicy(){
    var returnable;
    var returnPolicy ="";
    var exclusion;
    var wrapping = "";
    if (this.props.data[0]['availableToReturn']){
      returnable = "Returns and exchanges accepted"
      exclusion = "Exceptions may apply. "
      returnPolicy ="See return policy"
      wrapping = "Gift wrapping available"
    } else{
      returnable ="No returns or exchanges"
      exclusion = "But please contact me if you have any problems with your order."
    }
    this.setState({
      exclusions : exclusion,
      returnPolicy : returnable,
      returnOverview : returnPolicy,
      giftWrapping : wrapping
    })
  }

  getShippingInfo(){
    event.preventDefault();
    this.setState({
      getShippingCost: !this.state.getShippingCost
    })
  }

  showShipping(){
    event.preventDefault();
  }
  
  shippingCost(){
    let shippingCost = this.props.data[0]['shippingCosts'];
    if (typeof parseInt(event.target.value) === 'number' && event.target.value.length === 5){
      this.setState({
        shippingCost: shippingCost,
        enteredShippingInfo: true,
        getShippingCost: !this.state.getShippingCost,
        zipCode: event.target.value
      })
    }
  }

  shippingToCountry (){
    this.setState({
      shippingToCountry: event.target.value
    })
  }

  render(){
    return(
    <div>
    <div className="shippingInformation">
      <div style={{fontWeight: 'bold'}}>
        Shipping & Returns
      </div>
      {!this.state.enteredShippingInfo ?
        <div>
          <div className="manufacturingTime" style={{fontWeight: 'bold'}}>
            Ready to ship in {this.state.shippingTime}-{this.state.shippingTime + 2} days
          </div>
          <div className="shippedFrom">
            From {this.state.shippingFrom}
          </div>
          <div className="getShippingCost" style={{textDecorationLine: 'underline', cursor: "pointer"}} onClick={this.getShippingInfo}>
             Get Shipping Cost 
          </div> 
        </div> :

        <div> 
          <div className='deliver' style={{fontWeight: 'bold'}}>
            Estimated delivery: {this.state.deliveryDate[0]} {this.state.shippingTime + 2} - {this.state.deliveryDate[1]} {this.state.shippingTime + 7}
          </div>
          <div className="shippedFrom">
            From {this.state.shippingFrom}
          </div>
          <span className="shippingCost">
            ${this.state.shippingCost} shipping to 
          </span>      
          <span className="shippingAddress" 
            style={{textDecorationLine: 'underline'}}
            onClick={this.getShippingInfo}
          >
          {this.state.shippingToCountry}, {this.state.zipCode}
          </span>      
        </div>
      }

          {this.state.getShippingCost ?
          <form onSubmit={this.showShipping}>
            <span style={{float: "left"}}>
              Country <br></br>
              <select className="country" 
              style = {{width: "150px"}}
              value = {this.state.value}
              onChange = {this.shippingToCountry}
              >
                {this.state.shippingTo.map(country => {
                  return <option>{country}</option>
                })}
              </select>
            </span>
            <span style={{float: "right"}}>
              Zip or postal code <br></br>
            <label>
             <input onClick={this.shippingCost}
                    id="shippingCost"
                    type="text"
                    value={this.state.value}
              />
            </label>
            </span>
          </form > : null}

        </div> <br></br> <br></br> <hr></hr>


        <div className="returnOverview">
          <div className="returns" style={{fontWeight: 'bold'}}>
            {this.state.returnPolicy}
          </div>
          <div className="returnPolicy">
            <span>{this.state.exclusions}</span>
            <span className="Return" style={{textDecorationLine: 'underline', cursor: "pointer"}}>
              {this.state.returnOverview} 
            </span>
          </div> <br></br><br></br>
          <div className="giftwrappingOptions">
            {this.state.giftWrapping}
          </div>
        </div> <hr></hr>
    </div> 
    )
  }
}

export default ShippingInformation