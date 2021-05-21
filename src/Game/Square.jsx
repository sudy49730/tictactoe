import React from "react";

class Square extends React.Component {
  render() {
    return (
      <div style={this.props.style} onClick={() => this.props.onClick()}>
        {this.props.value}
      </div>
    );
  }
}
export default Square;
