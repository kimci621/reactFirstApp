import "./app-filter.css";
import { Component } from "react";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="btn-group">
        <button
          className="btn btn-light"
          type="button"
          onClick={() => {
            this.props.filterSelect("all");
          }}
        >
          Все сотрудники
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          onClick={() => {
            this.props.filterSelect("increase");
          }}
        >
          На повышение
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          onClick={() => {
            this.props.filterSelect("more1000");
          }}
        >
          З/П больше 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
