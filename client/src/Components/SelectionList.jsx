import React from 'react';
import getItemSelection from './clientGetReq.js'


class SelectionList extends React.Component {
  constructor(props){
    super(props);
    this.getItemOptions = this.getItemOptions.bind(this);
  }

  componentDidMount() {
      console.log(this.getItemOptions(), 'this is what getItemOptions returns')
    this.getItemOptions();
  }

  getItemOptions(){
    let selection = [];
    getItemSelection(this.props.randomItemNumber, (err, data) => {
      if (err){
        console.log(err, "err from selection list");
      return;
      } 
      if (data[0]['options']){
        var itemHasSelection = data[0]['options']
        for (var keys in itemHasSelection){
          selection.push(keys)
          console.log(selection, "data from selection list");
        }
      }
    return selection;
    })  
    return selection;
  }

//Need to send a getRequest to the server with the randomItemNumber, then map through the different selection values
  //Afterwards can get the options with the same method

  render(){
    return(
    <div> {this.props.randomItemNumber} </div> 
    )
  }
}


export default SelectionList