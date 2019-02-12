import React from 'react';
import SelectionListEntries from './SelectionListEntries.jsx';

const SelectionListPossibilities = (props) => {
  return (
    <div>
      {props.selections.map(selection => {
        return <SelectionListEntries selection={selection}/>
      })}
      <select>

      {props.optionList.map(options => {
        return options.map(option => {
          return <option>{option}</option> 
        })
      })}
      </select>
    </div>
  )
}
export default SelectionListPossibilities;

