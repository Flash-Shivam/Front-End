import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const u = this.props.v;
    const we = this.props.ab().map(c => (
      <table className="table table-bordered table-stripped table-hover">
        <thead>{c.User}</thead>
        <tr>
          <th className="text-center"> Transaction ID</th>
          <th className="text-center">Price</th>
          <th className="text-center">Category</th>
          <th className="text-center">Date</th>
          <th className="text-center">Type of Transaction</th>
          <th className="text-center">Delete</th>
          <th className="text-center">Increment</th>
          <th className="text-center">{this.kim_2(c.sold) + " " + c.User}</th>
        </tr>
        <td className="text-center">{c.id}</td>
        <td className="text-center">
          <h3 className={this.getTextClasses_2(c.value)}>
            {this.formatCounter_2(c.value)}
          </h3>
        </td>
        <td className="text-center">{c.category}</td>
        <td className="text-center">{c.Date}</td>
        <td className="text-center">{this.sim_2(c.sold)}</td>
        <td className="text-center">
          <button
            onClick={() => this.props.onDelete(c.id)}
            className="btn btn-danger btn-default m-2"
          >
            Delete
          </button>
        </td>
        <td className="text-center">
          <button
            onClick={() => this.props.onIncrement(c, 10)}
            className="btn btn-secondary btn-default m-2"
          >
            Increment
          </button>
        </td>
        <td className="text-center">
          <h3 className={this.helps_2(c.User)}>{this.MoneySold_2(c.User)}</h3>
        </td>
      </table>
    ));
    return (
      <React.Fragment>
        <button onClick={this.props.OnShow} className="m-2">
          books
        </button>

        <button onClick={this.props.OnShowOnline} className="m-2">
          online
        </button>

        <button
          onClick={this.props.OnReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <ul>{we}</ul>
      </React.Fragment>
    );
  }

  helps_2(x) {
    if (this.props.UseMoney(x) < 0) {
      return "text text-danger";
    } else {
      return "text text-success";
    }
  }

  MoneySold_2(x) {
    if (this.props.UseMoney(x) >= 0) {
      return "+" + this.props.UseMoney(x);
    } else {
      return this.props.UseMoney(x);
    }
  }

  sim_2(x) {
    if (x === true) {
      return "PAID";
    } else {
      return "RECEIVED";
    }
  }

  kim_2(x) {
    if (x === true) {
      return "Money PAID by ";
    } else {
      return "Money RECEIVED by";
    }
  }

  getTextClasses_2(x) {
    let classes = "text text-center ";
    if (5 * x > this.props.TotalSum) {
      classes = classes + "text-danger";
    } else if (20 * x > this.props.TotalSum) {
      classes = classes + "text-warning";
    } else {
      classes = classes + "text-info";
    }
    return classes;
  }

  formatCounter_2(x) {
    if (x === 0) {
      return <h7>Zero</h7>;
    } else {
      return x;
    }
  }
}

export default Counters;
