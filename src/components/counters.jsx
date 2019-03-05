import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
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

        {this.props.counters.map(counter => (
          <Counter
            onDelete={this.props.OnDelete}
            onIncrement={this.props.OnIncrement}
            counter={counter}
            UseMoney={this.props.UseMoney}
            Rank={this.props.Rank}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
