import React from 'react';

class SelectionListEntries extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props.option)
  }

  
  render() {
    return(
      <div>
        <div className= "selectionLists">
          {this.props.selection}
        </div>
      </div>
    )
  }
}


export default SelectionListEntries;