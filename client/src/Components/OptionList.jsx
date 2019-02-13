import React from "react"

const OptionList = (props) => {
  return (
    <div>
        {console.log(props.options)}
      <select>
        {props.options.map((option) => { 
          return <option>{option}</option> 
        })} 
      </select> 
    </div>
  )
}

export default OptionList