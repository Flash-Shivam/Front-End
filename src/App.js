import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valuee: "",
      counters: [
        {
          User: "Shourya",

          id: 1,
          value: 4,
          category: "books",
          sub_category: "TextBook",
          Date: "2019/1/12"
        },
        {
          User: "Shivam",

          id: 6,
          value: 4,
          category: "books",
          sub_category: "Register",
          Date: "2019/11/12"
        },
        {
          User: "Shourya",

          id: 7,
          value: 4,
          category: "books",
          sub_category: "Notebook",
          Date: "2019/10/12"
        },
        {
          User: "NavNeel",

          id: 8,
          value: 4,
          category: "books",
          sub_category: "TextBook",
          Date: "2019/10/11"
        },
        {
          User: "NavNeel",

          id: 2,
          value: 0,
          category: "online",
          sub_category: "Flipkart",
          Date: "2019/3/1"
        },
        {
          User: "Shivam",

          id: 3,
          value: 0,
          category: "books",
          sub_category: "NoteBook",
          Date: "2016/4/12"
        },
        {
          User: "Shaswat",

          id: 4,
          value: 4,
          category: "Food",
          sub_category: "Zomato",
          Date: "2019/2/12"
        },
        {
          User: "Manoj",

          id: 5,
          value: 4,
          category: "Food",
          sub_category: "UberEats",
          Date: "2018/3/14"
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ valuee: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.valuee);
    event.preventDefault();
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReverse = () => {
    let counters = [...this.state.counters];
    let cr = counters.reverse();
    this.setState({ counters: cr });
  };

  handleSort = () => {
    let counters = [...this.state.counters];
    let cr = counters.sort((a, b) => a.value > b.value);
    this.setState({ counters: cr });
  };

  handleSorto = () => {
    let counters = [...this.state.counters];
    let cr = counters.sort((a, b) => a.Date > b.Date);
    this.setState({ counters: cr });
  };

  handleSortoc = () => {
    let counters = [...this.state.counters];
    let cr = counters.sort((a, b) => a.category > b.category);
    this.setState({ counters: cr });
  };

  handleSortUser = () => {
    let counters = [...this.state.counters];
    let cr = counters.sort((a, b) => a.User > b.User);
    this.setState({ counters: cr });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleRank = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    let i = 0;
    let x = 0;
    for (i = 0; i < counters[index].Rank.length; i++) {
      x = x + counters[index].Rank[i].co;
    }

    return x;
  };

  handleShowBooks = () => {
    const counters = this.state.counters.filter(c => c.category === "books");
    let cr = counters;
    this.setState({ counters: cr });
  };

  add = () => {
    const counters = [...this.state.counters];
    let i = 0;
    let x = 0;
    for (i = 0; i < counters.length; i++) {
      x = x + counters[i].value;
    }

    return x;
  };

  maxx = () => {
    const counters = [...this.state.counters];
    let i = 0;
    let x = counters[0].value;
    let y = 0;
    for (i = 1; i < counters.length; i++) {
      if (counters[i].value > x) {
        x = counters[i].value;
        y = i;
      }
    }
    console.log(y);
    return y;
  };

  addUserMoney = username => {
    const counters = [...this.state.counters];
    let i = 0;
    let x = 0;
    for (i = 0; i < counters.length; i++) {
      if (counters[i].User === username) {
        x = x + counters[i].value;
      }
    }

    return x;
  };

  handleShowOnline = () => {
    const counters = this.state.counters.filter(c => c.category === "online");
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          total={this.state.counters.filter(c => c.value > 0).length}
          sum={this.add()}
          user={this.state.counters.length}
        />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.valuee}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1 className="App-title  m-3">Sample WEB APP</h1>

        <main className="jumbotron  ">
          <Counters
            counters={this.state.counters}
            OnReset={this.handleReset}
            OnIncrement={this.handleIncrement}
            OnDelete={this.handleDelete}
            OnShow={this.handleShowBooks}
            OnShowOnline={this.handleShowOnline}
            Ad={this.add}
            UseMoney={this.addUserMoney}
            Rank={this.handleRank}
          />
          <div />
          <h3 className="text text-success">
            The Most Expensive thing on Cart is{" : "}
            {this.state.counters[this.maxx()].category} by{" "}
            {this.state.counters[this.maxx()].sub_category} for $
            {this.state.counters[this.maxx()].value}
          </h3>
          <button onClick={this.handleReverse} className="btn btn-success m-5">
            Reverse
          </button>
          <button onClick={this.handleSort} className="btn btn-primary m-5">
            Sort By Value
          </button>
          <button onClick={this.handleSortUser} className="btn btn-primary m-5">
            Sort User
          </button>
          <button onClick={this.handleSorto} className="btn btn-primary m-5">
            Sort By Date
          </button>
          <button onClick={this.handleSortoc} className="btn btn-primary m-5">
            Sort By Category
          </button>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
