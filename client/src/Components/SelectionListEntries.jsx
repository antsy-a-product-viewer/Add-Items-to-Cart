import React from 'react';

class SelectionListEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsPassedDown: false,
    };
    this.successfullyPassedDown = this.successfullyPassedDown.bind(this);
  }

  componentDidMount() {
    this.successfullyPassedDown();
  }

  successfullyPassedDown() {
    if (this.props.options !== undefined) {
      this.setState({
        optionsPassedDown: true,
      });
    }
  }


  render() {
    return (
      <div>
        <div className="selectionLists" style={{ marginBottom: "18px" }}>
          {this.props.selection}
          <select className="selectOptions" style={{ height: '30px', background: 'white' }}>
            {this.props.options.map(option => <option>{option}</option>)}
          </select>
        </div>
      </div>
    );
  }
}


export default SelectionListEntries;
