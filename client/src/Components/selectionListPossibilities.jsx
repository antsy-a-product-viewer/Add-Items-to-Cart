import React from 'react';
import SelectionListEntries from './SelectionListEntries.jsx';

const SelectionListPossibilities = (props) => {
  return (
    <div>
      {props.selections.map(selection => {
        return <SelectionListEntries selection={selection}/>
      })}
    </div>
  )
}
export default SelectionListPossibilities;


// const SelectionListPossibilities = (props) => (
//     // console.log(props.selections, 'props in selection possibilities')
//     <div className="selectionPossiblities">
//       {props.selections[0]}
//   </div> 
// )

//Iterate through all of the values and pass them down in this fxn

// class SelectionListPossibilities extends React.Component {
//   constructor(props){
//     super(props);

//     // this.state = {
//     //   selectionList : (this.props.selections)
//     // }

//     // this.checkingprops = this.checkingprops.bind(this);
//   } 
  
//   componentDidMount(){
//     console.log(this.props.selections)
//   }
  
//   // checkingprops(){
//   //   console.log('this function is running to check props')
//   //   return this.props.selections
//   //   .then((selections) => {
//   //       return (
//   //       selections.map(selection => {
//   //         console.log(selection, "here are selections for map"), 
//   //         <SelectionListEntries selection={selection}/>
//   //       })
//   //       )
//   //     })
//   //     .catch((selection) => {
//   //       console.log('failed prmose')
//   //     })
//   // }

//   render (){
//     // this.checkingprops()
//     return (
//       <div className="selectionPossiblities">
//         {/* {this.state.selectionList.then((selections) => { */}
//           {/* {this.state.selectionList.map(selection => {
//             console.log(selection, "here are selections for map"), 
//             <SelectionListEntries selection={selection}/>
//           })} */}
//         {/* })} */}
//        </div>           
//     )
//   }
// }