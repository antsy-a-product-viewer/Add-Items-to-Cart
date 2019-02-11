import React from 'react';

class SelectionListEntries extends React.Component {
  constructor(props){
    super(props);
    this.test = this.test.bind(this);
  }
  componentDidMount(){
    this.test()
  }
  
  test(){
    console.log("selection list entries is working")
    //   console.log(this.props, 'selection')
  }

  render() {
    return(
      <div>
      <div className= "selectionLists">
        {this.test()}
        this is working
      </div>
      </div>
    )
  }
}


export default SelectionListEntries;