import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { id } = this.props.counter;
    const { counter } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClass()}>{this.fragmentCount()}</span>
          </div>
          <div className="col-4">
            <button
              onClick={() => this.props.onIncrement(counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(counter)}
              disabled={counter.value == 0}
              className="m-2 btn btn-secondary btn-sm"
            >
              -
            </button>
            <button
              className="btn btn-danger btn-sm ml-2"
              onClick={() => this.props.onDelete(id)}
            >
              *
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClass() {
    const { value } = this.props.counter;
    let badgeClass = "badge m-2 badge-";
    badgeClass += value === 0 ? "warning" : "primary";
    return badgeClass;
  }

  fragmentCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
