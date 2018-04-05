import React, { Component } from "react";
import "./App.css";

let objArr = [
  {
    name: "Tamil Mani",
    year: 1,
    gender: "m",
    marks: [
      {
        sub: "Tamil",
        mark: 98
      },
      {
        sub: "English",
        mark: 65
      },
      {
        sub: "Maths",
        mark: 88
      }
    ]
  },
  {
    name: "Amuthan",
    year: 1,
    gender: "m",
    marks: [
      {
        sub: "Tamil",
        mark: 89
      },
      {
        sub: "English",
        mark: 79
      },
      {
        sub: "Maths",
        mark: 79
      }
    ]
  },
  {
    name: "Mugilan",
    year: 1,
    gender: "m",
    marks: [
      {
        sub: "Tamil",
        mark: 97
      },
      {
        sub: "English",
        mark: 89
      },
      {
        sub: "Maths",
        mark: 99
      }
    ]
  },
  {
    name: "Tamil Oviya",
    year: 1,
    gender: "f",
    marks: [
      {
        sub: "Tamil",
        mark: 89
      },
      {
        sub: "English",
        mark: 87
      },
      {
        sub: "Maths",
        mark: 97
      }
    ]
  },
  {
    name: "Amutha",
    year: 1,
    gender: "f",
    marks: [
      {
        sub: "Tamil",
        mark: 89
      },
      {
        sub: "English",
        mark: 69
      },
      {
        sub: "Maths",
        mark: 79
      }
    ]
  },
  {
    name: "Mugil Mathi",
    year: 1,
    gender: "f",
    marks: [
      {
        sub: "Tamil",
        mark: 97
      },
      {
        sub: "English",
        mark: 89
      },
      {
        sub: "Maths",
        mark: 99
      }
    ]
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.setScore = this.setScore.bind(this);
    this.setSubject = this.setSubject.bind(this);
    this.setGender = this.setGender.bind(this);
    this.filterObjArr = this.filterObjArr.bind(this);
    this.state = {
      objArr: objArr,
      score: "H", //H,L
      sub: "T", // T,E,Mt
      gender: "all", // all,m,f
      filterArr: []
    };
  }
  setScore(e) {
    console.log(e.target.value);
    this.setState({ score: e.target.value });
  }
  setSubject(e) {
    console.log(e.target.value);
    this.setState({ sub: e.target.value });
  }
  setGender(e) {
    console.log(e.target.value);
    this.setState({ gender: e.target.value });
  }
  filterObjArr() {
    let objArr = this.state.objArr;
    let filterArr = [];
    let gender = this.state.gender;
    let sub = this.state.sub === "T" ? 0 : this.state.sub === "E" ? 1 : 2;
    console.log(sub);
    if (this.state.score === "H") {
      let highest = 0;
      objArr.map(function(val) {
        if (gender === "all") {
          if (val.marks[sub].mark >= highest) {
            highest = val.marks[sub].mark;
          }
        } else {
          if (val.marks[sub].mark >= highest && val.gender === gender) {
            highest = val.marks[sub].mark;
          }
        }
        return true;
      });
      console.log(highest);
      objArr.map(function(val) {
        if (gender === "all") {
          if (val.marks[sub].mark === highest) {
            filterArr.push(val);
          }
        } else if (val.marks[sub].mark === highest && val.gender === gender) {
          filterArr.push(val);
        }
        return true;
      });
    } else {
      let lowest = 100;
      objArr.map(function(val) {
        if (gender === "all") {
          if (val.marks[sub].mark <= lowest) {
            lowest = val.marks[sub].mark;
          }
        } else if (val.marks[sub].mark <= lowest && val.gender === gender) {
          lowest = val.marks[sub].mark;
        }
        return true;
      });
      console.log(lowest);
      objArr.map(function(val) {
        if (gender === "all") {
          if (val.marks[sub].mark === lowest) {
            filterArr.push(val);
          }
        } else if (val.marks[sub].mark === lowest && val.gender === gender) {
          filterArr.push(val);
        }
        return true;
      });
    }

    console.log(filterArr);
    this.setState({ filterArr: filterArr });
  }
  render() {
    return (
      <div className="App">
        <h3>Score Board </h3>
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Tamil</th>
              <th>English</th>
              <th>Math</th>
              <th>Total</th>
            </tr>
            <tbody>
              {this.state.objArr.map(function(val) {
                return (
                  <tr>
                    <td>{val.name}</td>
                    <td>{val.gender}</td>
                    <td>{val.marks[0].mark}</td>
                    <td>{val.marks[1].mark}</td>
                    <td>{val.marks[2].mark}</td>
                    <td>
                      {val.marks[0].mark +
                        val.marks[1].mark +
                        val.marks[2].mark}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <h3>Filter Form</h3>
          <p>
            Score
            <select value={this.state.score} onChange={this.setScore}>
              <option value="H">Highest</option>
              <option value="L">Lowest</option>
            </select>
            in subjects
            <select value={this.state.sub} onChange={this.setSubject}>
              <option value="T">Tamil</option>
              <option value="E">English</option>
              <option value="Mt">Maths</option>
            </select>
            for gender
            <select value={this.state.gender} onChange={this.setGender}>
              <option value="all">All</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
            &nbsp;&nbsp;&nbsp;
            <button onClick={this.filterObjArr}>Apply</button>
          </p>
        </div>
        <div>
          <h3>Filter Result</h3>
          <div
            style={{
              visibility: this.state.filterArr.length > 0 ? "visible" : "hidden"
            }}
          >
            <table>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Tamil</th>
                <th>English</th>
                <th>Math</th>
                <th>Total</th>
              </tr>
              <tbody>
                {this.state.filterArr &&
                  this.state.filterArr.length > 0 &&
                  this.state.filterArr.map(function(val) {
                    return (
                      <tr>
                        <td>{val.name}</td>
                        <td>{val.gender}</td>
                        <td>{val.marks[0].mark}</td>
                        <td>{val.marks[1].mark}</td>
                        <td>{val.marks[2].mark}</td>
                        <td>
                          {val.marks[0].mark +
                            val.marks[1].mark +
                            val.marks[2].mark}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
