import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <table className="table table-bordered table-stripped table-hover">
          <tbody>
            <thead>{this.props.counter.User}</thead>

            <tr>
              <th className="text-center"> Transaction ID</th>
              <th className="text-center">Price</th>
              <th className="text-center">Category</th>
              <th className="text-center">Date</th>
              <th className="text-center">Type of Transaction</th>
              <th className="text-center">Delete Entry</th>
              <th className="text-center">Increment Price</th>
              <th className="text-center text-secondary text-md">
                {this.kim()} {this.props.counter.User}
              </th>
            </tr>

            <tr>
              <td className="text-center">{this.props.counter.id}</td>
              <td>
                <h3 className={this.getTextClasses()}>
                  {this.formatCounter()}
                </h3>
              </td>
              <td className="text-center"> {this.formatCounterCat()}</td>
              <td className="text-center"> {this.formatCounterDate()}</td>
              <td className="text-center">{this.sim()}</td>
              <td className="text-center">
                <button
                  onClick={() => this.props.onDelete(this.props.counter.id)}
                  className="btn btn-danger btn-default m-2"
                >
                  Delete
                </button>
              </td>
              <td className="text-center">
                <button
                  onClick={() => this.props.onIncrement(this.props.counter)}
                  className="btn btn-secondary btn-default m-2"
                >
                  Increment
                </button>
              </td>
              <td className="text-center">
                <h3 className={this.helps()}>{this.MoneySold()}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  helps() {
    if (this.props.UseMoney(this.props.counter.User) < 0) {
      return "text text-danger";
    } else {
      return "text text-success";
    }
  }

  kim() {
    if (this.props.counter.sold === true) {
      return "Money PAID by ";
    } else {
      return "Money RECEIVED by";
    }
  }

  sim() {
    if (this.props.counter.sold === true) {
      return "PAID";
    } else {
      return "RECEIVED";
    }
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

  getTextClasses() {
    let classes = "text text-center ";
    if (this.props.counter.value === 0) {
      classes = classes + "text-warning";
    } else if (this.props.counter.value <= 10) {
      classes = classes + "text-info";
    } else {
      classes = classes + "text-secondary";
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

  MoneySold() {
    if (this.props.UseMoney(this.props.counter.User) >= 0) {
      return "+" + this.props.UseMoney(this.props.counter.User);
    } else {
      return this.props.UseMoney(this.props.counter.User);
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
