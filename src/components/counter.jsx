import React, { Component } from "react";
import Rank from "./rank";
class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <table className="table table-bordered table-stripped table-hover">
          <tbody>
            <thead>{this.props.counter.User}</thead>

            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Price</th>
              <th className="text-center">Category</th>
              <th className="text-center">Date</th>
              <th>Delete Entry</th>
              <th>Increment Price</th>
            </tr>

            <tr>
              <td>{this.props.counter.id}</td>
              <td>{this.formatCounter()}</td>
              <td> {this.formatCounterCat()}</td>
              <td> {this.formatCounterDate()}</td>

              <td>
                <button
                  onClick={() => this.props.onDelete(this.props.counter.id)}
                  className="btn btn-danger btn-default m-2"
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => this.props.onIncrement(this.props.counter)}
                  className="btn btn-secondary btn-default m-2"
                >
                  Increment
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <span className="m-2">
          Total : {this.props.Money(this.props.counter)}
        </span>
        <span>Total : {this.props.Rank(this.props.counter)}</span>
        <Rank
          counter={this.props.counter}
          onDelete={this.props.OnDelete}
          onIncrement={this.props.OnIncrement}
          Money={this.props.Money}
          Rank={this.props.counter.Rank}
        />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    if (this.props.counter.value === 0) {
      classes = classes + "badge-warning";
    } else if (this.props.counter.value <= 10) {
      classes = classes + "badge-info";
    } else {
      classes = classes + "badge-secondary";
    }
    return classes;
  }

  formatCounter() {
    if (this.props.counter.value === 0) {
      return <h7>Zero</h7>;
    } else {
      return this.props.counter.value;
    }
  }

  formatCounterCat() {
    return this.props.counter.category;
  }

  formatCounterDate() {
    return this.props.counter.Date;
  }
}

export default Counter;
