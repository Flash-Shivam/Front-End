import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            STATS:{"    "}
            <span className="badge badge-pill badge-primary">
              Total Number of Transactions : {this.props.total}
            </span>
            <span className="badge badge-pill badge-secondary m-2">
              Total Number of Users : {this.props.user}
            </span>
            <span className={"badge badge-lg badge-success m-2"}>
              Net CASH Received : Rs {this.props.sum}
            </span>
            <span className={"badge badge-lg badge-success m-2"}>
              {this.helperr()}
            </span>
            <span className={"badge badge-lg badge-success m-2"}>
              Net Cash Transaction: {this.props.cash}
            </span>
            <span className={"badge-primary"}>
              Current Status : {this.props.status}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }

  helperr() {
    if (this.props.help === "") {
      return "";
    } else {
      return " Net CASH transctions : " + this.props.help;
    }
  }
}

export default navbar;
