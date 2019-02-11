import React from 'react';
import getItemSelection from './clientGetReq.js'
import SelectionListPossibilities from './selectionListPossibilities.jsx'


class SelectionList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectionPossibilties : []
    }
    this.getItemOptions = this.getItemOptions.bind(this);
  }

  componentDidMount() {
      console.log(this.getItemOptions(), 'this is what getItemOptions returns')
    this.getItemOptions();
  }

  // getItemOptions(){
  //   var selection = [];
  //   getItemSelection(this.props.randomItemNumber, (err, data) => {
  //     // if (err){
  //     //   console.log(err, "err from selection list");
  //     // return;
  //     // } 
  //     if (data[0]['options']){
  //       var itemHasSelection = data[0]['options']
  //       for (var keys in itemHasSelection){
  //         selection.push(keys)
  //       }
  //       console.log(selection[0], 'before return statement')
  //     }
  //     return;
    
  //   })
  //   console.log(selection[0], 'after return statement')  
  //   return selection;
  // }

  getItemOptions(){
    console.log(this.state.selectionPossibilties)
    var selection = [];
    return getItemSelection(this.props.randomItemNumber)
      .then((data) => {
        console.log(data, 'this is data')
        console.log(data[0]['options'])
        if (data[0]['options']){
          var itemHasSelection = data[0]['options']
          console.log(itemHasSelection, 'this is the data were iterating thorugh')
          for (var keys in itemHasSelection){
            selection.push(keys)
          }
        }
          console.log(this.state.selectionPossibilties, 'possibilities')
        console.log(selection, 'selection getting caught')
        this.setState({
          selectionPossibilties : selection
        })
        // return selection;
      })
      // .then((selection) => {
      //   // return selection;
      // })
      // .then((selection) => {
      //   selection.map(selections => {
      //     console.log(selections, 'props are being passed down properly')
      //   })
      // })
      .catch(() => {
        console.log(selection, 'failed promise')
      })
    }
      // if (err){
      //   console.log(err, "err from selection list");
      // return;
      // } 
    



//Need to send a getRequest to the server with the randomItemNumber, then map through the different selection values
  //Afterwards can get the options with the same method

  render(){
    return(
    <div className = "selectionList"> 
      <SelectionListPossibilities selections={this.state.selectionPossibilties}/>
    </div> 
    )
  }
}


export default SelectionList