import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Usage{" "}
            <span className="badge badge-pill badge-primary">
              Total User : {this.props.user}
            </span>
            <span className="badge badge-pill badge-secondary m-2">
              Total Items : {this.props.total}
            </span>
            <span className={"badge badge-pill badge-secondary m-2"}>
              Money Used :{this.props.sum}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default navbar;
