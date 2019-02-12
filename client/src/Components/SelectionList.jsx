import React from 'react';
import getItemSelection from './clientGetReq.js'
import SelectionListPossibilities from './selectionListPossibilities.jsx'


class SelectionList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectionPossibilties : [],
      optionPossibilities : []
    }
    this.getSelectValue = this.getSelectValue.bind(this);
    this.getOptionsValue = this.getOptionsValue.bind(this);
  }

  componentDidMount() {
    this.getSelectValue();
    this.getOptionsValue();
  }


  getSelectValue(){
    var selection = [];
    return getItemSelection(this.props.randomItemNumber)
      .then((data) => {
        if (data[0]['options']){
          var itemHasSelection = data[0]['options']
          for (var keys in itemHasSelection){
            selection.push(keys)
          }
        }
          console.log(this.state.selectionPossibilties, 'possibilities')
        console.log(selection, 'selection getting caught')
        // return selection;
          this.setState({
            selectionPossibilties : selection
          })
      })
      .catch((err) => {
        console.log(err, 'failed promise')
      })
    }

  getOptionsValue(){
    var options = [];
    return getItemSelection(this.props.randomItemNumber)
      .then((data) => {
        console.log(data, 'data from options value')
        if (data[0]['options']){
          for (var key in data[0]['options']){
            var individualOptions = [];
            for (let i = 0; i < data[0]['options'][key].length; i++){
              individualOptions.push(data[0]['options'][key][i]);
            }
            options.push(individualOptions);
            console.log(options, 'options value')
          }
        }
        this.setState ({
          optionPossibilities : options
        })
      })
      .catch((err) => {
        console.log(err, "failed to get options")
      })
  }

  render(){
    return(
    <div className = "selectionList"> 
      <SelectionListPossibilities 
        selections={this.state.selectionPossibilties}
        optionList={this.state.optionPossibilities}
      />
    </div> 
    )
  }
}


export default SelectionList