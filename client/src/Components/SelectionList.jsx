import React from 'react';
import getItemSelection from './clientGetReq.js'
import SelectionListPossibilities from './selectionListPossibilities.jsx'
import Overview from './Overview.jsx'


class SelectionList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stateChange : false,
      itemInformation : [],
      selectionPossibilties : [],
      optionPossibilities : []
    }
    this.getItemInformation = this.getItemInformation.bind(this);
    // this.getSelectValue = this.getSelectValue.bind(this);
    // this.getOptionsValue = this.getOptionsValue.bind(this);
  }

  componentDidMount() {
    this.getItemInformation();
    console.log("his came firs")

  }

  getItemInformation(){
    return getItemSelection(this.props.randomItemNumber)
      .then((data) => {
        var itemInfo = {};
        var stateChanged = false;
        if (data[0].options){
          itemInfo = data[0].options
          stateChanged = true;
        }
        this.setState({
          itemInformation : itemInfo,
          stateChange: stateChanged
        })
      })
      .catch((err) => {
        console.log(err, 'failed promise')
      })      
  }



  render(){
    return(
      <div className = "selectionList"> 
        {this.state.stateChange ? <SelectionListPossibilities selection={this.state.itemInformation}/> : null }
        
      </div> 

    )
  }
}


export default SelectionList


// {<SelectionListPossibilities 
//   selections={this.state.selectionPossibilties}
//   optionList={this.state.optionPossibilities}
// />}

  // getSelectValue(){
  //   var selection = [];
  //   let data = this.state.itemInformation;
  //   if (data[0]['options']){
  //     var itemHasSelection = data[0]['options']
  //     for (var keys in itemHasSelection){
  //       selection.push(keys)
  //     }
  //   }
  //   this.setState({
  //     selectionPossibilties : selection
  //   })
  // }


  // getOptionsValue(){
  //   var allOptions = [];
  //   var option;
  //   let data = this.state.itemInformation;
  //   if (data[0]['options']){
  //     option = data[0]['options']
  //     for (var key in option){
  //       allOptions.push(option[key]);
  //     }
  //     console.log(allOptions, 'all options')
  //   }
  //   this.setState ({
  //     optionPossibilities : allOptions
  //   })
  // }