import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      {
        User: "Shourya",
        Trait: [1, 2, 3],
        Rank: [
          {
            co: 1,
            Location: "Delhi"
          },
          {
            co: 2,
            Location: "Delhi"
          },
          {
            co: 4,
            Location: "Delhi"
          }
        ],
        id: 1,
        value: 4,
        category: "books",
        sub_category: "TextBook",
        Date: "2019/1/12"
      },
      {
        User: "NavNeel",
        Trait: [1, 2, 3],
        Rank: [
          {
            co: 1,
            Location: "Delhi"
          },
          {
            co: 2,
            Location: "Delhi"
          },
          {
            co: 4,
            Location: "Delhi"
          }
        ],
        id: 2,
        value: 0,
        category: "online",
        sub_category: "Flipkart",
        Date: "2019/3/1"
      },
      {
        User: "Shivam",
        Trait: [1, 2, 3],
        Rank: [
          {
            co: 1,
            Location: "Delhi"
          },
          {
            co: 2,
            Location: "Delhi"
          },
          {
            co: 4,
            Location: "Delhi"
          }
        ],
        id: 3,
        value: 0,
        category: "books",
        sub_category: "NoteBook",
        Date: "2016/4/12"
      },
      {
        User: "Shaswat",
        Trait: [1, 2, 3],
        Rank: [
          {
            co: 1,
            Location: "Delhi"
          },
          {
            co: 2,
            Location: "Delhi"
          },
          {
            co: 4,
            Location: "Delhi"
          }
        ],
        id: 4,
        value: 4,
        category: "Food",
        sub_category: "Zomato",
        Date: "2019/2/12"
      },
      {
        User: "Manoj",
        Trait: [1, 2, 3],
        Rank: [
          {
            co: 1,
            Location: "Delhi"
          },
          {
            co: 2,
            Location: "Delhi"
          },
          {
            co: 4,
            Location: "Delhi"
          }
        ],
        id: 5,
        value: 4,
        category: "Food",
        sub_category: "UberEats",
        Date: "2018/3/14"
      }
    ]
  };

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

  handleTrait = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    let i = 0;
    let x = 0;
    for (i = 0; i < counters[index].Trait.length; i++) {
      x = x + counters[index].Trait[i];
    }

    return x;
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
            Money={this.handleTrait}
            Rank={this.handleRank}
          />
          <div />
          <button onClick={this.handleReverse} className="btn btn-success m-5">
            Reverse
          </button>
          <button onClick={this.handleSort} className="btn btn-primary m-5">
            Sort By Value
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
