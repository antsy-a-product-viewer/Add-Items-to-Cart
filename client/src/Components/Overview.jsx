import React from 'react';
import getItemSelection from './clientGetReq.js'
import OverviewList from './OverviewList.jsx'

class Overview extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      overview : [],
      hasOverview: false,
      shippingTime: [],
      exclusions: [],
      returnPolicy : [],
      returnOverview : [],
      giftWrapping: [],
      getShippingCost: false,
      shippingCost: [],
      enteredShippingInfo: false,
      zipCode : []
    }
    this.getOverview = this.getOverview.bind(this);
    this.getShippingInformation = this.getShippingInformation.bind(this);
    this.getReturnPolicy = this.getReturnPolicy.bind(this);
    this.getShippingInfo = this.getShippingInfo.bind(this);
    this.showShipping = this.showShipping.bind(this)
    this.shippingCost = this.shippingCost.bind(this);
  }
  
  componentDidMount(){
    this.getOverview();
    this.getShippingInformation()
    this.getReturnPolicy()
  }
  getOverview(){
    let overviewBulletPoints = [];
    let overviewLength = false;
    let overview = this.props.data[0]['overview']
    console.log(overview)
    if (overview.length > 0){
      overviewLength = true;
      overviewBulletPoints = overview
    }
    this.setState({
      overview: overviewBulletPoints,
      hasOverview: overviewLength
    })
  }

  getShippingInformation(){
    let manufacturingTime;
    manufacturingTime = this.props.data[0]['manufacturingTime'];
    console.log(manufacturingTime, 'manufacturing time')
    this.setState({
      shippingTime: manufacturingTime
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
    console.log(typeof event.target.value)
    console.log(typeof parseInt(event.target.value))
    console.log(event.target.value.length)
    if (typeof parseInt(event.target.value) === 'number' && event.target.value.length === 5){
      this.setState({
        shippingCost: shippingCost,
        enteredShippingInfo: true,
        getShippingCost: !this.state.getShippingCost,
        zipCode: event.target.value
      })
    console.log('this works')
    }
  }


  render(){
    return(
      <div>
    
        {this.state.hasOverview ?
          <div className="OverallOverview" >
            <div className="Overview" style={{fontWeight: 'bold'}}>
            Overview 
            </div>
            <OverviewList overviews={this.state.overview}/>
            <br></br>
           <hr></hr> </div>
        : null }  
       
        

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
            From California
          </div>
          <div className="getShippingCost" style={{textDecorationLine: 'underline', cursor: "pointer"}} onClick={this.getShippingInfo}>
             Get Shipping Cost 
          </div> </div> :

          <div> 
            <div className='deliver' style={{fontWeight: 'bold'}}>
              Estimated delivery: Sep 10 - Sept 29
            </div>
            <div className="shippedFrom">
              From California
            </div>
            <span className="shippingCost">
              ${this.state.shippingCost} shipping to 
            </span>      
            <span className="shippingAddress" style={{textDecorationLine: 'underline'}}>
              United States, {this.state.zipCode}
            </span>      
          </div>
          }

          {this.state.getShippingCost ?
          <form onSubmit={this.showShipping}>
            <span>
              United States, 
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

        </div> <br></br> <hr></hr>


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
        </div>
      </div>
    )
  }
}


export default Overview