import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import { FaSmile, FaSadCry } from "react-icons/fa";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./components/style.css";
import PieChart from "react-minimal-pie-chart";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Newid: "",
      NewDate: "",
      NewUser: "",
      NewCat: "",
      NewPrice: "",
      NewType: false,
      checked: false,
      ExchangeRate: "1",
      valuee: "yyyy/mm/dd",
      counters: [
        {
          User: "Shourya",
          sold: true,
          id: 1,
          value: 124,
          category: "books",
          sub_category: "TextBook",
          Date: "2019-01-12"
        },
        {
          User: "Shivam",
          sold: true,
          id: 6,
          value: 400,
          category: "books",
          sub_category: "Register",
          Date: "2019-02-12"
        },
        {
          User: "Shourya",
          sold: false,
          id: 7,
          value: 157,
          category: "books",
          sub_category: "Notebook",
          Date: "2019-02-12"
        },
        {
          User: "NavNeel",
          sold: true,
          id: 8,
          value: 75,
          category: "books",
          sub_category: "TextBook",
          Date: "2019-02-12"
        },
        {
          User: "NavNeel",
          sold: true,
          id: 2,
          value: 100,
          category: "online",
          sub_category: "Flipkart",
          Date: "2019-03-06"
        },
        {
          User: "Shivam",
          sold: true,
          id: 3,
          value: 90,
          category: "books",
          sub_category: "NoteBook",
          Date: "2019-03-07"
        },
        {
          User: "Shaswat",
          sold: true,
          id: 4,
          value: 48,
          category: "Food",
          sub_category: "Zomato",
          Date: "2018-12-30"
        },
        {
          User: "Shaswat",
          sold: true,
          id: 11,
          value: 48,
          category: "online",
          sub_category: "Snapdeal",
          Date: "2018-12-31"
        },
        {
          User: "Shaswat",
          sold: true,
          id: 12,
          value: 408,
          category: "online",
          sub_category: "Snapdeal",
          Date: "2018-12-31"
        },
        {
          User: "Shaswat",
          sold: true,
          id: 9,
          value: 48,
          category: "Food",
          sub_category: "Swiggy",
          Date: "2018-12-31"
        },
        {
          User: "Shaswat",
          sold: true,
          id: 10,
          value: 48,
          category: "Food",
          sub_category: "UberEats",
          Date: "2018-12-31"
        },
        {
          User: "Manoj",
          sold: false,
          id: 5,
          value: 423,
          category: "Food",
          sub_category: "UberEats",
          Date: "2019-03-14"
        }
      ],

      TotalMoney: 0,
      toggle: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.exchange = this.exchange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeval = this.changeval.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.handleCat = this.handleCat.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleId = this.handleId.bind(this);
    this.handleType = this.handleType.bind(this);
  }
  handleCat(event) {
    this.setState({ NewCat: event.target.value });
  }

  handleUser(event) {
    this.setState({ NewUser: event.target.value });
  }

  handlePrice(event) {
    this.setState({ NewPrice: event.target.value });
  }

  handleType(event) {
    this.setState({ NewType: event.target.value });
  }

  handleId(event) {
    this.setState({ Newid: event.target.value });
  }

  handleDate(event) {
    this.setState({ NewDate: event.target.value });
  }

  handleCheck() {
    this.setState({ checked: !this.state.checked });
  }

  exchange(event) {
    this.setState({ ExchangeRate: event.target.value });
  }

  changeval(event) {
    this.setState({ ExchangeRate: event.target.value });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ valuee: event.target.value });
  }

  handleSubmit(event) {
    alert("A Date was submitted: " + this.state.valuee);

    const counters = [...this.state.counters];
    let i = 0;
    let x = 0;
    for (i = 0; i < counters.length; i++) {
      if (counters[i].Date > this.state.valuee) {
        x = x + counters[i].value * this.state.ExchangeRate;
      }
    }
    event.preventDefault();

    this.setState({ TotalMoney: x });
    this.setState({ toggle: false });
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  getDate = () => {
    let i = 0;
    var s = "";
    for (i = 0; i < this.state.counters.length; i++) {
      s = s + this.state.counters[i].Date + "@";
    }
    var m = s.split("@");
    m.sort();
    var y = [];
    var x = [];
    var z = [];
    var prev;
    for (i = 0; i < m.length - 1; i++) {
      if (m[i] !== prev) {
        x.push(m[i]);
        z.push(1);
      } else {
        z[z.length - 1]++;
      }
      prev = m[i];
    }

    for (i = 0; i < m.length - 1; i++) {
      y.push({
        date: x[i],
        count: z[i]
      });
    }

    return y;
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

  handleIncrement = (counter, r) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = counters[index].value + r;
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
      if (counters[i].sold === true) {
        x = x + counters[i].value * this.state.ExchangeRate;
      } else {
        x = x - counters[i].value * this.state.ExchangeRate;
      }
    }

    return x;
  };

  maxxdate = () => {
    const counters = [...this.state.counters];
    let i = 0;
    let x = counters[0].Date;
    let y = 0;
    for (i = 1; i < counters.length; i++) {
      if (counters[i].Date > x) {
        x = counters[i].Date;
        y = i;
      }
    }
    console.log(y);
    return y;
  };

  mindate = () => {
    const counters = [...this.state.counters];
    let i = 0;
    let x = counters[0].Date;
    let y = 0;
    for (i = 1; i < counters.length; i++) {
      if (counters[i].Date < x) {
        x = counters[i].Date;
        y = i;
      }
    }
    console.log(y);
    return y;
  };

  addd = () => {
    const counters = [...this.state.counters];
    let i = 0;
    let x = 0;
    for (i = 0; i < counters.length; i++) {
      x = x + counters[i].value * this.state.ExchangeRate;
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
        if (counters[i].sold === true) {
          x = x + counters[i].value * this.state.ExchangeRate;
        } else {
          x = x - counters[i].value * this.state.ExchangeRate;
        }
      }
    }

    return x;
  };

  handledata = () => {
    this.setState({
      counters: this.state.counters.concat({
        User: this.state.NewUser,
        sold: this.state.NewType,
        id: this.state.Newid,
        value: this.state.NewPrice,
        category: this.state.NewCat,
        sub_category: this.state.NewCat,
        Date: this.state.NewDate
      })
    });
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
          cash={this.addd()}
          help={this.helper()}
          status={this.helpemoji()}
        />
        <h1 className="text text-center text-bold bg-primary  ">IITD MART</h1>

        <main className="jumbotron">
          <form onSubmit={this.handleSubmit}>
            <label>
              Net CASH transctions after the Date:
              <input
                className="m-2"
                type="text"
                value={this.state.valuee}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" className="text text-success" value="Submit" />
          </form>

          <form onSubmit={this.changeval}>
            <label>
              Exchange Rate:
              <input
                className="m-2"
                type="text"
                value={this.state.ExchangeRate}
                onChange={this.changeval}
              />
            </label>
          </form>
          <p>
            Hide
            <input
              type="checkbox"
              onChange={this.handleCheck}
              defaultChecked={this.state.checked}
            />
          </p>
          {this.track()}
          <div />
          <form>
            <label>
              Transaction ID :
              <input
                className="m-2"
                type="text"
                value={this.state.Newid}
                onChange={this.handleId}
              />
            </label>
            <label>
              User :
              <input
                className="m-2"
                type="text"
                value={this.state.NewUser}
                onChange={this.handleUser}
              />
            </label>
            <label>
              Category :
              <input
                className="m-2"
                type="text"
                value={this.state.NewCat}
                onChange={this.handleCat}
              />
            </label>
            <label>
              Price :
              <input
                className="m-2"
                type="text"
                value={this.state.NewPrice}
                onChange={this.handlePrice}
              />
            </label>
            <label>
              Date :
              <input
                className="m-2"
                type="text"
                value={this.state.NewDate}
                onChange={this.handleDate}
              />
            </label>
            <label>
              Type of transaction :
              <input
                className="m-2"
                type="text"
                value={this.state.NewType}
                onChange={this.handleType}
              />
            </label>
          </form>
          <button className="btn btn-success m-4" onClick={this.handledata}>
            Add Data
          </button>
          <h3 className="text text-success">
            The Most Expensive thing on Cart is{" : "}
            {this.state.counters[this.maxx()].category} by{" "}
            {this.state.counters[this.maxx()].sub_category} for Rs{" "}
            {this.state.counters[this.maxx()].value}/-
          </h3>
          <button onClick={this.handleReverse} className="btn btn-success m-5">
            Reverse
          </button>
          <button onClick={this.handleSort} className="btn btn-primary m-5">
            Sort By Price
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
        <div className={"jumbotron "} style={{ width: 500 }} className="m-2 ">
          <CalendarHeatmap
            startDate={new Date(this.state.counters[this.mindate()].Date)}
            endDate={new Date()}
            values={this.getDate()}
            classForValue={value => {
              if (!value) {
                return "color-empty";
              } else if (value.count <= 4) {
                return `color-scale-${value.count}`;
              } else {
                return `color-scale-5`;
              }
            }}
            onMouseOver={(event, value) => {
              if (value) {
                alert(
                  "Transaction date: " +
                    value.date +
                    " \n" +
                    "Number of transactions:" +
                    value.count
                );
              }
            }}
            showWeekdayLabels={() => {
              return true;
            }}
          />
        </div>
        <div style={{ width: 100 }}>
          <PieChart
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" }
            ]}
          />
        </div>
      </React.Fragment>
    );
  }

  helper() {
    if (this.state.toggle === false) {
      return this.state.TotalMoney;
    } else {
      return "";
    }
  }

  helpemoji() {
    if (2 * this.add() > this.addd()) {
      return <FaSmile />;
    } else {
      return <FaSadCry />;
    }
  }

  track() {
    if (this.state.checked === false) {
      return (
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
          TotalSum={this.addd()}
        />
      );
    } else {
      return "";
    }
  }
}

export default App;
