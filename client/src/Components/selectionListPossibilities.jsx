import React from 'react';
import SelectionListEntries from './SelectionListEntries.jsx';

// const SelectionListPossibilities = (props) => (
//     // console.log(props.selections, 'props in selection possibilities')
//     <div className="selectionPossiblities">
//       {props.selections[0]}
//   </div> 
// )

//Iterate through all of the values and pass them down in this fxn

class SelectionListPossibilities extends React.Component {
  constructor(props){
    super(props);
    this.checkingprops = this.checkingprops.bind(this);
  } 
  
  componentDidMount(){
    this.checkingprops()
  }
  
  checkingprops(){
    console.log('this function is running to check props')
    return this.props.selections()
      .then((selections) => {
        selections.map(selection => {
          console.log(selection, 'props are being passed down properly')
        })
      })
      .catch((selection) => {
        console.log('failed prmose')
      })
  }

  render (){
    return (
      <div className="selectionPossiblities">
        {/* {this.props.selections.map(possibleSelections =>
        //   {console.log('hi')},
          <SelectionListEntries possibleSelections={possibleSelections}/>
        )} */}
        
      </div>           
    )
  }
}
export default SelectionListPossibilities;