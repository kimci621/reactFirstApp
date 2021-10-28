import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainClass: "list-group-item d-flex justify-content-between",
      className: "like",
      onInputData: "",
    };
  }

  toState = (e) => {
    this.setState((state) => {
      return { onInputData: (state.onInputData = e.target.value.slice(0, -1)) };
    });
  };

  handle = (e) => {
    setTimeout(() => {
      this.toState(e);
      this.props.inputToState(this.state.onInputData, this.props.name);
    }, 100);
  };

  render() {
    const {
      name,
      salary,
      onDeleteWorker,
      toggleIncrease,
      toggleRise,
      increase,
      rise,
    } = this.props;

    let className = this.state.mainClass;

    if (increase === true) {
      className += " increase";
    }

    if (rise === true) {
      className += " like";
    }

    return (
      <li className={className}>
        <span className="list-group-item-label" onClick={toggleIncrease}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
          onChange={this.handle}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={toggleRise}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm"
            onClick={onDeleteWorker}
          >
            <i className="fas fa-trash"></i>
          </button>

          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
