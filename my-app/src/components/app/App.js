import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./App.css";

//на странице реализовать редактировать инпут зп в реальном времени

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: "John Smith",
          salary: 800,
          increase: false,
          rise: false,
          id: 1,
        },
        {
          name: "Omar Mayer",
          salary: 500,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: "Rashid Ko",
          salary: 1000,
          increase: false,
          rise: false,
          id: 3,
        },
        {
          name: "Jack Daniels",
          salary: 12000,
          increase: false,
          rise: false,
          id: 4,
        },
        {
          name: "Kim Jordan",
          salary: 1350,
          increase: false,
          rise: false,
          id: 5,
        },
      ],
      term: "",
      filter: "all",
      newSalary: "",
    };
  }

  deleteWorker = (workerId) => {
    this.setState((state) => ({
      data: state.data.filter((item) => item.id !== workerId),
    }));
  };

  addNewWorker = (name, salary) => {
    const newWorker = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.state.data.length + 1,
    };
    const newArr = [...this.state.data, newWorker];

    this.setState(() => ({
      data: newArr,
    }));
  };

  toggleIncrease = (id) => {
    this.setState(() => ({
      data: this.state.data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  toggleRise = (id) => {
    this.setState(() => ({
      data: this.state.data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      }),
    }));
  };

  searchWorker = (data, term) => {
    if (term.length === 0) {
      return data;
    }
    return data.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  filterWorkers = (data, filter) => {
    switch (filter) {
      case "increase":
        return data.filter((item) => item.increase === true);
      case "more1000":
        return data.filter((item) => item.salary > 1000);
      default:
        return data;
    }
  };

  setTerm = (term) => {
    this.setState({ term: term });
  };

  filterSelect = (filter) => {
    this.setState({ filter: filter });
  };

  /*
  В state приходит инпут из компонента

  */

  onInputToSalary = (name) => {
    this.setState((state) => ({
      data: state.data.map((item) => {
        if (item.name === name) {
          return { ...item, salary: this.state.newSalary };
        }
        return item;
      }),
    }));
  };

  inputToState = (data, name) => {
    this.setState(() => {
      return { newSalary: data };
    });
    this.onInputToSalary(name);
  };

  render() {
    const countRise = this.state.data.filter((item) => item.rise);
    const visibleData = this.searchWorker(this.state.data, this.state.term);
    const filteredData = this.filterWorkers(visibleData, this.state.filter);

    return (
      <div className="app">
        <AppInfo all={this.state.data.length} rise={countRise.length} />

        <div className="search-panel">
          <SearchPanel setTerm={this.setTerm} />
          <AppFilter filterSelect={this.filterSelect} />
        </div>

        <EmployeesList
          workers={filteredData}
          onDeleteWorker={this.deleteWorker}
          toggleIncrease={this.toggleIncrease}
          toggleRise={this.toggleRise}
          inputToState={this.inputToState}
        />
        <EmployeesAddForm addNewWorker={this.addNewWorker} />
      </div>
    );
  }
}

export default App;
