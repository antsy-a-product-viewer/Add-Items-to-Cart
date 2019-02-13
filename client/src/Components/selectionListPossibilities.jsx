import React from 'react';
import SelectionListEntries from './SelectionListEntries.jsx';

const SelectionListPossibilities = (props) => {
  return (
    <div>
      {console.log(Object.values(props.selection), 'props selection')}
      {Object.keys(props.selection).map((selection) => {
        return <SelectionListEntries selection={selection}/>
      })}
      {Object.values(props.selection).map((options) =>{
        return <SelectionListEntries options={options}/>
      })}
    </div>
  )
}
export default SelectionListPossibilities;

