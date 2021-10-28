import EmployeesListItem from "./employees-list-item/employees-list-item";
import "./employees-list.css";

function EmployeesList({ workers, onDeleteWorker, toggleIncrease, toggleRise, inputToState }) {
  let elems = workers.map((worker) => {

    return (
      <EmployeesListItem
        name={worker.name}
        salary={worker.salary}
        increase={worker.increase}
        rise={worker.rise}
        key={worker.id}
        onDeleteWorker={() => {
          onDeleteWorker(worker.id);
        }}
        toggleIncrease={()=>{toggleIncrease(worker.id)}}
        toggleRise={()=>{toggleRise(worker.id)}}
        inputToState={inputToState}
      />
    );
  });

  return <ul className="app-list list-group">{elems}</ul>;
}

export default EmployeesList;
