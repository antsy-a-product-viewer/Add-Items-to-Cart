import React from 'react';

class SelectionListEntries extends React.Component {
  constructor(props){
    super(props);

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