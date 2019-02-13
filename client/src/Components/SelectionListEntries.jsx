import React from 'react';

class SelectionListEntries extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      optionsPassedDown: false
    }
    this.successfullyPassedDown = this.successfullyPassedDown.bind(this);
  }

  componentDidMount(){
    this.successfullyPassedDown()
  }
  successfullyPassedDown(){
    if (this.props.options !== undefined){
    this.setState({
      optionsPassedDown: true
    })
   }
  }


  render() {
    return(
      <div>
        <div className= "selectionLists">
          {this.props.selection}
        </div>
        {this.state.optionsPassedDown ? 
          <div>
              <select style={{height: "15px"}}>
                {this.props.options.map((option) => { 
                  return <option >{option}</option> 
                })} 
              </select>         
          </div>
          : null
        }
      </div>
    )
  }
}


export default SelectionListEntries;