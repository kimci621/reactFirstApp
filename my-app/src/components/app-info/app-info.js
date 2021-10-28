import "./app-info.css";

function AppInfo(props) {
  return <div className="app-info">
    <h1>Учет сотрудников в компании <p></p> "UMBRELLA"</h1>
    <h2>Общее число сотрудников: {props.all}</h2>
    <h2>Премию получат: {props.rise}</h2>
  </div>;
}


export default AppInfo;