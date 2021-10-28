import "./employees-add-form.css";
import { Component } from "react";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    if (e.target.getAttribute("type") === "text") {
      this.setState({ name: e.target.value });
    } else {
      this.setState({ salary: e.target.value });
    }
  };

  add = () => {
    if(this.state.name && this.state.salary){
      return (
        this.props.addNewWorker(this.state.name, this.state.salary)
      )
    }
  }

  render() {
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника:</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            value={this.state.name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            value={this.state.salary}
            onChange={this.onValueChange}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={(e) => {
              e.preventDefault();
              this.add()
            }}
          >Добавить</button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
