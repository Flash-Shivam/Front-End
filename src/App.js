import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import { FaSmile, FaSadCry } from "react-icons/fa";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./components/style.css";
import BarChart from "react-bar-chart";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      Newid: "",
      TotalMoney: 0,
      toggle: true,
      range: "0-3",
      search: "",
      del: "-1",
      quasi: "0",
      chan: "0"
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
    this.changerange = this.changerange.bind(this);
    this.handlesearch = this.handlesearch.bind(this);
    this.handledel = this.handledel.bind(this);
    this.handlequasi = this.handlequasi.bind(this);
    this.handlechan = this.handlechan.bind(this);
  }
  handleCat(event) {
    this.setState({ NewCat: event.target.value });
  }

  handledel(event) {
    this.setState({ del: event.target.value });
  }

  handlechan(event) {
    this.setState({ chan: event.target.value });
  }

  handlequasi(event) {
    this.setState({ quasi: event.target.value });
  }

  handleUser(event) {
    this.setState({ NewUser: event.target.value });
  }

  handlePrice(event) {
    this.setState({ NewPrice: event.target.value });
  }

  handlesearch(event) {
    this.setState({ search: event.target.value });
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

  changerange(event) {
    this.setState({ range: event.target.value });
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

  handleDelete = () => {
    const counters = this.state.counters.filter(
      c => c.id !== parseInt(this.state.del, 10)
    );
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
    for (i = 1; i < m.length; i++) {
      if (m[i] !== prev) {
        x.push(m[i]);
        z.push(1);
      } else {
        z[z.length - 1]++;
      }
      prev = m[i];
    }

    for (i = 0; i < x.length; i++) {
      y.push({
        date: x[i],
        count: z[i]
      });
    }

    return y;
  };

  getNamecount = () => {
    let i = 0;
    var s = "";
    for (i = 0; i < this.state.counters.length; i++) {
      s = s + this.state.counters[i].User + "@";
    }
    var m = s.split("@");
    m.sort();
    var y = [];
    var x = [];
    var z = [];
    var prev;
    for (i = 1; i < m.length; i++) {
      if (m[i] !== prev) {
        x.push(m[i]);
        z.push(1);
      } else {
        z[z.length - 1]++;
      }
      prev = m[i];
    }

    for (i = 0; i < x.length; i++) {
      y.push({
        text: x[i],
        value: z[i]
      });
    }

    return y;
  };

  getNameprice = () => {
    let i = 0;
    var s = "";
    for (i = 0; i < this.state.counters.length; i++) {
      s = s + this.state.counters[i].User + "@";
    }
    var m = s.split("@");
    m.sort();
    var y = [];
    var x = [];
    var z = [];
    var prev;
    for (i = 1; i < m.length; i++) {
      if (m[i] !== prev) {
        x.push(m[i]);
      }
      prev = m[i];
    }
    let j = 0;
    let temp = 0;
    for (i = 0; i < x.length; i++) {
      temp = 0;
      for (j = 0; j < this.state.counters.length; j++) {
        if (x[i] === this.state.counters[j].User) {
          temp = temp + this.state.counters[j].value;
        }
      }
      z.push(temp);
    }

    for (i = 0; i, x.length; i++) {
      y.push({
        text: x[i],
        value: z[i]
      });
    }

    return y;
  };

  getNames = () => {
    let i = 0;
    var s = "";
    for (i = 0; i < this.state.counters.length; i++) {
      s = s + this.state.counters[i].User + "@";
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
      }
      prev = m[i];
    }

    return x.length;
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

  handleSortid = () => {
    let counters = [...this.state.counters];
    let cr = counters.sort((a, b) => a.id > b.id);
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

  changeprice = () => {
    var z = [...this.state.counters];
    let i = 0;
    for (i = 0; i < z.length; i++) {
      if (z[i].id === parseInt(this.state.quasi, 10)) {
        z[i].value = z[i].value + parseInt(this.state.chan, 10);
        break;
      }
    }
    this.setState({ counters: z });
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

  getrange = () => {
    let x = this.state.range;
    let y = x.split("-");
    let z = [];
    let i = 0;
    y.sort();
    let p = parseInt(y[0], 10);
    let q = parseInt(y[1], 10);
    if (q >= this.state.counters.length) {
      q = this.state.counters.length - 1;
    }
    for (i = p; i <= q; i++) {
      z.push(this.state.counters[i]);
    }

    return z;
  };

  getSearch = () => {
    let m = this.state.range;
    let y = m.split("-");

    y.sort();
    let p = parseInt(y[0], 10);
    let q = parseInt(y[1], 10);
    if (q >= this.state.counters.length) {
      q = this.state.counters.length - 1;
    }
    let x = this.state.search;
    if (x === "") {
      return this.getrange();
    }
    let i = 0;
    let z = [];
    for (i = p; i <= q; i++) {
      if (this.state.counters[i].User.includes(x)) {
        z.push(this.state.counters[i]);
      }
      if (this.state.counters[i].Date.includes(x)) {
        z.push(this.state.counters[i]);
      }
      if (this.state.counters[i].category.includes(x)) {
        z.push(this.state.counters[i]);
      }
      if (this.state.counters[i].sub_category.includes(x)) {
        z.push(this.state.counters[i]);
      }

      if (this.state.counters[i].value.toString().includes(x)) {
        z.push(this.state.counters[i]);
      }
    }
    let w = [];
    var prev;
    z.sort();
    for (i = 0; i < z.length; i++) {
      if (z[i] !== prev) {
        w.push(z[i]);
      }
      prev = z[i];
    }
    return w;
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
    const z = this.getrange().map(c => (
      <li>
        {c.User +
          "     " +
          c.value +
          "    " +
          c.category +
          "    " +
          c.sub_category +
          "    " +
          c.Date}
      </li>
    ));
    const ab = this.getSearch().map(c => (
      <li>
        {c.User +
          "     " +
          c.value +
          "    " +
          c.category +
          "    " +
          c.sub_category +
          "    " +
          c.Date}
      </li>
    ));
    const ret = parseInt(this.state.del, 10);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    return (
      <React.Fragment>
        <Navbar
          total={this.state.counters.length}
          sum={this.add()}
          user={this.getNames()}
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
          <form onSubmit={this.changerange}>
            <label>
              Range
              <input
                className="m-2"
                type="text"
                value={this.state.range}
                onChange={this.changerange}
              />
            </label>
          </form>

          <form onSubmit={this.handlesearch}>
            <label>
              Search :
              <input
                className="m-2"
                type="text"
                value={this.state.search}
                onChange={this.handlesearch}
              />
            </label>
          </form>

          <form onSubmit={this.handledel}>
            <label>
              Delete Entry :
              <input
                className="m-2"
                type="text"
                value={this.state.del}
                onChange={this.handledel}
              />
            </label>
          </form>

          <button onClick={this.handleDelete} className="btn btn-danger ">
            Delete
          </button>

          <form>
            <label>
              Id to be incremented :
              <input
                className="m-2"
                type="text"
                value={this.state.quasi}
                onChange={this.handlequasi}
              />
            </label>

            <label>
              by :
              <input
                className="m-2"
                type="text"
                value={this.state.chan}
                onChange={this.handlechan}
              />
            </label>
          </form>
          <button onClick={this.changeprice} className="btn btn-success ">
            Change
          </button>
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
            Hide Data
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
          <button onClick={this.handleSortid} className="btn btn-primary m-5">
            Sort By ID
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
        <div style={{ width: "50%" }}>
          <BarChart
            ylabel="# Cash transactions"
            width={500}
            height={500}
            margin={margin}
            data={this.getNamecount()}
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
          ab={this.getSearch}
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
